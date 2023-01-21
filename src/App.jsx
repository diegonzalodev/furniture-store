import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="bg-slate-400">
        <NavBar>
          <CartWidget />
        </NavBar>
      </div>
      <ItemListContainer greeting={"Rodrigo"} />
    </>
  );
}

export default App;
