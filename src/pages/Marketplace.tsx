import { useEffect } from "react";
import ExchangeCoin from "../components/marketplace/ExchangeCoin";
import Footer from "../components/Footer";

const Marketplace = () => {
  useEffect(() => {
    document.title = "Leaderboard | XAU";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
      <div className="flex flex-col flex-grow w-full items-center justify-start">
        <div className="mt-16">
          <span className="absolute py-6 mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
            EXCHANGE YOUR COIN
          </span>
          <h1 className="relative py-6 top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto">
            EXCHANGE YOUR COIN
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-4 gap-4 max-md:flex flex-col max-md:gap-1">
            <ExchangeCoin />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
