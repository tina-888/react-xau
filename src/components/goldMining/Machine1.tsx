interface Machine1Props {
  setIsFlipped1: React.Dispatch<React.SetStateAction<boolean>>;
  isFlipped1: boolean;
}
const Machine1: React.FC<Machine1Props> = ({ setIsFlipped1 }) => {
  return (
    <div className="h-[400px] " onClick={() => setIsFlipped1((prev) => !prev)}>
      <div className="w-full flex justify-center items-center">
        <img className="w-[8rem] h-[8rem] rounded-full customShadow relative -top-[4rem]" src="/icons/goldMining/mesin1.svg" alt="Profile Image" />
      </div>

      <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
        <h1 className="uppercase text-lg font-semibold dark:text-white">MACHINE BASIC </h1>

        <h2 className="text-xl font-serif capitalize font-semibold text-white dark:text-gray-300">samuel abera</h2>

        <p className="text-white dark:text-gray-300">
          Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!
        </p>
      </div>
    </div>
  );
};

export default Machine1;
