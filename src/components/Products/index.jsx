import { Box, Rating, useMediaQuery } from "@mui/material";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";
import Resources from "../../config/Resources";
import FadedLineBreak from "../../shared/CustomHrTag";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  const productList = [
    {
      id: 1,
      productName: "BP Machine",
      imgSrc: Resources.images.Products.img1,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4,
      strikePrice: "2800",
      productPrice: "2250",
    },
    {
      id: 2,
      productName: "Crepe Bandage",
      imgSrc: Resources.images.Products.img2,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4.5,
      productPrice: "250",
    },
    {
      id: 3,
      productName: "Stethoscope",
      imgSrc: Resources.images.Products.img3,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      strikePrice: "1000",
      productPrice: "700",
    },
    {
      id: 4,
      productName: "N-96 Mask",
      imgSrc: Resources.images.Products.img4,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      productPrice: "650",
    },
    {
      id: 5,
      productName: "Sugar Machine",
      imgSrc: Resources.images.Products.img5,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4,
      strikePrice: "2000",
      productPrice: "1500",
    },
    {
      id: 6,
      productName: "Scissors",
      imgSrc: Resources.images.Products.img6,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 3.5,
      productPrice: "250",
    },
  ];

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const calculateSaveAmount = (oldPrice, newPrice) => {
    return `Save ₹${+oldPrice - +newPrice}`;
  };

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}
      >
        <CustomHeader
          heading={"Products"}
          showBackButton={true}
          navigateTo={"/"}
        />
      </motion.div>
      <motion.div
        variants={FadeInWrapper("up", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        <div
          className={`grid grid-cols md:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 gap-4 mb-4 cursor-pointer ${isMobile ? "px-3" : "px-5"}`}
        >
          {productList.map((product) => (
            <div
              className="p-4 shadow-lg rounded-2xl font-poppins relative"
              key={product.id}
            >
              {product.strikePrice && (
                <button className="absolute top-2 right-2 shadow-md rounded-xl py-2 px-1 text-sm font-semibold bg-skyn text-white w-26">
                  {calculateSaveAmount(
                    product.strikePrice,
                    product.productPrice
                  )}
                </button>
              )}
              <img
                src={product.imgSrc}
                alt={product.productName}
                className="w-full"
                onClick={() => navigate(`/products/${product.productName}`)}
              />
              <FadedLineBreak />
              <Link
                className="font-bold text-xl mt-4 hover:text-skyn no-underline"
                to={`/products/${product.productName}`}
              >
                {product.productName}
              </Link>
              <Box sx={{ width: 200, display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <Rating
                  name="text-feedback"
                  value={product.ratings}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: 2 }}>{product.ratings}</Box>
              </Box>
              <p className="text-sm text-justify !text-kashmirBlue !cursor-default mt-4 mb-4">
                {truncateText(product.productDescription, 12)}{" "}
                <Link
                  className="underline !text-skyn hover:!opacity-80"
                  to={`/products/${product.productName}`}
                >
                  Read More
                </Link>
              </p>
              {product.strikePrice && (
                <span className="mt-4 text-left text-slate-400 line-through font-bold mr-4">
                  ₹{product.strikePrice}
                </span>
              )}
              <span className="mt-4 text-left text-skyn font-bold">
                ₹{product.productPrice}
              </span>
              <div className="flex flex-col md:!flex-row gap-4 mt-4">
                <button className="text-coal shadow-md rounded-xl p-3 text-sm font-semibold border !border-skyn hover:bg-skyn hover:!text-white w-full transition duration-500">
                  Add To Cart
                </button>
                <button className="text-coal shadow-md rounded-xl p-3 text-sm font-semibold border !border-skyn hover:bg-skyn hover:!text-white w-full transition duration-500">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
