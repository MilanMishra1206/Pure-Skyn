import { Box, Rating, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";
import Resources from "../../config/Resources";
import FadedLineBreak from "../../shared/CustomHrTag";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import CustomButton2 from "../../shared/CustomButton2";
import { IoFilterSharp } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

function Products() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const showSnackbar = useAppSnackbar();
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
      category: "Machine",
    },
    {
      id: 2,
      productName: "Crepe Bandage",
      imgSrc: Resources.images.Products.img2,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4.5,
      productPrice: "250",
      category: "Bandages",
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
      category: "Machine",
    },
    {
      id: 4,
      productName: "N-96 Mask",
      imgSrc: Resources.images.Products.img4,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      productPrice: "650",
      category: "Bla Bla",
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
      category: "Machine",
    },
    {
      id: 6,
      productName: "Scissors",
      imgSrc: Resources.images.Products.img6,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 3.5,
      productPrice: "250",
      category: "Bla Bla",
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

  const handleAddToCart = () => {
    showSnackbar("Product Added to Cart", "success");
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
      {/* <motion.div
        variants={FadeInWrapper("right", 0.2)}
        initial="hidden"
        whileInView="show"
        className={`flex gap-2 justify-center items-center mb-4 font-poppins ${isMobile ? "px-3" : "px-5"}`}
      >
        <button className="flex items-center gap-2 py-3 shadow px-5 border bg-secondary rounded text-white text-xl font-poppins hover:!opacity-80">
          <IoFilterSharp size="1.5rem"/>
          Filter
        </button>
        <button className="flex items-center gap-2 py-3 shadow px-5 border bg-secondary rounded text-white text-xl font-poppins hover:!opacity-80">
          <FaSort size="1.5rem"/>
          Sort
        </button>
      </motion.div> */}
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
                className="font-bold text-xl mt-4 text-coal hover:text-skyn no-underline"
                to={`/products/${product.productName}`}
              >
                {product.productName}
              </Link>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
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
              <CustomButton2
                buttonText="Add to Cart"
                faIcon={<FaCartPlus size="1.5rem" />}
                handleSubmit={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
