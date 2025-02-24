import { NavLink } from "react-router";


const Navigation = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-32 py-4 bg-gray-300">
        <div>
          <NavLink to="/" end>
            Hello Books
          </NavLink>
        </div>
        <ul className="flex gap-x-6">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/signin">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/auth/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
