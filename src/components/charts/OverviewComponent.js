import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome Back {token}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* User Overview */}
        <motion.div
          className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg text-blue-700 font-semibold">Users</h3>
          <motion.p
            className="text-3xl font-bold text-blue-800 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {userCount}
          </motion.p>
        </motion.div>

        {/* Product Overview */}
        <motion.div
          className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg text-green-700 font-semibold">Products</h3>
          <motion.p
            className="text-3xl font-bold text-green-800 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {productCount}
          </motion.p>
        </motion.div>

        {/* Order Overview */}
        <motion.div
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg text-yellow-700 font-semibold">Orders</h3>
          <motion.p
            className="text-3xl font-bold text-yellow-800 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {orderCount}
          </motion.p>
        </motion.div>

        {/* Payment Overview */}
        <motion.div
          className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg text-purple-700 font-semibold">Payments</h3>
          <motion.p
            className="text-3xl font-bold text-purple-800 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ${paymentTotal.toLocaleString()}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OverviewComponent;
