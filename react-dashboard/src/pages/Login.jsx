import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful 🎉");
      navigate("/");
    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white p-2 rounded">
          Login
        </button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;