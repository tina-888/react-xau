import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div id="Footer" className="bottom-0 items-center justify-between relative w-full ">
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
          <div className="mx-auto pt-6 w-5/6 max-md:w-5/6 flex flex-wrap justify-center">
            {/* First Column */}
            <div className="pt-8 pb-8 w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Link to="Hero" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                  <img src="/icons/LogoXAU.svg" className="h-12" alt="Xau Logo" />
                </Link>
              </div>
              <div className="pt-6 text-sm font-sans font-normal tracking-wide leading-6 text-justify md:text-left pr-6 lg:w-5/6 text-white">
                <blockquote className="text-xl italic font-semibold text-slate-300">
                  <p>"Earn Effortlessly, Secure Your Future—Gold at Your Fingertips"</p>
                </blockquote>
              </div>
              <div className="flex gap-4 pr-6 pt-12">
                <Link to="https://t.me/+eFpECh7MWPpmMDhl" target="_blank" className="cursor-pointer">
                  <img loading="lazy" src="/icons/landingPage/contact us/telegram.svg" className="shrink-0 w-8 aspect-square" />
                </Link>
                <Link to="" target="_blank" className="cursor-pointer">
                  <img loading="lazy" src="/icons/landingPage/contact us/medium.svg" className="shrink-0 w-8 aspect-square" />
                </Link>
                <Link to="https://x.com/GoldMining_XAU" target="_blank" className="cursor-pointer">
                  <img loading="lazy" src="/icons/landingPage/contact us/x.svg" className="shrink-0 w-8 aspect-square" />
                </Link>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col p-2 pt-8 w-full md:w-1/2 lg:w-1/6 text-white items-center md:items-start">
              <div className="px-4 py-2 text-lg font-bold tracking-wide leading-6 text-center md:text-left">Pages</div>
              <div className="flex flex-wrap mt-4 text-base leading-6 gap-4 justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                  <Link to="/goldearning" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Staking Gold
                  </Link>
                  <Link to="/portfolio" className="px-4 py-2 cursor-pointer">
                    Portfolio
                  </Link>
                  <Link to="/leaderboard" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Leaderboard
                  </Link>
                  <Link to="/campaign" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col p-2 pt-8 w-full md:w-1/2 lg:w-1/6 text-white items-center md:items-start">
              <div className="px-4 py-2 text-base font-bold tracking-wide leading-6 text-center md:text-left">Marketplace</div>
              <div className="flex flex-col items-center md:items-start">
                <Link to="/#Faqs" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                  FAQs
                </Link>
                <Link to="/#VCs" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                  Partnership
                </Link>

                <Link to="/whitepaper" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                  Whitepaper
                </Link>
              </div>
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col p-2 pt-8 w-full md:w-1/2 lg:w-1/3 font-sans items-center md:items-start">
              <div className="text-left font-sans text-white md:text-left">
                <div className="py-2 text-lg font-bold tracking-wide leading-6 text-center md:text-left">Subscribe Our Newsletter</div>
                <div className="flex gap-2 mt-4 flex-wrap justify-center md:justify-start">
                  <input type="email" placeholder="Enter your email address" className="px-4 py-2 text-sm leading-5 rounded-3xl bg-zinc-100 text-black w-40 sm:w-auto" />
                  <button className="px-4 py-2 text-base font-bold leading-6 text-white bg-custom-gold-rod rounded-3xl whitespace-nowrap">Subscribe</button>
                </div>
              </div>
              <div className="flex flex-col justify-between mt-2 items-center md:items-start">
                <div className="justify-center py-2 text-base font-bold leading-6 text-center text-white">
                  <div className="py-2 text-lg font-bold tracking-wide leading-6 text-center md:text-left">Contact&nbsp;Us</div>
                </div>

                <div className="flex gap-4 pr-6 my-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12 stroke-white">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                  <div className="text-white">66 Wellington Street West, Suite 4100, P.O. Box 35, TD Bank Tower, Toronto, Ontario, Canada. M5K 1B7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="w-full">
            <span className="block text-sm p-4 text-white text-center">© Copyright 2024 XAU . All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
