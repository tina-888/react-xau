import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";
import "../../styles/index.css";

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-12-20T00:00:00"); // Properly formatted date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = startDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(interval);
        // Handle countdown completion if needed
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center justify-center relative w-full">
      <section className="relative">
        <div className="container mx-auto h-full w-5/6">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <div className="w-full md:w-3/5 order-1 md:order-2 flex items-center justify-center">
              <img src="/images/landingPage/mining.png" alt="mockup" className="w-full" />
            </div>
            <div className="w-full md:w-2/5 order-2 md:order-1 mx-auto md:mx-0 md:text-left text-left">
              <h1 className="max-w-2xl text-5xl mb-2 font-extrabold tracking-tight leading-none text-white">Staking Gold (XAU)</h1>
              <blockquote className="text-xl italic font-semibold text-slate-300">
                <p>"Earn Effortlessly, Secure Your Future—Gold at Your Fingertips"</p>
              </blockquote>
              <p className="pt-8 text-sm font-normal text-slate-200">
                Staking Gold apps provide automatic earning, robust safety features, compounding rewards, and consistent monthly profits, making them a smart and secure choice for passive income.
              </p>
              <div className="flex justify-center md:justify-start mt-8 max-md:pb-12">
                <Link to={"/goldearning"} className="inline-flex items-center px-8 py-3 text-base font-semibold text-center text-white bg-custom-gold-rod rounded-3xl hover:bg-black/90 focus:ring-4 focus:ring-custom-gold-rod/50">
                  Presale (Staking XAU)
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-stretch mx-auto p-4 rounded-2xl bg-gray-700">
            <div className="items-center w-full justify-stretch mx-auto">
              <div className="flex gap-5 max-md:flex-col max-md:gap-5">
                <div className="flex flex-col items-center w-1/2 mx-8 pt-11 max-md:ml-0 max-md:w-full">
                  <CircularProgress
                    percentage={80} // This controls the fill level
                    progressColor="#D69900"
                    bgColor="white"
                    innerCircleColor="#393E46"
                    value={"1245"} // The value displayed in the middle
                    label="Staker" // The label displayed at the top
                  />
                </div>

                <div className="flex flex-col items-center w-1/2 mx-8 pt-11 max-md:ml-0 max-md:w-full">
                  <CircularProgress
                    percentage={60} // This controls the fill level
                    progressColor="#D69900"
                    bgColor="white"
                    innerCircleColor="#393E46"
                    value={"$200"} // The value displayed in the middle
                    label="Deposit" // The label displayed at the top
                  />
                </div>
                <div className="flex flex-col items-center w-full mx-8 pt-10 max-md:ml-0 max-md:w-full">
                  <div className="flex  gap-8 items-center max-md:flex-col max-md:gap-12">
                    <div className="flex flex-col items-center">
                      <CircularProgress
                        percentage={100} // This controls the fill level
                        progressColor="#D69900"
                        bgColor="white"
                        innerCircleColor="#393E46"
                        value={`${days}`} // The value displayed in the middle
                        label="Days" // The label displayed at the top
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <CircularProgress
                        percentage={100} // This controls the fill level
                        progressColor="#D69900"
                        bgColor="white"
                        innerCircleColor="#393E46"
                        value={`${hours}`} // The value displayed in the middle
                        label="Hours" // The label displayed at the top
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <CircularProgress
                        percentage={100} // This controls the fill level
                        progressColor="#D69900"
                        bgColor="white"
                        innerCircleColor="#393E46"
                        value={`${minutes}`} // The value displayed in the middle
                        label="Minutes" // The label displayed at the top
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <CircularProgress
                        percentage={100} // This controls the fill level
                        progressColor="#D69900"
                        bgColor="white"
                        innerCircleColor="#393E46"
                        value={`${seconds}`} // The value displayed in the middle
                        label="Seconds" // The label displayed at the top
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
