import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../utilities/getFetch";
import Item from "./Item";
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
    <div className="max-w-7xl mx-auto my-8 flex flex-wrap justify-between items-center gap-x-5 gap-y-10">
      {loading ? (
        <div className="loading"></div>
      ) : (
        products.map((product) => (
          <Item className="w-80" key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ItemListContainer;
