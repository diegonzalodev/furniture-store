import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (newProduct) => {
    // validar si el producto está en el carrito
    setCartList([...cartList, newProduct]);
  };

  const emptyCart = () => setCartList([]);

  // Cantidad total
  // Precio total
  // Eliminar un producto por ID

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
