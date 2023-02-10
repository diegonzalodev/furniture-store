import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ info }) {
  const { addProduct } = useCartContext();

  const onAdd = (amount) => {
    addProduct({ ...info, amount });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 text-xl flex justify-center gap-5">
      <div>
        <img src={info.source} alt={info.name} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-5">
            <p className="uppercase font-bold text-4xl">{info.name}</p>
          </div>
          <div>
            <p className="font-bold">
              Description:{" "}
              <span className="font-normal">{info.description}</span>
            </p>
          </div>
          <div className="my-5">
            <p className="font-bold">
              Price: <span className="font-normal text-2xl">${info.price}</span>
            </p>
          </div>
          <div className="mt-5">
            <p className="font-bold">
              Stock: <span className="font-normal text-2xl">{info.stock}</span>
            </p>
          </div>
        </div>
        <ItemCount onAdd={onAdd} initial={1} stock={info.stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
