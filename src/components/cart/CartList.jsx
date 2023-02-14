import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

function CartList() {
  const { cartList } = useCartContext();

  return (
    <div className="col-span-2">
      <div>
        {cartList.map((product) => (
          <div key={product.id}>
            <CartItem product={product} />
            <hr className="h-0.5 bg-slate-200 mb-7" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartList;
