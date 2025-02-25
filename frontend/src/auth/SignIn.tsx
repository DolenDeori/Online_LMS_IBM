import { NavLink } from "react-router";
import { useState } from "react";

const SignIn = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const response = await fetch("http://localhost:5500/api/v1/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User signed in successfully!");
      } else {
        alert(data.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-svh w-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="font-bold text-3xl">Sign In</h1>
      <form action="post" className="mt-5 space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Email</label>
          <input
            className="border p-2 outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
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
            placeholder="Your Password"
          />
        </div>
      </form>
      <button
        type="submit"












        
        onClick={handleSubmit}
        className="mt-5 cursor-pointer bg-blue-500 text-white p-2 px-8 rounded"
      >
        Sign In
      </button>

      <p className="mt-5">
        Don't have an account?{" "}
        <NavLink to="/auth/signup" className="font-bold text-blue-500">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default SignIn;
