import React, { useState } from "react";

const Backmachine2: React.FC = () => {
  const [miningPower, setMiningPower] = useState<string>("");

  const r = 0.1;
  const b = 0.05;
  const result = (Number(miningPower) + (Number(miningPower) * r) / 100 + (Number(miningPower) * b) / 100) / 12;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && !isNaN(Number(value)))) {
      setMiningPower(value);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center pb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Payment Form</h1>
      </div>

      <div className="mb-6">
        <div className="grid gap-4">
          <div>
            <label htmlFor="mining_power" className="block text-gray-800 dark:text-white mb-1">
              Mining Power
            </label>
            <div className="relative w-full">
              <input type="number" id="mining_power" value={miningPower} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" min="0" step="0.001" />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 dark:text-white">USD</span>
            </div>
          </div>
          <span className="ml-2 text-gray-800 dark:text-white text-sm">
            *1 USD = 0.00041089 XAU
            <br />
            *return 10%
            <br />
            *boost 5%
          </span>
        </div>

        <div className="mt-4">
          <label htmlFor="address" className="block text-gray-800 dark:text-white mb-1">
            You will get
          </label>
          <h1 className="text-gray-800 dark:text-white">
            {result.toFixed(2)} XAU reward = {miningPower} USD
          </h1>
        </div>

        <div className="mt-4">
          <label htmlFor="payment" className="block text-gray-800 dark:text-white mb-1">
            Payment Method
          </label>
          <div>
            <input type="radio" id="deposit" name="payment_method" value="deposit" className="mr-2" />
            <label htmlFor="deposit" className="text-gray-800 dark:text-white mr-4">
              Deposit
            </label>
            <input type="radio" id="wallet" name="payment_method" value="wallet" className="mr-2" />
            <label htmlFor="wallet" className="text-gray-800 dark:text-white">
              Connect Wallet
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backmachine2;
