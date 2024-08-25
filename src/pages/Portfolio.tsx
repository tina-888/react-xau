import { useEffect } from "react";
import Footer from "../components/Footer";
import Modal from "../components/modalLogin/Modal";
import Porto from "../components/portfolio/PortfolioCoin";

interface PortfolioProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ isLoggedIn, onLogin }) => {
  useEffect(() => {
    document.title = "Portfolio | XAU";
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
          <Porto />
        </div>
      ) : (
        <div className="flex justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black h-screen">
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6 text-center ">Please login to access portfolio</p>
            <Modal onLogin={onLogin} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Portfolio;
