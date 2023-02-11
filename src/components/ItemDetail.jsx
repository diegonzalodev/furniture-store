import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ info }) {
  const [isCount, setIsCount] = useState(true);
  const { addProduct } = useCartContext();

  const onAdd = (amount) => {
    addProduct({ ...info, amount });
    setIsCount(false);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 text-xl flex justify-center gap-5">
      <div>
        <img src={info.source} alt={info.name} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-7">
            <p className="uppercase font-bold text-4xl">{info.name}</p>
          </div>
          <div>
            <p className="font-bold text-xl">
              Description:{" "}
              <span className="font-normal">{info.description}</span>
            </p>
          </div>
          <div className="my-7">
            <p className="font-bold">
              <span className="text-4xl">${info.price}</span>
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              Stock: <span className="font-normal">{info.stock}</span>
            </p>
          </div>
        </div>
        <div>
          {isCount ? (
            <ItemCount onAdd={onAdd} initial={1} stock={info.stock} />
          ) : (
            <div className="flex flex-col gap-5">
              <Link to="/cart">
                <button className="w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
                  Go to Cart
                </button>
              </Link>
              <Link to="/">
                <button className="w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
                  Go to Home
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
