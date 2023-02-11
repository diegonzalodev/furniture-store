import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import HeroSection from "./components/HeroSection";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="bg-slate-400">
          <NavBar>
            <CartWidget />
          </NavBar>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer>
                <HeroSection />
              </ItemListContainer>
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
