import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Avatar from "../../components/profile/Avatar";
import DataProfile from "../../components/profile/DataProfile";
import Sidebar from "../../components/profile/Sidebar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black items-center justify-center">
        <div className="flex w-5/6">
          <div className="w-full flex gap-5 text-white">
            <div className="w-1/4">
              <Sidebar />
            </div>
            <div className="w-3/4">
              <Avatar />
              <DataProfile />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
