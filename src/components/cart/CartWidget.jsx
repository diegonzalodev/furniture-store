import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import cartIcon from "../../assets/images/cart.png";

function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <div className="flex items-center gap-1">
      <Link to="/cart">
        <img
          className="cursor-pointer"
          src={cartIcon}
          width={42}
          alt="Cart Image"
        />
      </Link>
      <span className="bg-green-400 py-0 px-2 rounded-full text-lg font-bold">
        {totalProducts}
      </span>
    </div>
  );
}

export default CartWidget;
