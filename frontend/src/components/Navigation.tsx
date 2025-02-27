import { images } from "@/constants";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();
  const [showNavLink, setShowNavLink] = useState<string | null>(null);
  return (
    <header>
      {/* ------------ navigation bar start ------------------- */}
      <nav className="py-8 px-2 lg:px-4 border-r border-gray-300 h-svh flex flex-col justify-between items-center font-funnel">
        <div>
          <NavLink to="/" className="flex items-center justify-center" end>
            <img
              src={images.logo_icon_white}
              alt="image logo"
              className={`h-10 bg-blue-700 p-2 rounded-full hover:bg-blue-800`}
            />
          </NavLink>

          <div className="mt-8">
            <ul className="flex flex-col justify-center items-center gap-y-8">
              <li
                className="hover:bg-gray-200 h-12 w-12 flex justify-center items-center rounded-md cursor-pointer"
                onMouseEnter={() => setShowNavLink("home")}
                onMouseLeave={() => setShowNavLink(null)}
              >
                <NavLink
                  to="/"
                  className="font-funnel font-bold gap-1 text-black"
                >
                  <i
                    className={`bi bi-house-door${
                      location.pathname === "/" ? "-fill" : ""
                    } text-2xl`}
                  ></i>

                  {showNavLink === "home" && (
                    <span className="absolute left-17 bg-gray-900 font-funnel font-normal text-white text-sm px-2 py-1 rounded-md z-1">
                      home
                    </span>
                  )}
                </NavLink>
              </li>
              <li
                className="hover:bg-gray-200 h-12 w-12 flex justify-center items-center rounded-md cursor-pointer"
                onMouseEnter={() => setShowNavLink("explore")}
                onMouseLeave={() => setShowNavLink(null)}
              >
                <NavLink
                  to="/explore"
                  className="text-xs font-funnel font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <i
                    className={`bi bi-compass${
                      location.pathname === "/explore" ? "-fill" : ""
                    } text-2xl`}
                  ></i>
                  {showNavLink === "explore" && (
                    <span className="absolute left-17 bg-gray-900 font-funnel font-normal text-white text-sm px-2 py-1 rounded-md z-1">
                      explore
                    </span>
                  )}
                </NavLink>
              </li>
              <li
                className="hover:bg-gray-200 h-12 w-12 flex justify-center items-center rounded-md cursor-pointer"
                onMouseEnter={() => setShowNavLink("saved")}
                onMouseLeave={() => setShowNavLink(null)}
              >
                <NavLink
                  to="/saved"
                  className="text-xs font-funnel font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <i
                    className={`bi bi-bookmark${
                      location.pathname === "/saved" ? "-fill" : ""
                    } text-2xl`}
                  ></i>
                  {showNavLink === "saved" && (
                    <span className="absolute left-17 bg-gray-900 font-funnel font-normal text-white text-sm px-2 py-1 rounded-md z-1">
                      saved
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* <div>
          <ul className="flex flex-col gap-8">
            <li>
              <NavLink
                to="/auth/signin"
                className="text-xs font-semibold flex flex-col items-center justify-center gap-1"
              >
                <i className="bi bi-box-arrow-in-right text-2xl"></i>
              </NavLink>
            </li>
          </ul>
        </div> */}
      </nav>
      {/* ------------ navigation bar end ------------------- */}
    </header>
  );
};

export default Navigation;
