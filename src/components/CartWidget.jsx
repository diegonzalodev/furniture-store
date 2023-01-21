import iconCart from "../img/cart.png";

function CartWidget() {
  return (
    <div className="flex items-center gap-1">
      <img
        className="cursor-pointer"
        src={iconCart}
        width={42}
        alt="Icono Carrito Ecommerce"
      />
      <span className="bg-green-400 py-0 px-2 rounded-full text-lg font-bold">
        0
      </span>
    </div>
  );
}

export default CartWidget;
