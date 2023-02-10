import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetchOne } from "../utils/getFetch";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  function Loading() {
    return <div className="loading"></div>;
  }

  useEffect(() => {
    getFetchOne(itemId)
      .then((response) => setProduct(response))
      .catch((error) => setProduct(error))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemDetail info={product} />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
