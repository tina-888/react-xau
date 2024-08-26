import Deposit from "../../data/leaderboard/Deposit";
const LeadDepostit = () => {
  return (
    <div className="p-8 text-white min-h-screen">
      <div className="grid grid-cols-3 gap-4 mb-8 text-center">
        {Deposit.slice(0, 3).map((user, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center mb-2">
              <span className="text-3xl font-bold">{user.rank === 1 && <img src="./images/leaderboard/1st.png" alt="medal" className="w-16 h-16" />}</span>
              <span className="text-3xl font-bold">{user.rank === 2 && <img src="./images/leaderboard/2nd.png" alt="medal" className="w-10 h-10" />}</span>
              <span className="text-3xl font-bold">{user.rank === 3 && <img src="./images/leaderboard/3rd.png" alt="medal" className="w-10 h-10" />}</span>
            </div>
            <span>{user.username}</span>
            <span className="text-sm text-gray-400">{user.score}</span>
          </div>
        ))}
      </div>

      <table className="w-full text-left bg-gray-800 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-4">rank</th>
            <th className="p-4">user</th>
            <th className="p-4">Deposit</th>
          </tr>
        </thead>
        <tbody>
          {Deposit.slice(3).map((user, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-4">#{user.rank}</td>
              <td className="p-4">{user.username}</td>
              <td className="p-4">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadDepostit;
