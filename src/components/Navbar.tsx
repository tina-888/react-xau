import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky top-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black z-50 ${scrolled ? " shadow-navbar" : ""}`}>
        <div className="w-5/6 flex flex-wrap items-center justify-between py-2 mx-auto ">
          <a href="/" className="flex items-center">
            <img src="/icons/LogoXAU.svg" className="h-12" alt="Landwind Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="p-2 text-white hover:bg-gray-50 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            {/* Profile dropdown for larger screens */}
            <div className="relative">
              <button onClick={toggleDropdown} className="hidden lg:flex items-center p-2 text-white hover:bg-gray-50 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-48 mt-2  border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li>
                      <a href="/profile/me" className="block px-4 py-2 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white ">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white ">
                        Connect Wallet
                      </a>
                    </li>

                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white ">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? "block" : "hidden"} lg:block`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium font-sans lg:flex-row lg:space-x-4 lg:mt-0">
              <li>
                <a href="/goldmining" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Gold Mining
                </a>
              </li>
              <li>
                <a href="/portfolio" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Campaign
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
