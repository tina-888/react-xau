import { useEffect } from "react";
import ComingSoon from "./ComingSoon";

const Campaign = () => {
  useEffect(() => {
    document.title = "Campaign | XAU";
  }, []);
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Campaign;
