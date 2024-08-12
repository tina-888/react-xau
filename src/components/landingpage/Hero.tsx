import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="items-center justify-center relative w-full">
      <section className="relative h-screen -mt-28">
        <div className="container mx-auto h-full w-5/6 ">
          <div className="flex flex-wrap items-center justify-between mx-auto pt-40 pb-36">
            <div className="w-1/2">
              <h1 className="max-w-2xl text-5xl mb-2 font-extrabold tracking-tight leading-none text-white">Mining Gold (XAU)</h1>
              <blockquote className="text-xl italic font-semibold text-slate-300">
                <p>"Earn Effortlessly, Secure Your Future—Gold at Your Fingertips"</p>
              </blockquote>
              <p className="pt-8 text-sm font-normal text-slate-200">
                Mining gold apps provide automatic earning, robust safety features, compounding rewards, and consistent monthly profits, making them a smart and secure choice for passive income.
              </p>
              <div className="flex mt-8">
                <Link to={"/goldmining"} className="inline-flex items-center px-8 py-3 text-base font-semibold text-center text-white bg-custom-gold-rod rounded-3xl hover:bg-black/90 focus:ring-4 focus:ring-custom-gold-rod/50 mr-4">
                  Start Mining
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="/images/landingPage/mining.png" alt="mockup" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
