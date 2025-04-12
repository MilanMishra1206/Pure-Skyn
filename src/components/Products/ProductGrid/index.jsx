import ProductCard from "../ProductCard";

const ProductGrid = ({ products, onAddToCart, isMobile }) => {
  return (
    <div
      className={`grid md:!grid-cols-2 xl:!grid-cols-3 gap-4 mb-4 cursor-pointer ${isMobile ? "px-3" : "px-5"}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
