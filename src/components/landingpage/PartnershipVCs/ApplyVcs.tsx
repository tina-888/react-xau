import { Link } from "react-router-dom";
const ApplyVcs = () => {
  return (
    <div className="items-center justify-between relative w-full">
      <div className="mx-auto w-full grid grid-cols-9 ">
        <div className="col-span-6">
          <div className="flex flex-col grow font-sans max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold tracking-wider text-ellipsis text-white max-md:max-w-full">Partnerships</div>
            <div className="mt-6 text-lg tracking-wide leading-6 text-justify text-neutral-400 max-md:max-w-full">
              Luminov is eager to establish alliances with regional cryptocurrency communities. If you manage a Telegram group centered on crypto with over 2,500 active members, please consider joining us as an Official Luminov Partner.
            </div>
          </div>
        </div>
        <div className="content-center col-span-3 grid justify-items-end">
          <Link to="https://t.me/+d38l_bH7tuVkNTU1" target="_blank" className="flex gap-2 justify-center self-start px-4 py-2 mt-6 text-base leading-6 text-center bg-custom-gold-rod rounded-[100px]">
            <div className="font-sans font-bold text-white">Apply Partnership VCs</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-current text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyVcs;
