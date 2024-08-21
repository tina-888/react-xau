import { useEffect, useState } from "react";
import apiPayment from "../../api/apiPayment";

interface PaymentData {
  name: string;
  usd: number;
  xau: number;
  status: string;
  createdAt: string;
}

const HistoryOrder = () => {
  const [payments, setPayments] = useState<PaymentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await apiPayment.PaymentGetAll();
        // Assuming response.data contains the payment array
        setPayments(response as PaymentData[]);
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">USD</th>
            <th className="px-4 py-2">XAU</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{payment.name}</td>
                <td className="border px-4 py-2">{payment.usd}</td>
                <td className="border px-4 py-2">{payment.xau}</td>
                <td className="border px-4 py-2">{payment.status}</td>
                <td className="border px-4 py-2">{payment.createdAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="border px-4 py-2 text-center">
                No payments available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOrder;
