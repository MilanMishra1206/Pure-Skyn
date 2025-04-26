import { lazy, Suspense, useEffect, useState } from "react";
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
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import PaginationControls from "./PaginationControls";
// import { useQuery } from "react-query";
// import { getAllProducts } from "../../services/Products";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

const Products = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const showSnackbar = useAppSnackbar();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [allProducts, setAllProducts] = useState([]);
  const productsPerPage = 12;

  const productTypes = [
    { key: "sunscreen", label: "Sunscreen" },
    { key: "skinAntioxidant", label: "Skin-Antioxidant" },
    { key: "pigmentation", label: "Pigmentation" },
    { key: "moisturiser", label: "Moisturiser" },
    { key: "facewash", label: "Facewash" },
    { key: "faceSerum", label: "Face-Serum" },
  ];

  // const { isFetching } = useQuery(["getAllProducts"], () => getAllProducts(), {
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: false,
  //   refetchOnReconnect: false,
  //   retry: false,
  //   onSuccess: (response) => {
  //     setAllProducts(response?.data);
  //     console.log(response?.data);
  //   },
  // });

  const toggleFilterDrawer = (open) => () => setIsFilterDrawerOpen(open);

  const handleTypeChange = (key) => {
    setSelectedTypes((prev) => {
      const newSelection = prev.includes(key)
        ? prev.filter((type) => type !== key)
        : [...prev, key];
      setCurrentPage(1);
      return newSelection;
    });
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

  useEffect(() => {
    setTotalProductCount(filteredProducts?.length);
  }, [filteredProducts]);

  const paginateProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(filteredProducts.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const calculateRange = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const start = indexOfFirstProduct + 1;
    const end =
      indexOfLastProduct > totalProductCount
        ? totalProductCount
        : indexOfLastProduct;
    return `${start}-${end}`;
  };

  return (
    <div className="mt-5">
      <Suspense>
        <CustomLoader open={false} />
      </Suspense>
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        className={`mt-5 ${isMobile ? "p-3" : "pt-5 pl-5"}`}
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

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] px-4 text-center w-100">
            <MdOutlineProductionQuantityLimits className="text-5xl text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">
              We are adding products soon
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Stay tuned! New products will be available shortly.
            </p>
          </div>
        ) : (
          <motion.div
            variants={FadeInWrapper("up", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <ProductGrid
              products={paginateProducts()}
              onAddToCart={handleAddToCart}
              isMobile={isMobile}
              totalProductCount={totalProductCount}
            />
          </motion.div>
        )}
      </div>
      <div className="flex justify-center my-4">
        <div className="text-gray-700">
          Showing {calculateRange()} of {totalProductCount} items
        </div>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
