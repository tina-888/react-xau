import { useEffect } from "react";
import ComingSoon from "./ComingSoon";

const Whitepaper = () => {
  useEffect(() => {
    document.title = "Whitepaper | XAU";
  }, []);
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Whitepaper;
