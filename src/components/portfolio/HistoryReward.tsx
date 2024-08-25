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
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await apiReward.RewardGetAll();
        setReward(response);
      } catch (err) {
        console.log(err);
        // setError("failed to fetch rewards");
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
    <div className="flex justify-center items-center py-20 md:px-0 max-md:w-full max-md:pt-0">
      <div className="w-full max-w-4xl customShadow rounded-2xl md:mx-4 border-0">
        <h2 className="text-2xl font-bold mb-4 text-center text-white pt-5">Reward History</h2>
        <table className="w-full table-fixed text-center text-2xl font-iceland max-md:text-sm">
          <thead>
            <tr className="bg-gray-600">
              <th className="py-2 h-16  text-white font-bold uppercase max-md:h-8">Coin</th>
              <th className="py-2  text-white font-bold uppercase">Total Coin</th>
              <th className="py-2  text-white font-bold uppercase">Date</th>
            </tr>
          </thead>
          <tbody>
            {reward.length === 0 ? (
              <tr>
                <td></td>
                <td className="col-span-3 text-center text-white py-2">Data not found</td>
                <td></td>
              </tr>
            ) : (
              reward.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2  text-white">{item.coin}</td>
                  <td className="py-2  text-white">{item.totalcoin}</td>
                  <td className="py-2  text-white text-ellipsis truncate">{formatDate(item.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryReward;
