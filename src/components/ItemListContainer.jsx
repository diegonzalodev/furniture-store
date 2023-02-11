import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../utils/getFetch";
import ItemList from "./ItemList";
import "../css/loading.css";

function ItemListContainer({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  function Loading() {
    return <div className="loading"></div>;
  }

  useEffect(() => {
    if (categoryId) {
      getFetch()
        .then((response) =>
          setProducts(
            response.filter((product) => product.category === categoryId)
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((response) => setProducts(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <>
      {children}
      <ItemList products={products} loading={loading} Loading={Loading} />
    </>
  );
}

export default ItemListContainer;
