import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  const addProduct = (newProduct) => {
    if (isInCart) {
      console.log("El producto ya está en el carrito");
      cartList.findIndex((product) =>
        console.log(product.amount, newProduct.amount)
      );
      setCartList(cartList);
    } else {
      console.log("El producto no está en el carrito, lo estoy agregando");
      setCartList([...cartList, newProduct]);
      setIsInCart(true);
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = cartList.filter((product) => product.id !== id);
    setCartList(updatedProducts);
  };

  const emptyCart = () => setCartList([]);

  // Cantidad total
  // Precio total

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        deleteProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
