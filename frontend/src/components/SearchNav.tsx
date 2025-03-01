import { NavLink } from "react-router";
import DarkMode from "./DarkMode";
import { useState } from "react";

const SearchNav = ({
  isAuth,
  darkMode,
  setDarkMode,
}: {
  isAuth: boolean;
  darkMode: boolean;
  setDarkMode: any;
}) => {
  const [showNavLink, setShowNavLink] = useState<string | null>(null);
  return (
    <div
      className={`p-4 px-4 md:px-8 z-10 flex justify-center items-center gap-2 fixed md:sticky top-0 left-0 w-full duration-200 ${
        darkMode ? "bg-gray-900" : "bg-white "
      } font-funnel`}
    >
      <div
        className={`${
          darkMode
            ? "bg-gray-600 border-gray-500"
            : "bg-gray-200 border-gray-300"
        } flex justify-between items-center rounded-xl p-1 px-4 flex-2 border-2  gap-1`}
      >
        <i className="bi bi-search text-md text-gray-500"></i>
        <input
          type="text"
          className={`${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-200 "
          } w-full outline-none p-2 text-sm`}
          placeholder="Search for Title, Author, Host or Topic ..."
        />
      </div>
      {isAuth ? (
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <div className="flex justify-center items-center gap-1">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <NavLink
            to="/auth/signup"
            className={`${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
            } h-12 w-12 pr-1 rounded-xl flex justify-center items-center duration-200 relative`}
            onMouseEnter={() => setShowNavLink("auth")}
            onMouseLeave={() => setShowNavLink(null)}
          >
            <i
              className={`${
                darkMode ? "text-white" : "text-black"
              } bi bi-box-arrow-in-right text-xl`}
            ></i>
            {showNavLink === "auth" && (
              <span
                className={`${
                  darkMode ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
                } absolute right-14 whitespace-nowrap  font-funnel font-normal text-sm px-2 py-1 rounded-xl z-1`}
              >
                Login / Sign Up
              </span>
            )}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
