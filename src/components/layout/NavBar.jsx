import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function NavBar({ children }) {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} width={145} alt="Furniture Store Logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex content-center items-center gap-7">
          <NavLink
            to="/category/livingroom"
            className={({ isActive }) =>
              isActive ? "font-bold text-xl" : "font-normal"
            }
          >
            Living Room
          </NavLink>
          <NavLink
            to="/category/bedroom"
            className={({ isActive }) =>
              isActive ? "font-bold text-xl" : "font-normal"
            }
          >
            Bedroom
          </NavLink>
          <NavLink
            to="/category/homeoffice"
            className={({ isActive }) =>
              isActive ? "font-bold text-xl" : "font-normal"
            }
          >
            Home Office
          </NavLink>
          <NavLink
            to="/category/kitchen"
            className={({ isActive }) =>
              isActive ? "font-bold text-xl" : "font-normal"
            }
          >
            Kitchen & Dining
          </NavLink>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default NavBar;
