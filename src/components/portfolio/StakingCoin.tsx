import { useState, useEffect } from "react";
import "../../styles/stakingCoin.css";

import apiReward from "../../api/apiReward";
import apiCountdown from "../../api/apiCountdown";

interface AddRewardData {
  coin: number;
  totalcoin: number;
}
interface AddCount {
  countdown_start: string;
  countdownDuration: number;
}

const ActionButton = () => {
  const [buttonState, setButtonState] = useState<"start" | "countdown" | "claim">("start");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [coin, setCoin] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(0);

  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (buttonState === "start") {
      const initialCountdown = 120; // Set countdown time in seconds
      const now = new Date();
      // Convert now to UTC format
      const nowUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

      try {
        const addCountData: AddCount = {
          countdown_start: nowUTC.toISOString(), // Ensure date is in ISO 8601 format
          countdownDuration: initialCountdown,
        };
        const result = await apiCountdown.CountAdd(addCountData);
        console.log("API result:", result);
      } catch (error) {
        setError("Failed to store start time. Please try again.");
        console.error("Error storing start time:", error);
      }

      setCountdown(initialCountdown);
      setCoin(0); // Reset coin count to 0
      setButtonState("countdown");
      setAnimationDuration(initialCountdown);
    } else if (buttonState === "claim") {
      try {
        // Fetch the most recent reward
        const response = await apiReward.RewardGetLast();
        console.log(response);

        if (!response) {
          throw new Error("Failed to fetch the last reward.");
        }

        // Determine the new total coin value
        const newTotalCoin = (response.totalcoin ?? 0) + coin;
        const rewardData: AddRewardData = { coin, totalcoin: newTotalCoin };

        const result = await apiReward.RewardAdd(rewardData);

        console.log("Claiming coins result:", result); // Debug result

        // Refresh the page
        window.location.reload();
        setButtonState("start");
      } catch (error) {
        setError("Failed to claim reward. Please try again.");
        console.error("Error claiming reward:", error);
      }
    }
  };
  useEffect(() => {
    const fetchRemainingTime = async () => {
      try {
        const response = await fetch("/countdown/remaining");
        const data = await response.json();
        if (data.remaining !== undefined) {
          setCountdown(data.remaining);
          setButtonState(data.completed ? "claim" : "start");
        }
      } catch (error) {
        console.error("Error fetching remaining time:", error);
      }
    };

    fetchRemainingTime();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => {
          const newCountdown = prev ? prev - 1 : 0;
          if (newCountdown === 0) {
            setButtonState("claim");
          }
          return newCountdown;
        });
        setCoin((prev) => prev + 1); // Increment coin every second
      }, 1000);
    }
    return () => clearTimeout(timer);
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
    </div>
  );
};

export default ActionButton;
