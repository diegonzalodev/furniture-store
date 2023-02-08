import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../utilities/getFetch";
import ItemList from "./ItemList";
import "../css/loading.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

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
    <ItemList products={products} loading={loading} />
  );
}

export default ItemListContainer;
