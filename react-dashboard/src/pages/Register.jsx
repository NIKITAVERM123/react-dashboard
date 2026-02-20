import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    toast.success("Account created 🎉");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <form className="bg-white p-8 rounded-xl shadow w-80 space-y-4" onSubmit={handleRegister}>
        <h2 className="text-xl font-bold text-center">Sign Up</h2>

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
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;