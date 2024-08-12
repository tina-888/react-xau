/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pie } from "react-chartjs-2";

interface PieChartProps {}
const PieChart: React.FC<PieChartProps> = () => {
  const data = {
    labels: ["Machine 1", "Machine 2", "Machine 3"],
    datasets: [
      {
        data: [70, 10, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
