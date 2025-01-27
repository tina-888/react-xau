import { useEffect } from "react";
import Campaigns from "../components/campaign/Campaigns";
import Footer from "../components/Footer";

const Campaign = () => {
  useEffect(() => {
    document.title = "Campaign | XAU";
  }, []);
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <div className="flex flex-col flex-grow  items-center justify-start ">
          <div className=" w-5/6 max-md:w-full">
            <div className=" flex mt-16 items-center justify-center">
              <span className="absolute py-6 mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
                Campaign
              </span>
              <h1 className="relative py-6 top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto ">
                Campaign
              </h1>
            </div>
            <Campaigns />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Campaign;
