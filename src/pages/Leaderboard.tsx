import { useEffect } from "react";
import LeadRefCod from "../components/leaderboard/LeadRefCod";
import LeadDepostit from "../components/leaderboard/LeadDeposit";
import Footer from "../components/Footer";
// import ComingSoon from "./ComingSoon";

const Leaderboard = () => {
  useEffect(() => {
    document.title = "Leaderboard | XAU";
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
      <div className="flex flex-col flex-grow  items-center justify-start ">
        <div className=" w-5/6 max-md:w-full">
          <div className=" flex mt-16 items-center justify-center">
            <span className="absolute py-6 mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
              LEADERBOARD
            </span>
            <h1 className="relative py-6 top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto ">
              LEADERBOARD
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 p-6">
            <div className="flex-1  p-4  mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-white mb-4 text-center pb-2">Top Inviting Users</h1>
              <LeadRefCod />
            </div>
            <div className="flex-1  p-4 ">
              <h1 className="text-3xl font-bold text-white mb-4 text-center pb-2">Top Deposit Contributors</h1>
              <LeadDepostit />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
