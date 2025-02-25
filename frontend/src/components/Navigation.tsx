import { images } from "@/constants";
import {
  Squares2X2Icon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightEndOnRectangleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <header>
      <nav className="py-6 px-2 h-svh flex flex-col justify-between items-center bg-blue-100">
        <div>
          <NavLink to="/" className="flex items-center justify-center" end>
            <img src={images.logo} alt="" className="h-10" />
          </NavLink>
          <div className="mt-16">
            <ul className="flex flex-col gap-8">
              <li>
                <NavLink
                  to="#"
                  className="text-xs font-medium flex flex-col items-center justify-center gap-2 text-blue-800"
                >
                  <HomeIcon className="h-7 w-7" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-xs font-medium flex flex-col items-center justify-center gap-2"
                >
                  <Squares2X2Icon className="h-7 w-7" />
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-xs font-medium flex flex-col items-center justify-center gap-2"
                >
                  <BookmarkIcon className="h-7 w-7" />
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
                className="text-xs font-medium flex flex-col items-center justify-center gap-2"
              >
                <UserGroupIcon className="h-7 w-7" />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-xs font-medium flex flex-col items-center justify-center gap-2"
              >
                <ChatBubbleLeftRightIcon className="h-7 w-7" />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-xs font-medium flex flex-col items-center justify-center gap-2"
              >
                <ArrowRightEndOnRectangleIcon className="h-7 w-7" />
                Login In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
