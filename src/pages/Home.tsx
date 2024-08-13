const Home = () => {
  return (
    <section className="bg-radial-gradient from-gradient-start to-gradient-end h-screen dark:bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none max-md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 max-md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          {/* <!-- Modal toggle --> */}
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Toggle modal
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/icons/babi.svg" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Home;
