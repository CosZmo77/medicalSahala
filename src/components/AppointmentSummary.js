import { PieChart, Pie, Cell } from "recharts";

const AppointmentSummary = ({ total, upcoming, completed, missed }) => {
  // Chart Data
  const data = [
    { name: "Upcoming", value: upcoming, color: "#8B5CF6" }, // Purple
    { name: "Completed", value: completed, color: "#10B981" }, // Green
    { name: "Missed", value: missed, color: "#EC4899" }, // Pink
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Circular Progress Chart */}
      <PieChart width={80} height={80}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%" cy="50%"
          innerRadius={25} outerRadius={35}
          paddingAngle={3} // Adds small space between segments
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Total Patients Count */}
      {/* <div className="absolute text-2xl font-bold text-gray-800">{total}</div> */}

      {/* Label */}
      {/* <p className="text-sm text-gray-500 font-semibold">ALL PATIENTS</p> */}
    </div>
  );
};

export default AppointmentSummary;
