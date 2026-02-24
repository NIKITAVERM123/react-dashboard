import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { dark, setDark } = useContext(ThemeContext);

  
  const userName = localStorage.getItem("loggedUser");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedUserEmail");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-sm px-6 py-4 flex justify-between items-center">

     
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-slate-700 dark:text-white text-xl"
        >
          ☰
        </button>

        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          Welcome Back, {userName || "User"} 👋
        </h2>
      </div>

    
      <div className="flex items-center gap-4">

        <span className="text-sm text-slate-500 hidden md:block dark:text-slate-300">
          Admin Dashboard
        </span>

        
        <button
          onClick={() => setDark(!dark)}
          className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded text-sm"
        >
          {dark ? "Light" : "Dark"}
        </button>

        
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Header;