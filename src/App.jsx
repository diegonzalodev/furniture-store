import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import CartWidget from "./components/cart/CartWidget";
import HeroSection from "./components/layout/HeroSection";
import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import CartContainer from "./components/cart/CartContainer";
import CheckoutContainer from "./components/cart/CheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header>
          <NavBar>
            <CartWidget />
          </NavBar>
        </Header>
        <Routes>
          <Route path="/" element={
              <ItemListContainer>
                <HeroSection />
              </ItemListContainer>
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/cart/checkout" element={<CheckoutContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
