import { Link } from "react-router-dom";
import emptyIcon from "../../assets/images/emptycart.png";

function CartEmpty() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={emptyIcon} width={450} alt="Empty Cart Icon" />
      </div>
      <div className="max-w-7xl mx-auto mb-7 text-center font-bold">
        Your shopping cart is empty!
      </div>
      <Link to="/">
        <button className="w-1/2 md:w-1/5 bg-transparent mx-auto block hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
          Go to Shop
        </button>
      </Link>
    </div>
  );
}

export default CartEmpty;
