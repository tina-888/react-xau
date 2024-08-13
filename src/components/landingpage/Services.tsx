const Services = () => {
  return (
    <div className=" items-center justify-between pt-2 relative w-full">
      <div className="relative ">
        <div className="container mx-auto w-5/6">
          <div className="mx-auto text-center">
            <h2 className=" text-2xl font-sans font-bold tracking-tight text-white  md:text-4xl ">We Offer You These Services</h2>
          </div>
          <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm mt-20 md:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2">
            {/* 1 */}
            <li className="flex gap-4 rounded-2xl border customShadow border-custom-gold-rod px-8 pt-10 pb-6 col-span-4 md:col-span-2 lg:col-span-1 relative flex-col justify-start items-center">
              <span className="absolute -top-6 p-3 border-2 border-custom-gold-rod customShadow rounded-full bg-gray-800">
                <img src=" /icons/landingPage/services/automatic.svg" className="w-7 h-7 " />
              </span>
              <div className="text-lg font-sans font-bold  text-white flex items-center">Automatic Earning</div>
              <p className=" text-sm font-sans font-normal text-white">
                Mining Gold apps allow users to earn yields passively without needing to actively monitor or manage their investments. The automation ensures that users can generate income continuously, even while they are occupied with
                other tasks, maximizing their time and resources.
              </p>
            </li>
            {/* 2 */}
            <li className="flex gap-4 rounded-2xl border customShadow border-custom-gold-rod px-8 pt-10 pb-6 col-span-4 md:col-span-2 lg:col-span-1 relative flex-col justify-start items-center">
              <span className="absolute -top-6 p-3 border-2 border-custom-gold-rod customShadow rounded-full bg-gray-800">
                <img src=" /icons/landingPage/services/safety.svg" className="w-7 h-7 " />
              </span>
              <div className="text-lg font-sans font-bold  text-white flex items-center">Safety</div>
              <p className=" text-sm font-sans font-normal text-white">
                These apps are often designed with robust security features, such as encryption and secure wallet integration, to protect users' assets. They provide a safer alternative to traditional gold mining or investing, as there’s no
                need to physically handle gold or deal with high-risk environments.
              </p>
            </li>
            {/* 3 */}
            <li className="flex gap-4 rounded-2xl border customShadow border-custom-gold-rod px-8 pt-10 pb-6 col-span-4 md:col-span-2 lg:col-span-1 relative flex-col justify-start items-center">
              <span className="absolute -top-6 p-3 border-2 border-custom-gold-rod customShadow rounded-full bg-gray-800">
                <img src=" /icons/landingPage/services/rewards.svg" className="w-7 h-7 " />
              </span>
              <div className="text-lg font-sans font-bold  text-white flex items-center">Compounding Rewards</div>
              <p className=" text-sm font-sans font-normal text-white">
                By reinvesting earnings back into the app, users can benefit from compounding rewards. Over time, the yields accumulate and grow exponentially, increasing the overall return on investment without requiring additional input
                from the user.
              </p>
            </li>
            {/* 4 */}
            <li className="flex gap-4 rounded-2xl border customShadow border-custom-gold-rod px-8 pt-10 pb-6 col-span-4 md:col-span-2 lg:col-span-1 relative flex-col justify-start items-center">
              <span className="absolute -top-6 p-3 border-2 border-custom-gold-rod customShadow rounded-full bg-gray-800">
                <img src=" /icons/landingPage/services/profits.svg" className="w-7 h-7 " />
              </span>
              <div className="text-lg font-sans font-bold  text-white flex items-center">Monthly Profits</div>
              <p className=" text-sm font-sans font-medium text-white">
                Mining Gold apps typically offer regular, predictable returns, allowing users to earn a steady monthly profit. This consistent income can be an attractive feature for those looking to supplement their finances with minimal
                effort, providing financial stability and planning ease.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
