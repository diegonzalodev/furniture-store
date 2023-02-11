import { useCartContext } from "../context/CartContext";
import closeIcon from "../images/close.png";

function CartItem({ product }) {
  const { deleteProduct } = useCartContext();

  return (
    <div className="max-w-7xl mx-auto mb-8 flex col-span-2 gap-8">
      <div className="flex justify-between gap-5">
        <div className="w-48">
          <img
            className="object-cover"
            src={product.source}
            alt={product.name}
          />
        </div>
        <div>
          <p className="text-2xl font-medium">{product.name}</p>
          <p className="my-1 text-xl font-me">Price: {product.price}</p>
          <p className="text-xl">Quantity: {product.amount}</p>
        </div>
      </div>
      <button className="flex mt-2" onClick={() => deleteProduct(product.id)}>
        <img src={closeIcon} alt="Close Icon" width={28} />
      </button>
    </div>
  );
}

export default CartItem;
