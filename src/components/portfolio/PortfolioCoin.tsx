import { useEffect, useState } from "react";

import StakingCoin from "./StakingCoin";
import HistoryReward from "./HistoryReward";

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
        <div className="">
          <span className="absolute py-6 mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
            Earning Gold Profit
          </span>
          <h1 className="relative py-6 top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto ">
            Earning Gold Profit
          </h1>
        </div>
        <div className="relative flex flex-col py-4 items-center justify-center">
          <h1 className="flex items-center justify-center text-white font-iceland text-4xl max-md:text-xl" style={{ top: "-10px" }}>
            {xau.toFixed(8)} XAU = {usd.toFixed(8)} USD
          </h1>
        </div>

        {/* iamage */}
        <div className=" flex items-center justify-center w-full">
          <img className="w-1/2 h-full py-12 max-md:w-full" src="https://pub-8d0181f3c475440db5bb645b0917592a.r2.dev/cobavga.gif " alt="Circular animation" />
        </div>
        <div className="">
          <span className="absolute py-6 mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
            Earning Your Coin
          </span>
          <h1 className="relative py-6 top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto ">
            Earning Your Coin
          </h1>
        </div>
        <h1 className="text-white"></h1>
        {/* button */}
        <div className="flex items-center pt-10 justify-center w-1/3 max-md:w-full max-md:px-6 ">
          <StakingCoin />
        </div>
        {/* tabel */}
        <div className="flex w-full items-start justify-center gap-5 max-md:flex-col ">
          <div className="flex justify-center items-center py-20 md:px-0 max-md:w-full max-md:pt-20 max-md:px-6">
            <div className="w-full max-w-4xl customShadow rounded-2xl md:mx-4 border-0">
              <h2 className="text-2xl font-bold mb-4 text-center text-white pt-5">Earning Gold History</h2>
              <table className="w-full table-fixed text-center text-2xl font-iceland max-md:text-sm">
                <thead>
                  <tr className="bg-gray-600">
                    <th className="py-2 px-6 h-16 text-white font-bold uppercase max-md:h-8">Date</th>
                    <th className="py-2 px-6 text-white font-bold uppercase text-ellipsis truncate">
                      Return <p className="text-xs">per day</p>
                    </th>
                    <th className="py-2 px-6 text-white font-bold uppercase">Deposit</th>
                    <th className="py-2 px-6 text-white font-bold uppercase">Profit</th>
                    <th className="py-2 px-6 text-white font-bold uppercase">Action</th>
                    <th className="py-2 px-6 text-white font-bold uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-6 text-white text-ellipsis truncate">15-08-2024</td>
                    <td className="py-2 px-6 text-white text-ellipsis truncate">8 %</td>
                    <td className="py-2 px-6 text-white text-ellipsis truncate">$ 500</td>
                    <td className="py-2 px-6 text-white text-ellipsis truncate">500 XAU</td>
                    <td className="py-2 px-6 text-white">
                      <button className="bg-custom-gold-rod w-20 text-white py-1 px-2 rounded-full text-xl max-md:text-xs max-md:w-12">Claim</button>
                    </td>
                    <td className="py-2 px-6 text-white">
                      <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xl max-md:text-xs max-md:w-12">Active</span>
                    </td>
                  </tr>
                  {/* Add more rows here if needed */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-1/3 max-md:w-full max-md:px-6">
            <HistoryReward />
          </div>
        </div>
      </div>
    </>
  );
};

export default Confetti;
