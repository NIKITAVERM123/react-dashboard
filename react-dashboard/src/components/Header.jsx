import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ toggleSidebar }) => {

  const { dark, setDark } = useContext(ThemeContext);

  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "/login";
};

  return (
    <div className="bg-white dark:bg-slate-800 shadow-sm px-6 py-4 flex justify-between items-center">

      {/* Mobile Menu Button */}
      <button
  onClick={handleLogout}
  className="bg-red-500 text-white px-3 py-1 rounded"
>
  Logout
</button>
      <button
        onClick={toggleSidebar}
        className="md:hidden text-slate-700 dark:text-white text-xl"
      >
        ☰
      </button>

      <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
        Welcome Back, Nikita 👋
      </h2>

      <div className="flex items-center gap-4">

        <span className="text-sm text-slate-500 hidden md:block dark:text-slate-300">
          Admin Dashboard
        </span>

        {/* 🌗 Theme Toggle Button */}
        <button
          onClick={() => setDark(!dark)}
          className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded text-sm"
        >
          {dark ? "Light" : "Dark"}
        </button>

      </div>

    </div>
  );
};

export default Header;