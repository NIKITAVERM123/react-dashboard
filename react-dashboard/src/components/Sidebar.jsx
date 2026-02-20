import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-full w-56 bg-slate-900 text-white p-6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>

      <ul className="space-y-3 text-sm">

        <li>
          <NavLink to="/" className="block hover:text-indigo-400">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/users" className="block hover:text-indigo-400">
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders" className="block hover:text-indigo-400">
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="block hover:text-indigo-400">
            Settings
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;