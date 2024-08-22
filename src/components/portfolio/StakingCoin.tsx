import { useState, useEffect } from "react";
import "../../styles/stakingCoin.css";
import apiReward from "../../api/apiReward"; // Ensure that apiReward is correctly set up

interface RewardData {
  coin: number;
  totalcoin: number; // Ensure property names match the backend API
}

const ActionButton = () => {
  const [buttonState, setButtonState] = useState<"start" | "countdown" | "claim">("start");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [coin, setCoin] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(0);

  //const [lastCoin, setLastCoin] = useState<RewardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (buttonState === "start") {
      const initialCountdown = 3; // Set countdown time in seconds
      setCountdown(initialCountdown);
      setCoin(0); // Reset coin count to 0
      setButtonState("countdown");
      setAnimationDuration(initialCountdown);
    } else if (buttonState === "claim") {
      try {
        // Fetch the most recent reward
        const response = await apiReward.RewardGetLast();
        const newTotalCoin = response.totalcoin + coin;
        const rewardData: RewardData = { coin, totalcoin: newTotalCoin };
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
    let timer: NodeJS.Timeout;
    if (countdown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => (prev ? prev - 1 : null));
        setCoin((prev) => prev + 1); // Increase coin every second
      }, 1000);
    } else if (countdown === 0) {
      setButtonState("claim");
      setCountdown(null);
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
