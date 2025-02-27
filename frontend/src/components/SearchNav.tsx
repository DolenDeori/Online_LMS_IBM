import { NavLink } from "react-router";

const SearchNav = () => {
  return (
    <div className="bg-blue-600 p-4 z-10 flex justify-between items-center gap-4 fixed">
      <div className="bg-white flex justify-between items-center rounded-md p-1 px-2 flex-2">
        <i className="bi bi-search text-xl"></i>
        <input
          type="text"
          className="bg-white w-full outline-none p-2 text-sm"
          placeholder="Title, Author, Host or Topic ..."
        />
      </div>
      <div className="flex">
        <NavLink
          to="/auth/signup"
          className="p-2.5 bg-white text-blue-700 rounded-l-md border-r-2"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/auth/signin"
          className="p-2.5 bg-white text-blue-700 rounded-r-md"
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default SearchNav;
