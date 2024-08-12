import React, { useState, useEffect } from "react";

interface FrontProps {
  setShowModal: (show: boolean) => void;
}

const OrderDetail: React.FC<FrontProps> = ({ setShowModal }) => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
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
    <div className="bg-custom-black border rounded-3xl customShadow px-6 py-8 w-md mt-8">
      <div className="text-white text-center p-6">
        <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Invoice</h1>
        <hr className="mb-2" />

        <div className="flex justify-between columns-2 mb-6 mt-4 text-left ">
          <div>
            <div>Date: 01/05/2023</div>
            <div>Invoice #: INV12345</div>
          </div>
          <div>
            <h2>Bill To:</h2>
            <div>John Doe</div>
            <div>johndoe@example.com</div>
          </div>
        </div>
        {/* get data from backend */}
        <table className="w-full mb-8">
          <tbody>
            <tr>
              <td className="text-left text-white">Mining</td>
              <td>&nbsp;:&nbsp;</td>
              <td className="text-left text-white">Basic - x USD = xx XAU</td>
            </tr>
            <tr>
              <td className="text-left text-white">Mining Power</td>
              <td>&nbsp; : &nbsp;</td>
              <td className="text-left text-white">xx USD = x XAU</td>
            </tr>
          </tbody>
        </table>
        <div className="text-white mb-2">Thank you for your business!</div>
        <div className="text-white text-sm">Please transfer to deposit wallet within {formatTimeLeft()}</div>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
