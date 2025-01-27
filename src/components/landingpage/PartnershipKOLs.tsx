import { useEffect } from "react";
import KOLs from "../../data/landingpage/PartnershipKOLs";
import ScrollReveal from "scrollreveal";

const PartnershipKOLs = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000,

      distance: "0px",
      reset: true,
    });
  }, []);
  return (
    <div className="items-center justify-center relative w-full fade-in">
      <section className="relative">
        <div className="container mx-auto h-full w-5/6 pt-2 ">
          <div id="Kol" className="flex flex-col justify-end self-stretch font-bold">
            <div className="flex mt-9 overflow-hidden group [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="flex animate-slideRight group-hover:animation-pause">
                {KOLs.map((KOL, index) => (
                  <img key={index} className="w-64 h-20 " src={KOL.src} alt={KOL.alt} />
                ))}
                {KOLs.map((KOL, index) => (
                  <img key={`duplicate-${index}`} className="w-64 h-20" src={KOL.src} alt={KOL.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipKOLs;
