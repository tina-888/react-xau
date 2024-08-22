import { useEffect } from "react";
import ComingSoon from "./ComingSoon";

const Leaderboard = () => {
  useEffect(() => {
    document.title = "Leaderboard | XAU";
  }, []);
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Leaderboard;
