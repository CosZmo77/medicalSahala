import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Campaign = () => {
  const campaignData = [
    { name: "Campaign A", reach: 20, budget: 12, rate: 8 },
    { name: "Campaign B", reach: 18, budget: 10, rate: 6 },
    { name: "Campaign C", reach: 22, budget: 13, rate: 7 },
    { name: "Campaign D", reach: 30, budget: 15, rate: 10 },
  ];

  const visitorData = [
    { name: "Male", value: 55, color: "#3498db" },
    { name: "Female", value: 40, color: "#e74c3c" },
    { name: "Others", value: 5, color: "#9b59b6" },
  ];

  const recentAds = [
    { id: "AD 1", name: "Summer Sale", clicks: "2k", budget: "₹5k", impressions: "10k", ctr: "20%", status: "Online" },
    { id: "AD 2", name: "Health Tips", clicks: "1.5k", budget: "₹4k", impressions: "8k", ctr: "18.6%", status: "Online" },
    { id: "AD 3", name: "Free Checkup", clicks: "1.2k", budget: "₹3k", impressions: "7.5k", ctr: "16%", status: "Offline" },
    { id: "AD 4", name: "Discount Ad", clicks: "800", budget: "₹2.5k", impressions: "6k", ctr: "14%", status: "Online" },
  ];



  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Live Campaign <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">4</span>
        </h2>
        <span className="text-sm text-gray-600">30 December, 2024 - 30 January, 2025</span>
      </div>

      {/* Campaign Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {["Health Check-Up Promo", "Diabetic Care Awareness", "Free Dental Consultation", "Senior Health Package"].map((title, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md flex flex-col relative">
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">{[25, 18, 22, 30][index]}K Impressions</p>
            <div className="absolute top-2 right-2">
              <PieChart width={80} height={80}>
                <Pie data={[{ value: [70, 60, 80, 86][index] }, { value: 100 - [70, 60, 80, 86][index] }]} dataKey="value" outerRadius={15} innerRadius={7}>
                  <Cell fill="#3498db" />
                  <Cell fill="#e0e0e0" />
                </Pie>
              </PieChart>
            </div>
            <div className="text-blue-500 font-bold mt-6">{[70, 60, 80, 86][index]}%</div>
          </div>
        ))}
      </div>


      {/* Campaign Analysis & Visitors Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-6">
        {/* Campaign Analysis (70%) */}
        <div className="bg-white p-4 rounded-xl shadow-md lg:col-span-7">
          <h3 className="text-sm font-semibold mb-4">Campaign Analysis</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={campaignData} barSize={20}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reach" fill="#2ecc71" name="Reach" />
              <Bar dataKey="budget" fill="#f39c12" name="Budget" />
              <Bar dataKey="rate" fill="#e74c3c" name="Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Visitors Profile (30%) */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center lg:col-span-3">
          <h3 className="text-sm font-semibold mb-4">Visitors Profile</h3>
          <PieChart width={200} height={200}>
            <Pie data={visitorData} dataKey="value" outerRadius={70} innerRadius={40} label>
              {visitorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      {/* Recent Ads & Top Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Recent Ads Table (70%) */}
        <div className="bg-white p-4 rounded-xl shadow-md lg:col-span-7">
          <h3 className="text-sm font-semibold mb-4">Recent Ads</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left bg-gray-200">
                  {["Ad No.", "Ad Name", "Clicks", "Budget", "Impressions", "CTR", "Status"].map((head) => (
                    <th key={head} className="p-2">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentAds.map((ad, index) => (
                  <tr key={index} className="border-t">
                    {Object.values(ad).map((val, i) => (
                      <td key={i} className="p-2">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Traffic Sources (Compact & Styled) */}
<div className="bg-white p-4 rounded-xl shadow-md lg:col-span-3">
  <h3 className="text-sm font-semibold mb-3">Top Traffic Sources</h3>
  <div className="space-y-2">
    {[
      { name: "Facebook", value: "20K", impressions: "Impressions", icon: "https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid", color: "text-blue-600" },
      { name: "Google Ads", value: "15K", impressions: "Impressions", icon: "https://img.freepik.com/premium-psd/google-ads-icon-3d-render_68185-1062.jpg", color: "text-yellow-600" },
      { name: "Instagram", value: "10K", impressions: "Impressions", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s", color: "text-pink-600" },
      { name: "Email Ads", value: "8K", impressions: "Impressions", icon: "https://cdn-icons-png.flaticon.com/512/3178/3178158.png", color: "text-gray-600" },
    ].map((source, index) => (
      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
        <div className="flex items-center space-x-2">
          <img src={source.icon} alt={source.name} className="w-5 h-5" />
          <span className="text-xs font-medium">{source.name}</span>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">{source.value}</p>
          <p className="text-[10px] text-gray-500">{source.impressions}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default Campaign;
