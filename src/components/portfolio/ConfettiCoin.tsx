import { useEffect, useState } from "react";

import myVideo from "/cobavga.gif";

const Confetti = () => {
  const [data, setData] = useState<number>(0);

  // number in mid
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => prevData + 0.000001);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center relative overflow-hidden">
        <div className=" flex items-center justify-center w-full">
          <img className="w-1/2 h-full py-12" src={myVideo} alt="Circular animation" />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="flex items-center justify-center text-white font-iceland text-4xl" style={{ top: "-10px" }}>
            $ {data.toFixed(6)}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Confetti;
