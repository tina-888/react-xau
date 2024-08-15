import Footer from "../components/Footer";
import Modal from "../components/modalLogin/Modal";
import Confetti from "../components/portfolio/ConfettiCoin";

interface PortfolioProps {
  isLoggedIn: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
          <Confetti />
        </div>
      ) : (
        <div className="flex justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black h-screen">
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6 text-center ">Please login to access portfolio</p>
            <Modal />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Portfolio;
