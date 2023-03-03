import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ info }) {
  const [isCount, setIsCount] = useState(true);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    addProduct({ ...info }, quantity);
    setIsCount(false);
  };

  return (
    <div className="w-11/12 mx-auto mt-10 text-center text-xl flex flex-col justify-center gap-5 md:max-w-7xl md:text-left md:flex-row">
      <div className="w-3/4 mx-auto">
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
            <ItemCount initial={1} stock={info.stock} onAdd={onAdd} />
          ) : (
            <div className="mt-7 flex flex-col gap-5">
              <Link to="/cart">
                <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg md:w-1/2">
                  Go to Cart
                </button>
              </Link>
              <Link to="/">
                <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg md:w-1/2">
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
