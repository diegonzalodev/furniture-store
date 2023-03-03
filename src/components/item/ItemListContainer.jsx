import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";

function ItemListContainer({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "products");
    const queryFilter = categoryId
      ? query(queryCollections, where("category", "==", categoryId))
      : queryCollections;

    getDocs(queryFilter)
      .then((response) =>
        setProducts(
          response.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      )
      .catch((error) => setProducts(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      {children}
      <ItemList products={products} loading={loading} />
    </>
  );
}

export default ItemListContainer;
