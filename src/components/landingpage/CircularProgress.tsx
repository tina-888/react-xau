import React, { useEffect, useState } from "react";

interface CircularProgressProps {
  percentage: number;
  progressColor: string;
  bgColor: string;
  innerCircleColor: string;
  value: string; // New prop to display in the middle
  label: string; // New prop for the top label
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, progressColor, bgColor, innerCircleColor, value, label }) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const speed = 50;

    const progress = setInterval(() => {
      startValue++;
      setProgressValue(startValue);

      if (startValue === percentage) {
        clearInterval(progress);
      }
    }, speed);

    return () => clearInterval(progress); // Cleanup on unmount
  }, [percentage]);

  return (
    <div
      className="circular-progress relative w-36 h-36 rounded-full flex items-center justify-center customShadow"
      style={{
        background: `conic-gradient(${progressColor} ${progressValue * 3.6}deg, ${bgColor} 0deg)`,
        position: "relative",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top Label */}
      <div
        className=" text-white font-bold text-lg"
        style={{
          position: "absolute",
          top: "-80px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        {label}
      </div>

      {/* Inner Circle */}
      <div
        className="inner-circle"
        style={{
          backgroundColor: innerCircleColor,
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Middle Value */}
        <p className="value " style={{ color: progressColor, fontSize: "40px", fontWeight: "bold" }}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
