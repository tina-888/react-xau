import roadmapData from "../../data/landingpage/Roadmap";

const Roadmap = () => {
  return (
    <div className="items-center justify-between relative w-full pt-2">
      <div className="mx-auto w-5/6  max-md:max-w-full">
        <div className="self-center text-2xl font-bold font-sans tracking-wider leading-9 text-center text-white">Our Roadmap</div>
        <div className="max-md:max-w-full">
          <div className="flex  max-md:flex-col max-md:gap-0 justify-center">
            {/* Q3 */}
            <div className="flex flex-col w-1/2 mt-8 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <div className="relative flex items-center">
                  <div className="flex-grow border-2 border-none"></div>
                  <div className="justify-center self-center px-8 py-2 text-base font-bold font-sans leading-6 text-center bg-custom-gold-rod customShadow rounded-[100px] text-white max-md:px-5">Q3 2024</div>
                  <div className="flex-grow border-2 border-dashed border-custom-gold-rod max-md:border-none" />
                </div>

                {/* content */}
                <div className="flex flex-col mt-10">
                  <div className="flex flex-wrap px-8">
                    {roadmapData.Q3.map((item, index) => (
                      <div className="flex gap-4 px-4 mt-4 w-1/2" key={index}>
                        <div className="flex flex-col justify-center">
                          <div className="flex flex-col justify-center items-center px-2 w-6 h-6 bg-custom-gold-rod rounded-full">
                            <div className="shrink-0 w-2 h-2  rounded-full" />
                          </div>
                        </div>
                        <div className="truncate text-sm font-sans tracking-wide leading-5 text-left text-neutral-300">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="flex flex-col w-1/2 mt-8 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <div className="relative flex items-center">
                  <div className="flex-grow border-2 border-dashed border-custom-gold-rod max-md:border-none" />
                  <div className="justify-center self-center px-8 py-2 text-base font-bold font-sans leading-6 text-center bg-custom-gold-rod customShadow rounded-[100px] text-white max-md:px-5">Q4 2024</div>
                  <div className="flex-grow border-2 border-none"></div>
                </div>
                {/* content */}
                <div className="flex flex-col mt-10">
                  <div className="flex flex-wrap px-8">
                    {roadmapData.Q4.map((item, index) => (
                      <div className="flex gap-4 px-4 mt-4 w-1/2" key={index}>
                        <div className="flex flex-col justify-center">
                          <div className="shrink-0 w-6 h-6 rounded-full border-2 border-solid border-custom-gold-rod border-opacity-30 stroke-[1.5px]" />
                        </div>

                        <div className="truncate text-sm font-sans tracking-wide leading-5 text-left text-neutral-300">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default Roadmap;
