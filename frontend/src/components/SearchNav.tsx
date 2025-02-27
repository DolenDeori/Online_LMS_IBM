import { NavLink } from "react-router";

const SearchNav = () => {
  return (
    <div className="p-4 z-10 flex justify-between items-center gap-4 sticky top-0 left-0 w-full bg-white font-funnel">
      <div className="bg-gray-200 flex justify-between items-center rounded-xl p-1 px-4 flex-2 border-2 border-gray-200 gap-1">
        <i className="bi bi-search text-md text-gray-500"></i>
        <input
          type="text"
          className="bg-gray-200 w-full outline-none p-2 text-sm"
          placeholder="Search for Title, Author, Host or Topic ..."
        />
      </div>
      <div className="flex gap-1">
        <NavLink
          to="/auth/signup"
          className="p-2.5 bg-white text-blue-700 rounded-l-xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-200"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/auth/signin"
          className="p-2.5 bg-white text-blue-700 rounded-r-xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-200"
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default SearchNav;
