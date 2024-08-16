interface Machine2Props {
  setIsFlipped2: React.Dispatch<React.SetStateAction<boolean>>;
  isFlipped2: boolean;
}
const Machine2: React.FC<Machine2Props> = ({ setIsFlipped2 }) => {
  return (
    <div className="h-[400px] ">
      <div className="w-full flex justify-center items-center">
        <img className="w-[8rem] h-[8rem] rounded-full customShadow relative -top-[6rem]" src="/icons/goldMining/mesin2.svg" alt="Profile Image" />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-5/6 h-[360px] text-left flex flex-col font-sans relative -top-12">
          <h2 className="text-3xl font-bold text-white text text-center mb-8">DRG-X</h2>
          <div className="mb-6">
            <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#ad7600] via-[#D69900] to-[#865600] bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">$250</span>
            <h1 className="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#865600] via-[#D69900] to-[#865600] bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto ">$250</h1>
          </div>
          <ul className="text-sm text-white mb-16">
            <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 mr-2 text-green-500">
                <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              Return 183%
            </li>
            <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 mr-2 text-green-500">
                <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              Return 0.5% / day
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 mr-2 text-green-500">
                <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              Bonus 10% / year
            </li>
          </ul>
          <div className="flex justify-center">
            <button className=" bg-green-500 text-white rounded-full px-4 py-2 w-32  hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800" onClick={() => setIsFlipped2((prev) => !prev)}>
              BUY
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Machine2;
