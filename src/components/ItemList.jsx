import Item from "./Item";

function ItemList({ products, loading, Loading }) {
  return (
    <div className="max-w-7xl mx-auto my-8 flex flex-wrap justify-between items-center gap-x-5 gap-y-10">
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