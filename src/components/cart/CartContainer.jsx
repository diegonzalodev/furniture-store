import { useCartContext } from "../../context/CartContext";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartEmpty from "./CartEmpty";

function CartContainer() {
  const { cartList, emptyCart } = useCartContext();

  return (
    <div className="max-w-7xl mx-auto my-8 text-3xl">
      {cartList.length ? (
        <>
          <h1 className="mb-10 font-bold">Shopping Cart</h1>
          <div className="grid grid-cols-3">
            <CartList />
            <CartSummary />
          </div>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-1/4"
            onClick={emptyCart}
          >
            Empty Cart
          </button>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default CartContainer;
