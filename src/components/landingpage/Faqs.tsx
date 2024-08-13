import faqData from "../../data/landingpage/FAQs";

const Faqs = () => {
  return (
    <div id="Faq" className="items-center justify-between relative w-full ring-gray-900/5 ">
      <div className="mx-auto w-5/6">
        <div className="flex flex-col justify-center items-start  max-max-md:pr-5">
          <div className="flex gap-4 max-max-md:flex-wrap">
            <div className="shrink-0 w-1 bg-custom-gold-rod h-[74px] rounded-[100px]" />
            <div className="flex flex-col font-sans flex-1 max-max-md:max-w-full">
              <div className="text-3xl font-bold tracking-wider text-white max-max-md:max-w-full">Frequently Asked Questions</div>
              <div className="mt-2 text-lg font-normal tracking-wide leading-6 text-neutral-400 max-max-md:max-w-full">Looking for further information? Check out below.</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
          {faqData.map((faq, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold font-sans text-lg text-white">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn font-sans font-normal mt-3 text-neutral-400">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
