import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SIGNUP_API = import.meta.env.VITE_API_SIGN_UP_URL;
const SignUp = ({ darkMode }: { darkMode: boolean }) => {
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
      const response = await fetch(`${SIGNUP_API}`, {
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

      const userResponse = await response.json();

      if (response.ok) {
        localStorage.setItem("token", userResponse.data.token);
        localStorage.setItem("user", JSON.stringify(userResponse.data.user));
        const previousVisitedLink = localStorage.getItem("lastAttemptedUrl");
        alert("User registered successfully!");

        if (previousVisitedLink) {
          navigate(previousVisitedLink);
          localStorage.removeItem("lastAttemptedUrl");
        } else {
          navigate("/profile");
        }
      } else {
        alert(userResponse.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-white"
      } h-svh w-full flex flex-col justify-center items-center font-funnel`}
    >
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
