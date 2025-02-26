import { images } from "@/constants";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <header>
      {/* ------------ navigation bar start ------------------- */}
      <nav className="py-8 px-3 border-r-2 h-svh flex flex-col justify-between items-center font-funnel bg-blue-100">
        <div>
          <NavLink to="/" className="flex items-center justify-center" end>
            <img src={images.logo} alt="image logo" className="h-10" />
          </NavLink>

          <div className="mt-8">
            <ul className="flex flex-col gap-8">
              <li>
                <NavLink
                  to="/"
                  className="text-xs font-funnel font-bold flex flex-col items-center justify-center gap-1 text-blue-800"
                >
                  <i className="bi bi-house-door-fill text-2xl"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-xs font-funnel font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <i className="bi bi-grid text-2xl"></i>
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-xs font-funnel font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <i className="bi bi-bookmark text-2xl"></i>
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-8">
            <li>
              <NavLink
                to="#"
                className="text-xs font-semibold flex flex-col items-center justify-center gap-1"
              >
                <i className="bi bi-people text-2xl"></i>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-xs font-semibold flex flex-col items-center justify-center gap-1"
              >
                <i className="bi bi-chat-left text-2xl"></i>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/signin"
                className="text-xs font-semibold flex flex-col items-center justify-center gap-1"
              >
                <i className="bi bi-box-arrow-in-right text-2xl"></i>
                Login In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* ------------ navigation bar end ------------------- */}
    </header>
  );
};

export default Navigation;
