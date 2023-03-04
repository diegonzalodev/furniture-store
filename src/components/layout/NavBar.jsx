import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import logo from "../../assets/images/logo.png";

function NavBar({ children }) {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const queryCategories = collection(db, "categories");

    getDocs(queryCategories)
      .then((response) =>
        setCategoriesList(
          response.docs.map((category) => ({
            id: category.id,
            ...category.data(),
          }))
        )
      )
      .catch((error) => setCategoriesList(error));
  }, []);

  return (
    <nav className="w-11/12 mx-auto flex flex-col justify-between items-center gap-7 md:max-w-7xl md:flex-row md:gap-0">
      <div>
        <Link to="/">
          <img src={logo} width={145} alt="Furniture Store Logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex content-center items-center gap-7 text-center">
          {categoriesList.map((cat) => (
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
    </nav>
  );
}

export default NavBar;
