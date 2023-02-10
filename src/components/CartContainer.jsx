import { useCartContext } from "../context/CartContext";

function CartContainer() {
  const { cartList, emptyCart } = useCartContext();

  return (
    <div className="mt-10 text-center text-3xl font-bold">
      <h1>Cart Container</h1>
      <div>
        {cartList.map((product) => (
          <div key={product.id} className="flex content-center items-center">
            <div>
              <img src={product.source} alt="" />
            </div>
            <div>
              <p>Product: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.amount}</p>
              <button>Delete product</button>
            </div>
          </div>
        ))}
        {cartList.length > 0 && <button onClick={emptyCart}>Empty Cart</button>}
      </div>
    </div>
  );
}

export default CartContainer;
