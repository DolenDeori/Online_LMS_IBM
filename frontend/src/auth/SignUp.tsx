import { NavLink } from "react-router";

const SignUp = () => {
    
  return (
    <div className="h-svh w-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <form action="post" className="mt-5 space-y-2">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Name</label>
          <input
            className="border p-2 outline-none"
            type="text"
            name="full_name"
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Email</label>
          <input
            className="border p-2 outline-none"
            type="email"
            name="full_name"
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
            name="password"
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Confirm Password</label>
          <input
            className="border p-2 outline-none"
            type="password"
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
