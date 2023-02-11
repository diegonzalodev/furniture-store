import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function CartList() {
  const { cartList } = useCartContext();

  return (
    <div className="col-span-2">
      <div>
        {cartList.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CartList;
