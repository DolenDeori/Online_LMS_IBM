import { useState } from "react";
import { NavLink } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5500/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      <form action="post" className="mt-5 space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Name</label>
          <input
            className="border p-2 outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Email</label>
          <input
            className="border p-2 outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Confirm Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="confirm_password"
            placeholder="Your Full Name"
          />
        </div>
      </form>
      <button
        type="submit"
        className="mt-5 cursor-pointer bg-blue-500 text-white p-2 px-8 rounded"
      >
        Create Account
      </button>

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
