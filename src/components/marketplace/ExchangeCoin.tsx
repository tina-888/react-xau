import EC from "../../data/marketplace/ExchangeCoin";

const ExchangeCoin = () => {
  return (
    <>
      {EC.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 p-4 mb-4 bg-gray-50 dark:bg-neutral-800 rounded-lg transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
          <div className="flex justify-end">
            <button className="bg-custom-gold-rod hover:bg-custom-darkgold text-white font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-110">{item.price}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExchangeCoin;
