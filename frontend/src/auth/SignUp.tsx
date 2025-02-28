import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
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
      const response = await fetch(
        "http://localhost:5500/api/v1/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("User registered successfully!");
        console.log("data is", data);
        navigate("/auth/profile");
      } else {
        alert(data.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="h-svh w-full flex flex-col justify-center items-center font-funnel">
      <p className="absolute top-4 left-4">
        <NavLink to="/" end>
          <i className="bi bi-caret-left-fill"></i>
          Back to Home
        </NavLink>
      </p>
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <form className="mt-6 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y">
          <label htmlFor="name">Name</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col gap-y mt-3">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col gap-y mt-3">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex flex-col gap-y mt-3">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
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
          className="mt-5 cursor-pointer bg-blue-700 text-white p-2 px-8 rounded-md"
        >
          Create Account
        </button>
      </form>
      <p className="mt-5">
        Already have an account?{" "}
        <NavLink to="/auth/signin" className="font-bold text-blue-700">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
