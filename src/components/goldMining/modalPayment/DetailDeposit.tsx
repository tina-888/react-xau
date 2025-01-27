import React, { useState, useEffect } from "react";
import { SuccessAlert } from "../../Alerts/Alerts";
import apiPayment from "../../../api/apiPayment";

interface FrontProps {
  setShowInvoiceModalDeposit: (show: boolean) => void;
}

interface PaymentData {
  name: string;
  usd: number;
  xau: number;
  total: number;
  status: string;
}

const OrderDetail: React.FC<FrontProps> = ({ setShowInvoiceModalDeposit }) => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const address = "0xd2099021c7009C3203b17A53e7D5794c94c17e5e";

  useEffect(() => {
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

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setShowInvoiceModalDeposit(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000); // Hide after 3 seconds
  };

  const formatTimeLeft = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(
      () => alert("Copied to clipboard!"),
      (err) => alert("Failed to copy: " + err)
    );
  };

  return (
    <div className="bg-custom-black w-1/3 border rounded-3xl customShadow px-6 py-4 w-max-md mt-8 relative max-md:w-full">
      <div className="text-white text-center p-2">
        <h1 className="font-bold text-2xl mb-4 text-center text-custom-gold-rod">Order Detail</h1>
        <hr className="mb-2" />
        <div className="flex justify-between columns-2 mb-6 mt-4 text-left">
          <div>
            <div>Date: 01/05/2023</div>
            <div>ID : INV12345</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <table className="w-full max-w-4xl">
            <tbody>
              <tr>
                <td className="text-left w-36 text-white">Mining</td>
                <td>&nbsp;:&nbsp;</td>
                <td className="text-left text-white">{paymentData ? `${paymentData.name} - $${paymentData.usd} USD = ${paymentData.xau} XAU` : "Loading..."}</td>
              </tr>
              <tr>
                <td className="text-left w-36 text-white">Mining Power</td>
                <td>&nbsp;:&nbsp;</td>
                <td className="text-left text-white">{paymentData ? `$${paymentData.usd} USD = ${paymentData.xau} XAU` : "Loading..."}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-white text-left pt-6">Please transfer to deposit wallet within {formatTimeLeft()}</div>
        <div className="flex items-center space-x-2 py-2 pb-12">
          <table className="w-5/6 max-w-4xl">
            <tbody>
              <tr>
                <td className="text-left w-36 text-white">Deposit wallet</td>
                <td>&nbsp;:&nbsp;</td>
                <td className="text-left text-white w-40 flex">
                  <p className="text-ellipsis overflow-hidden">{address}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500 cursor-pointer" onClick={handleCopy}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
        </div>

        <div className="mb-4">
          <input type="text" placeholder="Input txhash" className="w-full p-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300" onClick={handleClick}>
          Verify
        </button>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-white" onClick={() => setShowInvoiceModalDeposit(false)} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      {showSuccessPopup && <SuccessAlert message="Your reward has been claimed." />}
    </div>
  );
};

export default OrderDetail;
