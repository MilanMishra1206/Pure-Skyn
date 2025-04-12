import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { IoFilterSharp } from "react-icons/io5";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { addToCart } from "../../redux/Actions";
import { productList } from "../../helpers/Products";
import BreadcrumbSection from "./BreadcrumbSection";
import ProductFilterDrawer from "./ProductFilterDrawer";
import SidebarFilters from "./SidebarFilters";
import ProductGrid from "./ProductGrid";

const Products = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const showSnackbar = useAppSnackbar();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const productTypes = [
    { key: "sunscreen", label: "Sunscreen" },
    { key: "skinAntioxidant", label: "Skin-Antioxidant" },
    { key: "pigmentation", label: "Pigmentation" },
    { key: "moisturiser", label: "Moisturiser" },
    { key: "facewash", label: "Facewash" },
    { key: "faceSerum", label: "Face-Serum" },
  ];

  const toggleFilterDrawer = (open) => () => setIsFilterDrawerOpen(open);

  const handleTypeChange = (key) => {
    setSelectedTypes((prev) =>
      prev.includes(key) ? prev.filter((type) => type !== key) : [...prev, key]
    );
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showSnackbar("Product Added to Cart", "success");
  };

  const allProductsFlat = Object.values(productList).flatMap((category) =>
    Object.values(category)
  );

  const filteredProducts =
    selectedTypes.length === 0
      ? allProductsFlat
      : selectedTypes.flatMap((type) =>
          productList[type] ? Object.values(productList[type]) : []
        );

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}
      >
        <BreadcrumbSection />
      </motion.div>

      {isMobile && (
        <div className="flex justify-start px-3 mb-4">
          <button
            onClick={toggleFilterDrawer(true)}
            className="flex items-center px-4 py-2 rounded gap-2 !bg-skyn !text-white"
          >
            <IoFilterSharp /> Filter
          </button>
        </div>
      )}

      <ProductFilterDrawer
        open={isFilterDrawerOpen}
        toggleDrawer={toggleFilterDrawer}
        productTypes={productTypes}
        selectedTypes={selectedTypes}
        onChange={handleTypeChange}
      />

      <div className="flex flex-col lg:!flex-row">
        {!isMobile && (
          <motion.div
            variants={FadeInWrapper("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className="flex gap-2 justify-center items-center mb-4 font-poppins px-5 self-start"
          >
            <SidebarFilters
              productTypes={productTypes}
              selectedTypes={selectedTypes}
              onChange={handleTypeChange}
            />
          </motion.div>
        )}

        <motion.div
          variants={FadeInWrapper("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            isMobile={isMobile}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
