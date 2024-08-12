import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Confetti from "../components/portfolio/ConfettiCoin";
// import PieChart from "../components/portfolio/PieChart";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        {/* <PieChart /> */}
        <Confetti />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
