import logo from "../img/logo.png";

function NavBar({ children }) {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div>
        <a href="#">
          <img
            src={logo}
            width={180}
            alt="Logo Furniture Store"
          />
        </a>
      </div>

      <nav>
        <ul className="flex gap-7">
          <li className="hover:font-bold">
            <a href="#">Enlace 1</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Enlace 2</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Enlace 3</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Enlace 4</a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default NavBar;
