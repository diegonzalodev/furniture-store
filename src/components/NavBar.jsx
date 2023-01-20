function NavBar({ children }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <a href="#">
          <img
            src="https://storage.googleapis.com/signmonkey-148101.appspot.com/2020/files/signs/sign.311090.v3.png"
            width={180}
            alt="Furniture Store Logo"
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
