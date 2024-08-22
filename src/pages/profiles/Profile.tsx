import { useEffect } from "react";
import Footer from "../../components/Footer";
import DataProfile from "../../components/profile/DataProfile";
import Sidebar from "../../components/profile/Sidebar";
import Modal from "../../components/modalLogin/Modal";

interface ProfileProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const Profile: React.FC<ProfileProps> = ({ isLoggedIn, onLogin }) => {
  useEffect(() => {
    document.title = "Profile | XAU";
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
              <div className="w-3/4 pt-20 h-[500px]">
                <DataProfile />
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

export default Profile;
