import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const categories = [
  { id: "1", name: "Living Room", categoryId: "livingroom" },
  { id: "2", name: "Bedroom", categoryId: "bedroom" },
  { id: "3", name: "Home Office", categoryId: "homeoffice" },
  { id: "4", name: "Kitchen & Dining", categoryId: "kitchen" },
];

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
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`category/${cat.categoryId}`}
              className={({ isActive }) =>
                isActive ? "font-bold text-xl" : "font-normal"
              }
            >
              {cat.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default NavBar;
