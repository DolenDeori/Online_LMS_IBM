import { useState } from "react";
import { NavLink } from "react-router-dom"; // Fix import for NavLink

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/api/v1/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert(data.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-svh w-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <form className="mt-5 space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Name</label>
          <input
            className="border p-2 outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            className="border p-2 outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 cursor-pointer bg-blue-500 text-white p-2 px-8 rounded"
        >
          Create Account
        </button>
      </form>
      <p className="mt-5">
        Already have an account?{" "}
        <NavLink to="/auth/signin" className="font-bold text-blue-500">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
