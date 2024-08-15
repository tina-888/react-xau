import Footer from "../../components/Footer";
import HistoryOrder from "../../components/profile/HistoryOrder";
import Sidebar from "../../components/profile/Sidebar";

const HistoryPage = () => {
  return (
    <div>
      <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black items-center justify-center">
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
      <Footer />
    </div>
  );
};

export default HistoryPage;
