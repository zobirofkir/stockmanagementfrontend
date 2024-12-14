import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Reusable component for overview cards
const OverviewCard = ({ title, value, bgColor, textColor, valueColor }) => (
  <motion.div
    className={`bg-gradient-to-r ${bgColor} p-6 rounded-xl shadow-lg`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className={`text-lg ${textColor} font-semibold`}>{title}</h3>
    <motion.p
      className={`text-3xl font-bold ${valueColor} mt-2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {value}
    </motion.p>
  </motion.div>
);

const OverviewComponent = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [paymentTotal, setPaymentTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => setUserCount(120), 300);
    setTimeout(() => setProductCount(350), 500);
    setTimeout(() => setOrderCount(210), 700);
    setTimeout(() => setPaymentTotal(15000), 900);
  }, []);

  const token = localStorage.getItem("name");

  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Welcome Back, {token}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* User Overview */}
        <OverviewCard
          title="Users"
          value={userCount}
          bgColor="from-blue-100 to-blue-200"
          textColor="text-blue-700"
          valueColor="text-blue-800"
        />
        {/* Product Overview */}
        <OverviewCard
          title="Products"
          value={productCount}
          bgColor="from-green-100 to-green-200"
          textColor="text-green-700"
          valueColor="text-green-800"
        />
        {/* Order Overview */}
        <OverviewCard
          title="Orders"
          value={orderCount}
          bgColor="from-yellow-100 to-yellow-200"
          textColor="text-yellow-700"
          valueColor="text-yellow-800"
        />
        {/* Payment Overview */}
        <OverviewCard
          title="Payments"
          value={`$${paymentTotal.toLocaleString()}`}
          bgColor="from-purple-100 to-purple-200"
          textColor="text-purple-700"
          valueColor="text-purple-800"
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
