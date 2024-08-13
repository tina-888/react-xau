// import ApplyVcs from "./ApplyVcs";
import VCs from "../../../data/landingpage/PartnershipsVCs";

const PartnershipVcs = () => {
  return (
    <div className="items-center justify-center relative w-full">
      <div className="relative">
        <div className="container mx-auto h-full w-5/6 ">
          <div id="VCs" className="">
            <div className="flex flex-col justify-end self-stretch font-bold">
              <div className="self-center text-2xl text-white font-sans font-bold tracking-wider leading-9 text-center max-max-md:max-w-full">Our Partnership VCs</div>
              <div className="flex mt-9 overflow-hidden group [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                <div className="flex animate-slideLeft group-hover:animation-pause">
                  {VCs.map((vc, index) => (
                    <img key={index} className="w-64 h-20 " src={vc.src} alt={vc.alt} />
                  ))}
                  {VCs.map((vc, index) => (
                    <img key={`duplicate-${index}`} className="w-64 h-20" src={vc.src} alt={vc.alt} />
                  ))}
                </div>
              </div>
            </div>
            {/* <ApplyVcs /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipVcs;
