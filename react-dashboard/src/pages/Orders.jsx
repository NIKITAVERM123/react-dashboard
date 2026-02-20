import { useState } from "react";

const orderData = [
  { id: 1, customer: "Nikita", amount: "$120", status: "Pending" },
  { id: 2, customer: "Rahul", amount: "$80", status: "Completed" },
  { id: 3, customer: "Anjali", amount: "$150", status: "Cancelled" },
  { id: 4, customer: "Amit", amount: "$95", status: "Completed" },
];

const Orders = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = orderData.filter((order) => {
    return (
      order.customer.toLowerCase().includes(search.toLowerCase()) &&
      (status === "All" || order.status === status)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search customer..."
        className="p-2 border rounded w-full mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔽 FILTER */}
      <select
        className="p-2 border rounded mb-4"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
        <option>Cancelled</option>
      </select>

      {/* 📊 TABLE */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="border-b text-slate-500">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      order.status === "Completed"
                        ? "bg-green-500"
                        : order.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Orders;