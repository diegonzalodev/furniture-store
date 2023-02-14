import { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [totalProducts, setTotalProducts] = useState(
    parseInt(localStorage.getItem("totalProducts")) || 0
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    localStorage.setItem("totalProducts", totalProducts.toString());
  }, [totalProducts]);

  const addProduct = (item, newQuantity) => {
    let newCartList;
    let findProduct = cartList.find((product) => product.id === item.id);
    if (findProduct) {
      findProduct.quantity += newQuantity;
      newCartList = [...cartList];
    } else {
      findProduct = { ...item, quantity: newQuantity };
      newCartList = [...cartList, findProduct];
    }
    setCartList(newCartList);
    setTotalProducts(totalProducts + newQuantity);
  };

  const removeProduct = (id) => {
    const copyListCart = [...cartList];
    const indexItemCart = copyListCart.find((item) => item.id === id);
    setTotalProducts(totalProducts - indexItemCart.quantity);

    const updatedProducts = copyListCart.filter((product) => product.id !== id);
    setCartList(updatedProducts);
  };

  const totalPrice = cartList.reduce(
    (add, product) => add + product.price * product.quantity,
    0
  );

  const emptyCart = () => {
    setCartList([]);
    setTotalProducts(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        removeProduct,
        totalProducts,
        totalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
