import { useState, useEffect } from "react";
import "../../styles/stakingCoin.css";
import { SuccessAlert } from "../Alerts/Alerts";

import apiReward from "../../api/apiReward";
import apiCountdown from "../../api/apiCountdown";

interface AddRewardData {
  coin: number;
  totalcoin: number;
}

interface AddCount {
  countdown_start: string;
  countdownDuration: number;
  completed: boolean;
}

const ActionButton = () => {
  const initialCountdown = 2; // Set countdown time in seconds
  const [buttonState, setButtonState] = useState<"start" | "countdown" | "claim">("start");
  const [countdown, setCountdown] = useState<number>(0);
  const [coin, setCoin] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("count_end_time");
    const savedCountdown = localStorage.getItem("count_timer");
    const savedCoin = localStorage.getItem("coin_count");

    if (savedEndTime) {
      const endTime = new Date(parseInt(savedEndTime));
      const now = new Date();
      const remainingTime = Math.max(Math.floor((endTime.getTime() - now.getTime()) / 1000), 0);

      if (remainingTime > 0) {
        setCountdown(remainingTime);
        setButtonState("countdown");
        setAnimationDuration(remainingTime);
      } else {
        setButtonState("claim"); // Automatically set to claim if the time has passed
      }
    } else if (savedCountdown) {
      const savedTime = parseInt(savedCountdown);
      setCountdown(savedTime);
      setButtonState(savedTime > 0 ? "countdown" : "claim");
    } else {
      setButtonState("start");
    }

    if (savedCoin) {
      setCoin(parseInt(savedCoin));
    }
  }, []);

  const handleClick = async () => {
    if (buttonState === "start") {
      const now = new Date();
      const endTime = new Date(now.getTime() + initialCountdown * 1000);

      try {
        const addCountData: AddCount = {
          countdown_start: now.toISOString(),
          countdownDuration: initialCountdown,
          completed: false,
        };
        await apiCountdown.CountAdd(addCountData);
        localStorage.setItem("count_end_time", endTime.getTime().toString());
        localStorage.setItem("count_timer", initialCountdown.toString());
        localStorage.setItem("coin_count", "0");
      } catch (error) {
        setError("Failed to store start time. Please try again.");
        console.error("Error storing start time:", error);
      }

      setCountdown(initialCountdown);
      setCoin(0);
      setButtonState("countdown");
      setAnimationDuration(initialCountdown);
    } else if (buttonState === "claim") {
      try {
        const response = await apiReward.RewardGetLast();
        if (!response) {
          throw new Error("Failed to fetch the last reward.");
        }

        const newTotalCoin = (response.totalcoin ?? 0) + coin;
        const rewardData: AddRewardData = { coin, totalcoin: newTotalCoin };

        await apiReward.RewardAdd(rewardData);
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);
        // window.location.reload();
        setButtonState("start");
        localStorage.removeItem("count_end_time");
        localStorage.removeItem("count_timer");
        localStorage.removeItem("coin_count");
      } catch (error) {
        setError("Failed to claim reward. Please try again.");
        console.error("Error claiming reward:", error);
      }
    }
  };

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown((prev) => {
        if (prev <= 0) {
          console.log("Countdown ended, setting button state to claim");
          setButtonState("claim");
          localStorage.removeItem("count_end_time");
          localStorage.removeItem("count_timer");
          localStorage.removeItem("coin_count");
          return 0;
        }

        const newCountdown = prev - 1;
        localStorage.setItem("count_timer", newCountdown.toString());
        setCoin((prevCoin) => {
          const newCoin = prevCoin + 1;
          localStorage.setItem("coin_count", newCoin.toString());
          return newCoin;
        });
        return newCountdown;
      });
    };

    if (countdown > 0) {
      const timerId = setInterval(updateCountdown, 1000);
      return () => clearInterval(timerId);
    }
  }, [countdown]);

  if (error) return <p>{error}</p>;

  return (
    <div
      className={`relative h-16 w-full bg-custom-gold-rod rounded-3xl cursor-pointer shadow-lg overflow-hidden ${buttonState === "countdown" ? "progress disabled" : ""}`}
      style={{ "--animation-duration": `${animationDuration}s` } as React.CSSProperties}
      onClick={buttonState !== "countdown" ? handleClick : undefined}
    >
      <div className="flex items-center justify-center h-full w-full text-white">
        <i className="bx bx-cloud-upload text-2xl"></i>
        <span className="ml-2 text-lg font-normal">
          {buttonState === "start" && "Start"}
          {buttonState === "countdown" && `Counting down... ${countdown}s`}
          {buttonState === "claim" && "Claim"}
        </span>
        {buttonState === "countdown" && <span className="absolute right-4 text-lg font-normal">+{coin} coins</span>}
      </div>
      {showSuccessPopup && <SuccessAlert message="Your reward has been claimed." />}
    </div>
  );
};

export default ActionButton;
