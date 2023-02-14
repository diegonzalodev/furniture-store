import { useCartContext } from "../../context/CartContext";
import closeIcon from "../../assets/images/close.png";

function CartItem({ product }) {
  const { removeProduct } = useCartContext();

  return (
    <div className="max-w-7xl mx-auto mb-8 flex justify-between col-span-2">
      <div className="flex justify-between gap-8">
        <div className="w-44">
          <img
            className="object-cover"
            src={product.source}
            alt={product.name}
          />
        </div>
        <div>
          <p className="text-2xl font-medium">{product.name}</p>
          <p className="my-1 text-xl font-me">Price: ${product.price}</p>
          <p className="text-xl">Quantity: {product.quantity}</p>
        </div>
      </div>
      <button className="flex mt-2" onClick={() => removeProduct(product.id)}>
        <img src={closeIcon} alt="Close Icon" width={18} />
      </button>
    </div>
  );
}

export default CartItem;
