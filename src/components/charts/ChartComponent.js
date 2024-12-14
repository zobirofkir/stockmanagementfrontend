import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const [data, setData] = useState({
    users: 0,
    orders: 0,
    products: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCount = 100;
        const ordersCount = 50;
        const productsCount = 75;
        const totalPayments = 5000;

        setData({
          users: usersCount,
          orders: ordersCount,
          products: productsCount,
          payments: totalPayments,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ["Users", "Orders", "Products", "Payments"],
    datasets: [
      {
        label: "Count / Amount",
        data: [data.users, data.orders, data.products, data.payments],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)", 
          "rgba(255, 159, 64, 0.2)", 
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)", 
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Statistics Overview (Users, Orders, Products, and Payments)",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Statistics Overview
        </h2>
        <div className="w-full mx-auto flex justify-center items-center">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
