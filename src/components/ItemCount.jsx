import React, { useState } from "react";

function ItemCount({ handleAdd, initial, stock }) {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="w-1/2">
      <div className="mb-5 flex justify-between items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
        <button onClick={() => setCounter(handleAdd(counter) + 1)}>+</button>
        <div>{counter}</div>
        <button onClick={() => setCounter(handleAdd(counter) - 1)}>-</button>
      </div>
      <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCount;
