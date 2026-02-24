import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedUser", validUser.name);
      localStorage.setItem("loggedUserEmail", validUser.email);

      toast.success(`Welcome ${validUser.name} 🎉`);
      navigate("/");
    } else {
      toast.error("Invalid credentials ❌");
      setErrors({ password: "Wrong email or password" });
      localStorage.removeItem("isLoggedIn");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

     
        <div>
          <input
            type="text"
            placeholder="Enter email"
            className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

     
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            className="w-full p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-2 cursor-pointer"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

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