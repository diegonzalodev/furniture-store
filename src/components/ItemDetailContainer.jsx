import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../utilities/getFetch";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [arrayDetail, setArrayDetail] = useState([]);
  const [objectDetail, setObjectDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  function Loading() {
    return <div className="loading"></div>;
  }

  useEffect(() => {
    getFetch()
      .then((response) =>
        setArrayDetail(response.filter((product) => product.id === itemId))
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  useEffect(() => {
    arrayDetail.forEach((info) => setObjectDetail(info));
  }, [arrayDetail]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemDetail info={objectDetail} />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
