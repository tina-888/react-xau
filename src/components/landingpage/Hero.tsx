import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="items-center justify-center relative w-full ">
      <section className="relative">
        <div className="container mx-auto h-full w-5/6 ">
          <div className="flex flex-wrap items-center justify-between mx-auto ">
            <div className="w-full md:w-3/5 order-1 md:order-2  flex items-center justify-center">
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
              <div className="flex justify-center md:justify-start mt-8">
                <Link to={"/goldearning"} className="inline-flex items-center px-8 py-3 text-base font-semibold text-center text-white bg-custom-gold-rod rounded-3xl hover:bg-black/90 focus:ring-4 focus:ring-custom-gold-rod/50">
                  Presale (Staking XAU)
                </Link>
              </div>
              {/* <div className="text-sm font-normal text-slate-200">countdown 3:00::0</div> */}
            </div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-stretch mx-auto p-4 rounded-2xl bg-gradient-to-r from-custom-darkgold via-custom-darkgold to-custom-darkgold">
            <div className="items-center w-full justify-stretch mx-auto ">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col items-left w-full mx-8 max-md:ml-0 max-md:w-full">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-bold">Stakers</span>
                  </div>
                  <div className="text-5xl font-bold text-white">1549 </div>
                  <div className="flex mb-2">
                    <div className="text-right w-full">
                      <span className="text-xs font-semibold inline-block text-white">80%</span>
                      <div className="flex rounded-full h-2 bg-gray-200 w-full">
                        <div style={{ width: `80%` }} className="rounded-full bg-custom-gold-rod"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-left w-full mx-8 max-md:ml-0 max-md:w-full">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-bold">Deposit</span>
                  </div>
                  <div className="text-3xl font-bold text-white">$1000</div>
                  <div className="flex mb-2">
                    <div className="text-right w-full">
                      <span className="text-xs font-semibold inline-block text-white">50%</span>
                      <div className="flex rounded-full h-2 bg-gray-200 w-full">
                        <div style={{ width: `50%` }} className="rounded-full bg-custom-gold-rod"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-left w-full mx-8 max-md:ml-0 max-md:w-full">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-bold">Sales</span>
                  </div>
                  <div className="text-3xl font-bold text-white">1,500 €</div>
                  <div className="flex mb-2">
                    <div className="text-right w-full">
                      <span className="text-xs font-semibold inline-block text-white">80%</span>
                      <div className="flex rounded-full h-2 bg-gray-200 w-full">
                        <div style={{ width: `80%` }} className="rounded-full bg-custom-gold-rod"></div>
                      </div>
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
