import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

const Settings = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 🔄 LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  // 💾 SAVE TO LOCALSTORAGE
  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    toast.success("Settings saved successfully");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow space-y-4">

        {/* 🌙 THEME TOGGLE */}
        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <button
            onClick={() => setDark(!dark)}
            className="bg-slate-300 dark:bg-slate-700 px-3 py-1 rounded"
          >
            {dark ? "On" : "Off"}
          </button>
        </div>

        {/* 👤 NAME */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full dark:bg-slate-700"
        />

        {/* 📧 EMAIL */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full dark:bg-slate-700"
        />

        {/* 💾 SAVE BUTTON */}
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default Settings;