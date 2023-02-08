import React, { useState } from "react";

function ItemCount() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleAddCart = () => {
    alert("Agregado al carrito");
  };
  return (
    <div className="w-1/2">
      <div className="mb-5 flex justify-between items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
        <button onClick={handleAdd}>+</button>
        <div>{counter}</div>
        <button onClick={handleSubtract}>-</button>
      </div>
      <button
        className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg"
        onClick={handleAddCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCount;
