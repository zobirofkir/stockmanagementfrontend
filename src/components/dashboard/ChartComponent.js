import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import ProtectedRoute from "@/protected/protectedRoute";
import { useDispatch, useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ChartComponent() {
  const [users, setUsers] = useState(350);
  const [categories, setCategories] = useState(15);
  const [orders, setOrders] = useState(200);
  const [productsLength, setProductsLength] = useState(0);

  const dispatch = useDispatch();

  const { isLoading, productsGet, productsError } = useSelector(state => state.getProducts);

  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const [chartData4, setChartData4] = useState({});

  useEffect(() => {
    if (productsGet) {
      setProductsLength(productsGet.length);
    }

    setTimeout(() => {
      setUsers(350);  
      setCategories(15); 
      setOrders(200); 

      setChartData1({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Products",
            data: [50, 60, 70, 80, 90, 100, productsLength],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      });

      setChartData2({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Users",
            data: [200, 250, 300, 350, 400, 450, 500],
            borderColor: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      });

      setChartData3({
        labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
        datasets: [
          {
            label: "Products per Category",
            data: [25, 40, 50, 30, 70],
            borderColor: "#F59E0B",
            backgroundColor: "rgba(245, 158, 11, 0.2)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      });

      setChartData4({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Orders",
            data: [150, 200, 250, 300, 350, 400, 450],
            borderColor: "#8B5CF6",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      });
    }, 1000);
  }, [productsGet, productsLength]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Products vs Time (Line Chart 1) */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-blue-200 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Products Over Time</h2>
          <div className="h-64 w-full">
            {chartData1.datasets && <Line data={chartData1} options={chartOptions} />}
          </div>
        </div>

        {/* Users vs Time (Line Chart 2) */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-green-200 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Users Over Time</h2>
          <div className="h-64 w-full">
            {chartData2.datasets && <Line data={chartData2} options={chartOptions} />}
          </div>
        </div>

        {/* Products vs Categories (Line Chart 3) */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-yellow-200 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Products per Category</h2>
          <div className="h-64 w-full">
            {chartData3.datasets && <Line data={chartData3} options={chartOptions} />}
          </div>
        </div>

        {/* Orders vs Time (Line Chart 4) */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-purple-200 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Orders Over Time</h2>
          <div className="h-64 w-full">
            {chartData4.datasets && <Line data={chartData4} options={chartOptions} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartComponent;
