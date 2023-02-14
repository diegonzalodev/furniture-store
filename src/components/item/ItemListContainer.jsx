import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, query } from "firebase/firestore";
import ItemList from "./ItemList";

function ItemListContainer({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "products", "5z4k7Jp3HzHj7GBXA5ZO");

    getDoc(query).then((response) =>
      setProduct({ id: response, ...response.data() })
    );
  }, []);

  return (
    <>
      {children}
      <ItemList products={products} loading={loading} />
    </>
  );
}

export default ItemListContainer;
