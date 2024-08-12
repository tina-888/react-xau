import KOLs from "../../data/landingpage/PartnershipKOLs";

const PartnershipKOLs = () => {
  return (
    <div className="items-center justify-center relative w-full">
      <section className="relative">
        <div className="container mx-auto h-full w-5/6 pt-36 ">
          <div id="Kol" className="flex flex-col justify-end self-stretch font-bold">
            <div className="self-center font-sans font-bold text-2xl tracking-wider leading-9 text-center text-white max-md:max-w-full">Our Partnership KOLs </div>
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
