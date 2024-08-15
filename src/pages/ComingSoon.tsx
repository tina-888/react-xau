import { useEffect } from "react";

// import NavbarComing from "../components/comingsoon/NavbarComing";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Comingsoon | Luminov Protocol";
  }, []);
  return (
    <>
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        {/* <NavbarComing /> */}
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <div className=" ">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
              Coming Soon
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto ">
              Coming Soon
            </h1>
          </div>
          <p className="text-lg text-gray-400 mb-6 text-center ">Launching with confidence, we are about to release our product's beta version.</p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
