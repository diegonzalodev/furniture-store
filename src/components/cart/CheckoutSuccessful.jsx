import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import gifSuccess from "../../assets/images/success.gif";

function CheckoutSuccessful() {
  const [orderId, setOrderId] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "orders");

    getDocs(queryCollections)
      .then((response) =>
        setOrderId(
          response.docs.map((order) => ({
            id: order.id,
          }))
        )
      )
      .catch((error) => console.log(error));
  }, [orderId]);

  const getOrderId = orderId[orderId.length - 1];

  return (
    <div>
      <div className="mt-10 flex justify-center">
        <img src={gifSuccess} width={350} alt="Purchase Success Gif" />
      </div>
      <h2 className="max-w-7xl mx-auto mb-7 text-center text-4xl">
        Your purchase was successful!
      </h2>
      <h3 className="max-w-7xl mx-auto mb-7 text-center text-3xl">
        Your Order Id: <span className="font-bold">{getOrderId?.id}</span>
      </h3>
      <Link to="/">
        <button className="w-1/2 md:w-1/5 bg-transparent mx-auto block hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default CheckoutSuccessful;
