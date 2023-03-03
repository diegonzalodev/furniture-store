import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function CartSummary() {
  const { totalProducts, totalPrice } = useCartContext();
  return (
    <div className="w-full bg-zinc-100 px-7 pt-5 rounded-lg col-span-1 justify-self-end md:w-5/6">
      <h2 className="font-medium text-center text-2xl">Order summary</h2>
      <div className="my-6 text-lg flex justify-between">
        <p>Total Products</p>
        <span className="font-medium">{totalProducts}</span>
      </div>
      <div className="my-6 text-lg flex justify-between">
        <p>Total Price</p>
        <span className="font-medium">${totalPrice}</span>
      </div>
      <hr className="h-0.5 bg-slate-300 mt-5" />
      <Link to="/cart/checkout">
        <button className="w-full mt-5 py-2.5 bg-teal-500 text-base text-white rounded-lg hover:bg-teal-600">
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartSummary;
