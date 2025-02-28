import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

const SignIn = () => {
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
      const response = await fetch(
        "http://localhost:5500/api/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("User signed in successfully!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("response is : ", data);

        // automatic redirect the user.
        navigate("/auth/profile");
      } else {
        alert(data.message || "Error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
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
          onClick={handleSubmit}
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
