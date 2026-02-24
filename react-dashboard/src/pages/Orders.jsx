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
    <div className="p-4 md:p-6">

      <h1 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
        Orders
      </h1>

      
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="🔍 Search customer..."
          className="p-2 border rounded w-full dark:bg-slate-700 dark:text-white"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded md:w-52 dark:bg-slate-700 dark:text-white"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

     
      <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm text-left">
          <thead className="border-b text-slate-500 dark:text-slate-300">
            <tr>
              <th className="py-2">ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  <td className="py-3">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>

                  <td className="text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-medium
                      ${
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
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-slate-500 dark:text-slate-300"
                >
                  No orders found 😔
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Orders;