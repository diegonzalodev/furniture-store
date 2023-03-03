import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "../loading/Loading";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "products", itemId);

    getDoc(query)
      .then((response) => setProduct({ id: response.id, ...response.data() }))
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
