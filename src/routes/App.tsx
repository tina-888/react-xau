import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/LandingPage";
import GoldMining from "../pages/GoldMining";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/profiles/Profile";
import HistoryPage from "../pages/profiles/HistoryPage";
import ReferralWalletPage from "../pages/profiles/ReferralWalletPage";
import ChangePasswordPage from "../pages/profiles/ChangePasswordPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goldmining" element={<GoldMining />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/profile/me" element={<Profile />} />
          <Route path="/profile/changepassword" element={<ChangePasswordPage />} />
          <Route path="/profile/wallet" element={<ReferralWalletPage />} />
          <Route path="/profile/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
