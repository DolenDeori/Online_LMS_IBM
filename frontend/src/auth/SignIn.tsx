import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

const SIGNIN_API = import.meta.env.VITE_API_SIGN_URL;
const SignIn = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();
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
      const response = await fetch(`${SIGNIN_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const userResponse = await response.json();

      if (response.ok) {
        localStorage.setItem("token", userResponse.data.token);
        localStorage.setItem("user", JSON.stringify(userResponse.data.user));
        const lastAttemptedUrl = localStorage.getItem("lastAttemptedUrl");
        alert("User signed in successfully!");

        // automatic redirect the user.
        if (lastAttemptedUrl) {
          navigate(lastAttemptedUrl);
          localStorage.removeItem("lastAttemptedUrl");
        } else {
          navigate("/profile");
        }
      } else {
        alert(userResponse.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
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
      <h1 className="font-funnel font-bold text-3xl">Sign In</h1>
      <form
        action="post"
        className="mt-6 flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>

        <div className="flex flex-col gap-y mt-3">
          <label htmlFor="">Password</label>
          <input
            className="border-2 p-2 outline-none rounded-md"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your Password"
          />
        </div>

        <div className="mt-2">
          <NavLink
            to="/auth/forgot-password"
            className="text-blue-700 font-funnel"
          >
            Forgot Password?{" "}
          </NavLink>
        </div>

        <button
          type="submit"
          // onClick={handleSubmit}
          className="cursor-pointer bg-blue-700 text-white p-2 px-8 rounded-md mt-5"
        >
          Sign In
        </button>
      </form>

      <p className="mt-5">
        Don't have an account?{" "}
        <NavLink to="/auth/signup" className="font-bold text-blue-700">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default SignIn;
