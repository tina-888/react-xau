interface Machine3Props {
  setIsFlipped3: React.Dispatch<React.SetStateAction<boolean>>;
  isFlipped3: boolean;
}
const Machine3: React.FC<Machine3Props> = ({ setIsFlipped3 }) => {
  return (
    <div className=" w-full mx-auto flex flex-col gap-2 px-4 py-5 border border-custom-gold-rod customShadow  rounded-3xl  dark:bg-gray-900" onClick={() => setIsFlipped3((prev) => !prev)}>
      <div className="w-full flex justify-center items-center">
        <img className="w-[8rem] h-[8rem] rounded-full customShadow relative -top-[4rem]" src="/icons/goldMining/mesin3.svg" alt="Profile Image" />
      </div>

      <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
        <h1 className="uppercase text-lg font-semibold dark:text-white">MACHINE PREMIUM</h1>

        <h2 className="text-xl font-serif capitalize font-semibold text-white dark:text-gray-300">samuel abera</h2>

        <p className="text-white dark:text-gray-300">
          Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!
        </p>
      </div>
    </div>
  );
};

export default Machine3;
