import networks from "../../data/landingpage/Network";

const Networks = () => {
  return (
    <>
      <div className=" items-center justify-between pt-2 relative w-full">
        <div className="relative ">
          <div className="container mx-auto w-5/6">
            <div className="flex overflow-hidden group [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="flex animate-slideRight group-hover:animation-pause">
                {networks.map((network, index) => (
                  <img key={index} className="w-64 h-20" src={network.src} alt={network.alt} />
                ))}
                {networks.map((network, index) => (
                  <img key={`duplicate-${index}`} className="w-64 h-20" src={network.src} alt={network.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Networks;
