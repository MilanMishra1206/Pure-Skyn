import ProductCard from "../ProductCard";

const ProductGrid = ({
  products,
  onAddToCart,
  isMobile,
  totalProductCount,
}) => {
  return (
    <>
      <div className="flex px-5 mb-2">
        <p className="text-xs">
          Total <strong>{totalProductCount}</strong> items
        </p>
      </div>
      <div
        className={`grid md:!grid-cols-2 xl:!grid-cols-3 gap-4 mb-4 cursor-pointer ${isMobile ? "px-3" : "px-5"}`}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
