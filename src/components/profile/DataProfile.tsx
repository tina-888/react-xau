const DataProfile = () => {
  return (
    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
      <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
        <div className="w-full">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
            Your first name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            placeholder="Your first name"
            value="Jane"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
            Your last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            placeholder="Your last name"
            value="Ferguson"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DataProfile;
