import { useEffect, useState } from "react";
import { Pencil, Eye, EyeOff } from "lucide-react";
import Header from "../components/Header";
import toast from "react-hot-toast";

const Settings = () => {
  const [editMode, setEditMode] = useState(false);
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const loggedEmail = localStorage.getItem("loggedUserEmail");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find((u) => u.email === loggedEmail);

    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPassword(currentUser.password);
    }
  }, []);

  const validate = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    else if (/\d/.test(name)) newErrors.name = "Name cannot contain numbers";

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Minimum 6 characters";

    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.find(
      (u) => u.email === email && u.email !== loggedEmail
    );

    if (emailExists) {
      setErrors({ email: "Email already in use" });
      toast.error("Email already exists ❌");
      return;
    }

    const updatedUsers = users.map((u) =>
      u.email === loggedEmail ? { ...u, name, email, password } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedUser", name);
    localStorage.setItem("loggedUserEmail", email);

    toast.success("Profile updated ✅");
    setEditMode(false);
    setErrors({});
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Profile Settings</h2>

          <Pencil
            size={18}
            className="cursor-pointer"
            onClick={() => setEditMode(true)}
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            value={name}
            disabled={!editMode}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded disabled:bg-gray-100"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            value={email}
            disabled={!editMode}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded disabled:bg-gray-100"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>

          <input
            type={show ? "text" : "password"}
            value={password}
            disabled={!editMode}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded disabled:bg-gray-100"
          />

          {editMode && (
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-9 cursor-pointer"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          )}

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {editMode && (
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        )}
      </div>
    </>
  );
};

export default Settings;