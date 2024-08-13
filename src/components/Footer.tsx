import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div id="Footer" className="bottom-0 items-center justify-between relative w-full ">
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
          <div className="mx-auto pt-6 w-5/6 max-md:w-5/6 flex flex-wrap justify-center">
            {/* First Column */}
            <div className="py-8 pb-8 w-full md:w-1/2 lg:w-1/4 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <NavLink to="Hero" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                  <img src="/icons/LogoXAU.svg" className="h-12" alt="Xau Logo" />
                </NavLink>
              </div>
              <div className="pt-6 text-sm font-sans font-normal tracking-wide leading-6 text-justify md:text-left pr-6 text-white">
                We create a brighter and more empowered world where brilliant ideas are turned into unlimited potential.
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col p-2 py-8 w-full md:w-1/2 lg:w-1/4 text-white items-center md:items-start">
              <div className="px-4 py-2 text-lg font-bold tracking-wide leading-6 text-center md:text-left">Pages</div>
              <div className="flex flex-wrap mt-4 text-base leading-6 gap-4 justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                  <NavLink to="Project" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Gold Mining
                  </NavLink>
                  <NavLink to="/comingsoon" className="px-4 py-2 cursor-pointer">
                    Portfolio
                  </NavLink>
                  <NavLink to="/comingsoon" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Leaderboard
                  </NavLink>
                  <NavLink to="/comingsoon" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Campaign
                  </NavLink>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <NavLink to="/comingsoon" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    Whitepaper
                  </NavLink>
                  <NavLink to="Faq" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                    FAQs
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col p-2 py-8 w-full md:w-1/2 lg:w-1/6 text-white items-center md:items-start">
              <div className="px-4 py-2 text-base font-bold tracking-wide leading-6 text-center md:text-left">Community</div>
              <div className="flex flex-col mt-4 text-base leading-6 items-center md:items-start">
                <NavLink to="VCs" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                  VCs
                </NavLink>
                <NavLink to="Kol" className="px-4 py-2 whitespace-nowrap cursor-pointer">
                  KOLs
                </NavLink>
              </div>
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col p-2 py-8 mx-auto w-full md:w-1/2 lg:w-1/3 font-sans items-center md:items-start">
              <div className="text-left font-sans text-white md:text-left">
                <div className="py-2 text-lg font-bold tracking-wide leading-6 text-center md:text-left">Subscribe Our Newsletter</div>
                <div className="flex gap-2 mt-4 flex-wrap justify-center md:justify-start">
                  <input type="email" placeholder="Enter your email address" className="px-4 py-2 text-sm tracking-wide leading-5 rounded-3xl bg-zinc-100 text-neutral-400 w-full sm:w-auto flex-grow" />
                  <button className="px-4 py-2 text-base font-bold leading-6 text-white bg-custom-gold-rod rounded-3xl whitespace-nowrap">Subscribe</button>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10 items-center md:items-start">
                <div className="justify-center py-2 text-base font-bold leading-6 text-center text-white">
                  <div className="py-2 text-base font-sans font-bold leading-6 text-center md:text-left text-white">Contact&nbsp;Us</div>
                </div>
                <div className="flex gap-4 pr-6 my-auto">
                  <NavLink to="https://t.me/+JL_r9JnwQGUxYmI1" target="_blank" className="cursor-pointer">
                    <img loading="lazy" src="/icons/landingPage/contact us/telegram.svg" className="shrink-0 w-8 aspect-square" />
                  </NavLink>
                  <NavLink to="http://medium.com/@official_38471" target="_blank" className="cursor-pointer">
                    <img loading="lazy" src="/icons/landingPage/contact us/medium.svg" className="shrink-0 w-8 aspect-square" />
                  </NavLink>
                  <NavLink to="https://x.com/Luminovofficial" target="_blank" className="cursor-pointer">
                    <img loading="lazy" src="/icons/landingPage/contact us/x.svg" className="shrink-0 w-8 aspect-square" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="w-full">
            <span className="block text-sm p-4 text-white text-center">© Copyright 2024 Luminov . All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
