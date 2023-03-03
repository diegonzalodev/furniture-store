import Item from "./Item";
import Loading from "../loading/Loading";

function ItemList({ products, loading }) {
  return (
    <div className="w-11/12 mx-auto my-8 flex flex-wrap justify-between items-center gap-x-5 gap-y-10 md:max-w-7xl">
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <Item className="w-80" key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ItemList;
