import { useEffect, useState } from "react";
import apiReward from "../../api/apiReward";

interface RewardData {
  coin: number;
  totalcoin: number;
  createdAt: string;
}

const HistoryReward = () => {
  const [reward, setReward] = useState<RewardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await apiReward.RewardGetAll();
        // Assuming response.data contains the reward array
        setReward(response as unknown as RewardData[]);
      } catch (err) {
        setError((err as Error).message || "Failed to fetch reward");
      } finally {
        setLoading(false);
      }
    };

    fetchRewards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Reward History</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Coin</th>
            <th className="px-4 py-2">Total Coin</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {reward.length > 0 ? (
            reward.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{item.coin}</td>
                <td className="border px-4 py-2">{item.totalcoin}</td>
                <td className="border px-4 py-2">{formatDate(item.createdAt)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="border px-4 py-2 text-center">
                No reward available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryReward;
