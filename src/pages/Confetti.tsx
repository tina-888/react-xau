import ConfettiCoin from "../components/portfolio/ConfettiCoin";

import Navbar from "../components/Navbar";

const Confetti = () => {
  return (
    <div className="bg-radial-gradient from-gradient-start to-gradient-end h-screen dark:">
      <Navbar />

      <div className="bg-radial-gradient from-gradient-start to-gradient-end h-screen dark:">
        <ConfettiCoin />
      </div>
    </div>
  );
};

export default Confetti;
