import StatCard from "../components/StatCard";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
];

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value="1,240" />
        <StatCard title="Revenue" value="$8,540" />
        <StatCard title="Orders" value="320" />
      </div>

      {/* 📊 CHART */}
      <div className="mt-10 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <h2 className="mb-4 font-semibold">Users Analytics</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Dashboard;