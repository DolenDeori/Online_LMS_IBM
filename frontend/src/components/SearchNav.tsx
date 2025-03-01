import { NavLink } from "react-router";
import DarkMode from "./DarkMode";

const SearchNav = ({
  isAuth,
  darkMode,
  setDarkMode,
}: {
  isAuth: boolean;
  darkMode: boolean;
  setDarkMode: any;
}) => {
  // const navigate = useNavigate();
  return (
    <div
      className={`p-4 px-8 z-10 flex justify-between items-center gap-2 sticky top-0 left-0 w-full duration-200 ${
        darkMode ? "bg-gray-900" : "bg-white "
      } font-funnel`}
    >
      <div className="bg-gray-200 flex justify-between items-center rounded-xl p-1 px-4 flex-2 border-2 border-gray-200 gap-1">
        <i className="bi bi-search text-md text-gray-500"></i>
        <input
          type="text"
          className="bg-gray-200 w-full outline-none p-2 text-sm"
          placeholder="Search for Title, Author, Host or Topic ..."
        />
      </div>
      {isAuth ? (
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <div className="flex gap-1">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <NavLink
            to="/auth/signup"
            className="p-2.5 bg-white text-sm text-blue-700 rounded-l-xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-200"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/auth/signin"
            className="p-2.5 bg-white text-sm text-blue-700 rounded-r-xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-200"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
