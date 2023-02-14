import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetchOne } from "../../utilities/getFetch";
import ItemDetail from "./ItemDetail";
import Loading from "../loading/Loading";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getFetchOne(itemId)
      .then((response) => setProduct(response))
      .catch((error) => setProduct(error))
      .finally(() => setLoading(false));
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
