import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/LandingPage";
import GoldMining from "../pages/GoldMining";
import Portfolio from "../pages/Portfolio";
import Leaderboard from "../pages/Leaderboard";
import Campaign from "../pages/Campaign";
import Whitepaper from "../pages/Whitepaper";

import Profile from "../pages/profiles/Profile";
import HistoryPage from "../pages/profiles/HistoryPage";
import ReferralWalletPage from "../pages/profiles/ReferralWalletPage";
import ChangePasswordPage from "../pages/profiles/ChangePasswordPage";
import ComingSoon from "../pages/ComingSoon";
import Navbar from "../components/Navbar";

const App = () => {
  // change false to true
  const [isLoggedIn] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goldmining" element={<GoldMining isLoggedIn={isLoggedIn} />} />
          <Route path="/portfolio" element={<Portfolio isLoggedIn={isLoggedIn} />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="/comingsoon" element={<ComingSoon />} />

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
