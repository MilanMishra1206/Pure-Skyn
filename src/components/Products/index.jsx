import {
  Box,
  Breadcrumbs,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import Resources from "../../config/Resources";
import FadedLineBreak from "../../shared/CustomHrTag";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { addToCart } from "../../redux/Actions";
import { INRCurrency } from "../../helpers/Regex";

function Products() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productList = [
    {
      id: 1,
      productName: "Dermatica Aze Proactive Lotion",
      imgSrc: Resources.images.Products.dermaticaAzeProactiveLotion.img1,
      productDescription:
        "At Pureskyn, we believe that the foundation of real beauty is flawless, clear skin. We are thrilled to present Dermatica Aze Proactive Lotion, a revolutionary skincare solution created to effectively and gently treat acne, acne scars, and acne marks. With Dermatica Aze, your secret to bright, glowing skin, bid adieu to the aggravation of acne and the scarring that follows.",
      ratings: 4,
      productPrice: "1080",
      category: "Dermat",
    },
    {
      id: 2,
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
      id: 3,
      productName: "Crepe Bandage",
      imgSrc: Resources.images.Products.img2,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4.5,
      productPrice: "250",
      category: "Bandages",
    },
    {
      id: 4,
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
      id: 5,
      productName: "N-96 Mask",
      imgSrc: Resources.images.Products.img4,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      productPrice: "650",
      category: "Bla Bla",
    },
    {
      id: 6,
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
      id: 7,
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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showSnackbar("Product Added to Cart", "success");
  };

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="!text-coal !font-poppins !text-lg">
      Products
    </Typography>,
  ];

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}
      >
        <div className={`mb-4 py-4 font-poppins`}>
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
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
              className="flex flex-col p-4 shadow-lg rounded-2xl font-poppins relative"
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
                className="w-full rounded-2xl"
                onClick={() => navigate(`/products/${product.productName}`)}
              />
              <FadedLineBreak />
              <div className="flex-1">
                <Link
                  className="font-bold text-lg mt-4 text-coal hover:text-skyn no-underline"
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
                  {truncateText(product.productDescription, 18)}{" "}
                  <Link
                    className="underline !text-skyn hover:!opacity-80"
                    to={`/products/${product.productName}`}
                  >
                    Read More
                  </Link>
                </p>
                {product.strikePrice && (
                  <span className="mt-4 text-left text-slate-400 line-through font-bold mr-4">
                    {INRCurrency(product.strikePrice)}
                  </span>
                )}
                <span className="mt-4 text-left text-skyn font-bold text-lg">
                  {INRCurrency(product.productPrice)}
                </span>
              </div>
              <button
                className="flex items-center gap-2 rounded-3xl font-bold bg-skyn text-white border hover:!border-black w-full justify-center hover:!border hover:!bg-white hover:!text-skyn p-3 mt-4 transition duration-500"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart <FaCartPlus size="1.2rem" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
