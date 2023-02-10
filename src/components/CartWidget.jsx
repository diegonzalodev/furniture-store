import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import iconCart from "../images/cart.png";

function CartWidget() {
  const { cartList } = useCartContext();

  return (
    <div className="flex items-center gap-1">
      <Link to="/cart">
        <img
          className="cursor-pointer"
          src={iconCart}
          width={42}
          alt="Cart Image"
        />
      </Link>
      <span className="bg-green-400 py-0 px-2 rounded-full text-lg font-bold">
        {cartList.length}
      </span>
    </div>
  );
}

export default CartWidget;
