import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        toast.success("Users loaded successfully");
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search user..."
        className="mb-4 p-2 border rounded w-full text-sm md:text-base dark:bg-slate-700"
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 bg-slate-300 dark:bg-slate-700 animate-pulse rounded"
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow overflow-x-auto">

          {/* 📊 TABLE */}
          <table className="min-w-[500px] w-full text-sm text-left">
            <thead className="border-b text-slate-500 dark:text-slate-300">
              <tr>
                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Company</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-3">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 🔢 PAGINATION */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">

            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-slate-300 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastUser >= filteredUsers.length}
              className="px-3 py-1 bg-slate-300 rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Users;