import { useEffect } from "react";
import Footer from "../../components/Footer";
import ReferralCode from "../../components/profile/ReferralWallet";
import Sidebar from "../../components/profile/Sidebar";
import Modal from "../../components/modalLogin/Modal";
interface reffProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}
const ReferralWalletPage: React.FC<reffProps> = ({ isLoggedIn, onLogin }) => {
  useEffect(() => {
    document.title = "Referral Wallet | XAU";
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black items-center justify-center">
          <div className="flex w-5/6">
            <div className="w-full flex gap-5 text-white">
              <div className="w-1/4">
                <Sidebar />
              </div>
              <div className="w-3/4">
                <ReferralCode />
              </div>
            </div>
          </div>
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

export default ReferralWalletPage;
