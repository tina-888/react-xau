import { useEffect, useState } from "react";
import apiPayment from "../../api/apiPayment";

interface GetPaymentData {
  name: string; // Use lowercase `string`
  usd: number; // Use `number` for both integer and float
  xau: number;
  total: number;
  status: string;
  createdAt: string;
}

const HistoryOrder = () => {
  const [payments, setPayments] = useState<GetPaymentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await apiPayment.PaymentGetAll();
        // Assuming response.data contains the payment array
        setPayments(response);
      } catch (err) {
        // Error handling might need to be adjusted based on the error structure
        setError((err as Error).message || "Failed to fetch payments");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex py-20 max-md:w-full max-md:pt-0">
      <div className="w-full max-w-4xl customShadow rounded-2xl md:mx-4 border text-ellipsis truncate-0 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-center pt-4">Payment History</h2>
        <table className="table-auto w-full min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 text-gray-500">Name</th>
              <th className="py-2 text-gray-500">USD</th>
              <th className="py-2 text-gray-500">XAU</th>
              <th className="py-2 text-gray-500">Status</th>
              <th className="py-2 text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={index}>
                  <td className="border py-2 text-gray-500 max-md:truncate">{payment.name}</td>
                  <td className="border py-2 text-gray-500 max-md:truncate">{payment.usd}</td>
                  <td className="border py-2 text-gray-500 max-md:truncate">{payment.xau}</td>
                  <td className="border py-2 text-gray-500 max-md:truncate">{payment.status}</td>
                  <td className="border py-2 text-gray-500 max-md:truncate">{payment.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="border py-2 text-center">
                  No payments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryOrder;
