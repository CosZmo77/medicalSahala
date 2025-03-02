import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const revenueData = [
  { day: "Mon", revenue: 20000 },
  { day: "Tue", revenue: 30000 },
  { day: "Wed", revenue: 40000 },
  { day: "Thu", revenue: 25000 },
  { day: "Fri", revenue: 45000 },
  { day: "Sat", revenue: 20000 },
  { day: "Sun", revenue: 10000 },
];

const paymentModes = [
  { name: "Cash Payment", value: 22, color: "#4F46E5" },
  { name: "Credit/Debit Card", value: 28, color: "#9333EA" },
  { name: "UPI Payment", value: 37, color: "#F59E0B" },
  { name: "Net Banking", value: 10, color: "#10B981" },
  { name: "Insurance", value: 12, color: "#EF4444" },
];

const revenueCategories = [
  { name: "Consultations", value: 30, color: "#6366F1" },
  { name: "Surgeries", value: 20, color: "#F87171" },
  { name: "Lab Tests", value: 17, color: "#34D399" },
  { name: "Pharmacy", value: 18, color: "#FBBF24" },
  { name: "Others", value: 15, color: "#A78BFA" },
];

const transactionData = [
  { id: "TXN001", name: "Nikita", date: "11/01/25", amount: "₹5k", status: "Paid", mode: "UPI" },
  { id: "TXN072", name: "Harish", date: "11/01/25", amount: "₹7k", status: "Credit", mode: "Credit" },
  { id: "TXN023", name: "Jeska", date: "10/01/25", amount: "₹8k", status: "Pending", mode: "Cash" },
  { id: "TXN023", name: "Nithya", date: "30/12/24", amount: "₹2.2k", status: "Paid", mode: "Cash" },
];

const Dashboard = () => {
  return (
    <div className="p-2 space-y-6 bg-gray-100 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <div className="bg-white p-2 rounded-lg  text-center">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-blue-600">₹2,50,000</p>
        </div>
        <div className="bg-white p-2 rounded-lg  text-center">
          <p className="text-gray-500 text-sm">Net Profit</p>
          <p className="text-xl font-bold text-blue-500">₹1,50,000</p>
        </div>
        <div className="bg-white p-2 rounded-lg  text-center">
          <p className="text-gray-500 text-sm">Patients</p>
          <p className="text-xl font-bold text-blue-400">30,756</p>
        </div>
        <div className="bg-green-100 p-2 rounded-lg text-center">
          <p className="text-gray-600 text-sm">Completed Payment</p>
          <p className="text-lg font-bold text-green-600">₹1,50,000</p>
        </div>
        <div className="bg-yellow-100 p-2 rounded-lg  text-center">
          <p className="text-gray-600 text-sm">Pending Payment</p>
          <p className="text-lg font-bold text-yellow-600">₹30,000</p>
        </div>
        <div className="bg-red-100 p-2 rounded-lg  text-center">
          <p className="text-gray-600 text-sm">Refunded Amount</p>
          <p className="text-lg font-bold text-red-600">₹10,000</p>
        </div>
      </div>


      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="col-span-3 bg-white p-2 rounded-lg">
          <h2 className="text-lg font-semibold">Revenue Analysis</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData} barGap={20}>
              <XAxis dataKey="day" tick={{ fontSize: 12, dy: 5 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#4F46E5" barSize={20} />
            </BarChart>
          </ResponsiveContainer>

        </div>


        <div className="md:col-span-2 bg-white  p-2 rounded-lg">
          <div className="bg-white  rounded-lg ">
            <h2 className="text-lg font-semibold">Mode of Payment</h2>
            {paymentModes.map((mode) => (
              <div key={mode.name} className="mb-2">
                <p className="text-gray-600">{mode.name} - {mode.value}%</p>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${mode.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue by Category & Transactions */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="md:col-span-2 bg-white  p-2 rounded-lg">
          <h2 className="text-lg font-semibold">Revenue by Category</h2>
          <div className="" style={{ display: "flex" }}>
            <PieChart width={250} height={250}>
              <Pie data={revenueCategories} dataKey="value" outerRadius={100} label>
                {revenueCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="mt-4 ml-6">
              {revenueCategories.map((category) => (
                <p key={category.name} className="text-gray-600">{category.name}: {category.value}%</p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white  p-2 rounded-lg overflow-auto">
          <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b whitespace-nowrap">
                  <th className="p-2">Payment ID</th>
                  <th className="p-2">Patient Name</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Mode</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((txn) => (
                  <tr key={txn.id} className="border-b whitespace-nowrap">
                    <td className="p-2">{txn.id}</td>
                    <td className="p-2">{txn.name}</td>
                    <td className="p-2">{txn.date}</td>
                    <td className="p-2">{txn.amount}</td>
                    <td className={`p-2 ${txn.status === "Pending" ? "text-red-600" : "text-green-600"}`}>{txn.status}</td>
                    <td className="p-2">{txn.mode}</td>
                    <td className="p-2 text-blue-500 cursor-pointer">Receipt</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
