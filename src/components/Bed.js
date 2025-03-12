import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const HospitalBedDashboard = () => {
  const overviewData = [
    { label: "Total Patients", value: 120, color: "bg-blue-500" },
    { label: "New Admission", value: 30, color: "bg-green-500" },
    { label: "Discharged", value: 25, color: "bg-gray-500" },
    { label: "Remaining", value: 95, color: "bg-yellow-500" },
  ];

  const departmentData = [
    { name: "Mon", ICU: 8, General: 5, Maternity: 9, Private: 6 },
    { name: "Tue", ICU: 9, General: 6, Maternity: 8, Private: 7 },
    { name: "Wed", ICU: 7, General: 8, Maternity: 7, Private: 5 },
    { name: "Thu", ICU: 10, General: 7, Maternity: 8, Private: 8 },
    { name: "Fri", ICU: 6, General: 5, Maternity: 9, Private: 7 },
  ];
  

  const bedOccupancy = [
    { label: "General Beds", value: 83 },
    { label: "ICU Beds", value: 83 },
    { label: "Isolation Beds", value: 10 },
    { label: "Special Care Beds", value: 36 },
  ];

  const pieData = [
    { name: "Occupied", value: 100, color: "#ff4d4d" },
    { name: "Available", value: 60, color: "#4caf50" },
    { name: "Under Maintenance", value: 20, color: "#ffcc00" },
  ];

  const bedList = [
    { id: "B101", name: "Ramash", ward: "ICU", date: "12/01/25", status: "Occupied" },
    { id: "B102", name: "Akhil", ward: "ICU", date: "12/01/25", status: "Occupied" },
    { id: "B103", name: "--", ward: "General", date: "--", status: "Available" },
    { id: "B104", name: "--", ward: "General", date: "--", status: "Maintenance" },
  ];



  return (
    <div className=" bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="mb-2">
        <input type="text" placeholder="Search by patient's name, bed number, department" className="w-full p-3 border rounded-lg shadow-sm" />
      </div>

      {/* Overview Cards with Image */}
      <div className="relative bg-blue-600 text-white p-3 rounded-lg shadow-md mb-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {overviewData.map((item, index) => (
            <div key={index} className="p-3 bg-white text-gray-900 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-lg">{item.label}</p>
              </div>
              <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admitted-patient-2662088-2207700.png" alt={item.label} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Charts & Bed Occupancy */}
      <div className="grid grid-cols-1 mb-2 md:grid-cols-3 gap-2">
        {/* Department Occupied (Bigger) */}
        <div className="md:col-span-2 bg-white p-2 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Department Occupied</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ICU" stroke="#ff4d4d" />
              <Line type="monotone" dataKey="General" stroke="#4caf50" />
              <Line type="monotone" dataKey="Maternity" stroke="#ffcc00" />
              <Line type="monotone" dataKey="Private" stroke="#1e90ff" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bed Occupancy (Smaller, fits properly) */}
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-md font-semibold mb-2">Bed Occupancy</h3>
          {bedOccupancy.map((item, index) => (
            <div key={index} className="flex justify-between py-1 text-sm">
              <span>{item.label}</span>
              <span className="font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-2">
        {/* Bed List (Bigger, fits screen width) */}
        <div className="md:col-span-2 bg-white p-2 rounded-lg shadow-md w-full overflow-x-auto">
          <h3 className="text-lg font-semibold mb-3">Bed List</h3>
          <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Bed ID</th>
                <th className="p-2 border">Patient Name</th>
                <th className="p-2 border">Ward</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {bedList.map((bed, index) => (
                <tr key={index} className="text-center border">
                  <td className="p-2 border">{bed.id}</td>
                  <td className="p-2 border">{bed.name}</td>
                  <td className="p-2 border">{bed.ward}</td>
                  <td className="p-2 border">{bed.date}</td>
                  <td className={`p-2 border ${bed.status === "Occupied" ? "text-red-500" : bed.status === "Available" ? "text-green-500" : "text-yellow-500"}`}>{bed.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Total Bed Analysis (Smaller & No Extra Space) */}
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-md font-semibold mb-2">Total Bed Analysis</h3>
          <div className="flex flex-wrap justify-between text-xs mb-2">
            <div><span className="font-bold">Total Beds:</span> 200</div>
            <div><span className="font-bold">Occupied:</span> 120</div>
            <div><span className="font-bold">Available:</span> 60</div>
            <div><span className="font-bold">Maintenance:</span> 20</div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );


};

export default HospitalBedDashboard;
