import { useEffect, useState } from "react";

import myVideo from "/cobavga.gif";

const Confetti = () => {
  // const [data, setData] = useState<number>(0);
  const [xau, setXau] = useState(0.0);
  const [usd, setUsd] = useState(0.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setXau((prevXau) => {
        const newXau = prevXau + 0.00000001;
        const newUsd = newXau / 0.00041089;
        setUsd(newUsd);
        return newXau;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center relative overflow-hidden">
        <div className=" flex items-center justify-center w-full">
          <img className="w-1/2 h-full py-12" src={myVideo} alt="Circular animation" />
        </div>
        <div className="relative flex flex-col py-4 items-center justify-center">
          <h1 className="flex items-center justify-center text-white font-iceland text-5xl max-md:text-xl" style={{ top: "-10px" }}>
            {xau.toFixed(8)} XAU = {usd.toFixed(8)} USD
          </h1>
        </div>
        <div className="flex justify-center items-center py-20 w-full h-full px-3 md:px-0">
          <div className="w-5/6 customShadow rounded-lg mx-3 max-md:w-full md:mx-4  border-0">
            <table className="w-full table-fixed text-center text-2xl font-iceland max-md:text-sm">
              <thead>
                <tr className="bg-gray-600">
                  <th className="py-2 px-6 text-white font-bold uppercase">Date</th>
                  <th className="py-2 px-6 text-white font-bold uppercase">
                    Return <p className="text-xs">per day</p>
                  </th>
                  <th className="py-2 px-6 text-white font-bold uppercase">deposit</th>
                  <th className="py-2 px-6 text-white font-bold uppercase">profit</th>
                  <th className="py-2 px-6 text-white font-bold uppercase">action</th>
                  <th className="py-2 px-6 text-white font-bold uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-6 text-white text-ellipsis truncate">15-08-2024</td>
                  <td className="py-2 px-6 text-white ">8 %</td>
                  <td className="py-2 px-6 text-white">$ 500</td>
                  <td className="py-2 px-6 text-white">500 XAU</td>
                  <td className="py-2 px-6 text-white ">
                    <button className="bg-custom-gold-rod w-20 text-white py-1 px-2 rounded-full text-xl max-md:text-xs">Claim</button>
                  </td>
                  <td className="py-2 px-6 text-white">
                    <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xl max-md:text-xs">Active</span>
                  </td>
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confetti;
