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

import ScrollToTop from "../utils/ScrollToTop";
import Marketplace from "../pages/Marketplace";

const App = () => {
  // change false to true
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedExpiration = localStorage.getItem("expiration");
    if (storedExpiration) {
      const expiration = parseInt(storedExpiration, 10);
      if (new Date().getTime() > expiration) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("expiration");
        return false;
      }
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    const expiration = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day from now
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("expiration", expiration.toString()); // Save expiration timestamp
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("expiration"); // Clear expiration timestamp
  };
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goldearning" element={<GoldMining isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/portfolio" element={<Portfolio isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/marketplace" element={<Marketplace />} />

          <Route path="/comingsoon" element={<ComingSoon />} />

          <Route path="/profile/me" element={<Profile isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/profile/changepassword" element={<ChangePasswordPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/profile/wallet" element={<ReferralWalletPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
          <Route path="/profile/history" element={<HistoryPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
