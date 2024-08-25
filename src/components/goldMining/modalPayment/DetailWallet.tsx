import React, { useState, useEffect } from "react";
import apiPayment from "../../../api/apiPayment";
import { createWeb3Modal } from "@web3modal/ethers5/react";
import { projectId, chains, ethersConfig } from "../../../utils/ConfigModal";

interface FrontProps {
  setShowInvoiceModalWallet: (show: boolean) => void;
}

interface PaymentData {
  name: string; // Use lowercase `string`
  usd: number; // Use `number` for both integer and float
  xau: number;
  total: number;
  status: string;
}

createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: "light",
  themeVariables: {
    "--w3m-font-family": "Plus Jakarta Sans",
    "--w3m-accent": "#EA6031",
  },
});
const DetailWallet: React.FC<FrontProps> = ({ setShowInvoiceModalWallet }) => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  //   const address = "0xd2099021c7009C3203b17A53e7D5794c94c17e5e";
  useEffect(() => {
    // Fetch payment data when component mounts
    const fetchPaymentData = async () => {
      try {
        const data = await apiPayment.PaymentGet();
        setPaymentData(data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPaymentData();

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const formatTimeLeft = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-custom-black w-1/3 border rounded-3xl customShadow px-6 py-4 w-max-md mt-8 relative">
      <div className="text-white text-center p-2">
        <h1 className="font-bold text-2xl mb-4 text-center text-custom-gold-rod">Order Detail</h1>
        <hr className="mb-2" />
        <div className="flex justify-between columns-2 mb-6 mt-4 text-left ">
          <div>
            <div>Date: 01/05/2023</div>
            <div>ID : INV12345</div>
          </div>
        </div>
        {/* get data from machine */}
        <div className="flex items-center space-x-2 py-2">
          <table className="w-full max-w-4xl ">
            <tbody>
              <tr>
                <td className="text-left w-36 text-white">Mining</td>
                <td>&nbsp;:&nbsp;</td>
                <td className="text-left text-white">{paymentData ? `${paymentData.name} - $${paymentData.usd} USD = ${paymentData.xau} XAU` : "Loading..."}</td>
              </tr>
              <tr>
                <td className="text-left  w-36 text-white">Mining Power</td>
                <td>&nbsp; : &nbsp;</td>
                <td className="text-left text-white">{paymentData ? `$${paymentData.usd} USD = ${paymentData.xau} XAU` : "Loading..."}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-white text-left pt-6">Please transfer to deposit wallet within {formatTimeLeft()}</div>

        <div className="flex items-center justify-center space-x-2 py-8">
          <div className="text-white rounded-full">
            <w3m-button balance="hide" label="Connect Wallet" />
          </div>
        </div>

        <div className="flex items-center space-x-2 py-2 pb-12">
          {/* <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300" onClick={() => setShowInvoiceModalWallet(false)}>
            {" "}
            Verify
          </button> */}
          <button className="absolute top-4 right-4 text-gray-500 hover:text-white" onClick={() => setShowInvoiceModalWallet(false)} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailWallet;
