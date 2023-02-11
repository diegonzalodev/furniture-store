import { useState } from "react";

function ItemCount({ onAdd, initial, stock }) {
  const [counter, setCounter] = useState(initial);

  const handleAddProduct = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtractProduct = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  const handleAdd = () => {
    onAdd(counter);
  };

  return (
    <div className="w-1/2 flex flex-col gap-5">
      <div className="flex justify-between items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
        <button onClick={handleAddProduct}>+</button>
        <div>{counter}</div>
        <button onClick={handleSubtractProduct}>-</button>
      </div>
      <button
        onClick={handleAdd}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCount;
