import { useEffect } from "react";
import Footer from "../../components/Footer";
import HistoryOrder from "../../components/profile/HistoryOrder";
import Sidebar from "../../components/profile/Sidebar";
import Modal from "../../components/modalLogin/Modal";
interface HistoryProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}
const HistoryPage: React.FC<HistoryProps> = ({ isLoggedIn, onLogin }) => {
  useEffect(() => {
    document.title = "History | XAU";
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black items-start justify-center h-screen">
          <div className="flex w-5/6">
            <div className="w-full flex gap-5 text-white">
              <div className="w-1/4">
                <Sidebar />
              </div>
              <div className="w-3/4">
                <HistoryOrder />
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

export default HistoryPage;
