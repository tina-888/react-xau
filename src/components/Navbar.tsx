import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./modalLogin/Modal";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`sticky top-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black z-50 ${scrolled ? " shadow-navbar" : ""}`}>
        <div className="w-5/6 flex flex-wrap items-center justify-between py-2 mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/icons/LogoXAU.svg" className="h-12" alt="Landwind Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            <>
              <div className="lg:hidden">
                <button onClick={toggleMobileMenu} className="p-2 pr-4 text-white hover:bg-none rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>

              <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
              </div>
              {isLoggedIn ? (
                <div ref={dropdownRef} className="relative">
                  <button onClick={toggleDropdown} className="hidden lg:flex items-center p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 w-48 mt-2 border bg-slate-700 border-custom-gold-rod rounded-xl shadow-lg">
                      <ul className="py-1">
                        <li>
                          <Link to="/profile/me" className="block px-4 py-2 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/comingsoon" className="block px-4 py-2 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                            Connect Wallet
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Modal />
              )}
            </>
          </div>

          <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? "block" : "hidden"} lg:block`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium font-sans lg:flex-row lg:space-x-4 lg:mt-0">
              <li>
                <Link to="/goldmining" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                  Gold Mining
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/campaign" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                  Campaign
                </Link>
              </li>
              <li>
                <Link to="/whitepaper" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/#Faqs" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white cursor-pointer">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/#Contact" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <li>
                  <Link to="/profile/me" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white cursor-pointer lg:hidden">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connect-wallet" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white cursor-pointer lg:hidden">
                    Connect Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:border-0 lg:hover:text-custom-gold-rod max-md:hover:text-custom-gold-rod text-white cursor-pointer lg:hidden">
                    Log Out
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
