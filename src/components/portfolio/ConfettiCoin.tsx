import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import myVideo from "/cobavga.gif";

const Confetti = () => {
  const [data, setData] = useState<number>(0);

  // number in mid
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => prevData + 0.1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // confetti setting
  useEffect(() => {
    const button = document.querySelector(".confetti-button") as HTMLButtonElement | null;

    if (!button) return;

    const scalar = 4;
    const coin = confetti.shapeFromText({ text: "🪙" });
    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      origin: { x: 0.5, y: 0.8 },
      startVelocity: 15,
      shapes: [coin],
      scalar,
    };

    const handleConfetti = () => {
      confetti({
        ...defaults,
        particleCount: 10,
      });
    };

    button.addEventListener("click", handleConfetti);

    // Cleanup the event listener on component unmount
    const intervalId = setInterval(() => {
      button.click();
    }, 1000);

    // Cleanup the event listener and interval on component unmount
    return () => {
      button.removeEventListener("click", handleConfetti);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center relative overflow-hidden">
        <div className=" flex items-center justify-center w-full">
          <img className="w-1/2 h-full py-12" src={myVideo} alt="Circular animation" />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          {/* <img src="/icons/coin.svg" alt="Profile Image" className="w-32" /> */}
          <h1 className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl" style={{ top: "-10px" }}>
            {data.toFixed(1)}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Confetti;
