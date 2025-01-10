import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import Resources from "../../config/Resources";
import FadedLineBreak from "../../shared/CustomHrTag";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import CustomDropdown from "../../shared/CustomDropdown";
import { useState } from "react";
import CustomTextField from "../../shared/CustomTextField";
import regex from "../../helpers/Regex";
import { FaShippingFast, FaShieldAlt } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProductReviews } from "./ProductReviews";

function ProductsDetails() {
  const { productName } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1438px)");
  const [quantity, setQuantity] = useState("1");
  const [pinCode, setPinCode] = useState("");

  const products = {
    productName: "BP Machine",
    imgSrc: Resources.images.Products.img1,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    ratings: 4,
    strikePrice: "2800",
    productPrice: "2250",
  };

  const productContent = [
    {
      id: 1,
      name: "Description",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      id: 2,
      name: "Key Benefits",
      content:
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    },
    {
      id: 3,
      name: "How to use",
      content:
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    },
    {
      id: 4,
      name: "Key Ingredients",
      content:
        "Glycerin, Mineral oil, Ethylhexyl palmitate, Dipropylene Glycol, Xylitol, Sodium Acrylate, Capric Triglyceride, Glycyrrhetinic acid, Tocopheryl Acetate, Polysorbate 80, Disodium EDTA, Allantoin, Fructooligosaccharides, Mannitol, Propylene Glycol",
    },
    {
      id: 5,
      name: "Additional Information",
      content:
        "Aqua/Water/EAU, Glycerin, Paraffinum Liquidum/Mineral Oil/Huile Minerale, Ethylhexyl Palmitate, Dipropylene Glycol, Xylitol, Bis-PEG/PPG-16/PPG-16/16 Dimethicone, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, Caprylic/Capric Triglyceride, Glycyrrhetinic Acid, Tocopheryl Acetate, Polysorbate 80, Disodium EDTA, Allantoin, Fructooligosaccharides, Mannitol, Propylene Glycol, Cetrimonium Bromide, Ceramide 3, Rhamnose, Ginkgo Biloba Leaf Extract, Dodecyl Gallate, Laminaria Ochroleuca Extract, Fragrance(Parfum). WEIGHT 40 ML",
    },
    {
      id: 6,
      name: "Shipping & Return",
      content:
        "Cosmetics and personal use items once delivered cannot be returned. Please record an unboxing video during opening of the package as this is necessary for issuing refund in case of wrong item delivery/damaged delivery. Please Note this is the policy of shipping partner and not sarinskin.com. Without unboxing video a refund will not be issued.",
    },
  ];

  const reviewContent = [
    {
      id: 1,
      name: "Milan",
      date: "12-12-2025",
      rating: 4,
      review: "Best for combination skin. I love it so much.",
    },
    {
      id: 2,
      name: "Sophia",
      date: "13-12-2025",
      rating: 5,
      review: "Perfect for my oily skin. Keeps me feeling fresh all day!",
    },
    {
      id: 3,
      name: "Lucas",
      date: "14-12-2025",
      rating: 3,
      review: "It's okay, but didn't work as well for my dry skin.",
    },
    {
      id: 4,
      name: "Emma",
      date: "15-12-2025",
      rating: 4,
      review: "Great product! It has helped with my acne and redness.",
    },
    {
      id: 5,
      name: "Oliver",
      date: "16-12-2025",
      rating: 2,
      review:
        "Unfortunately, it didn't suit my skin type. My face got irritated.",
    },
    {
      id: 6,
      name: "Ava",
      date: "17-12-2025",
      rating: 5,
      review: "Absolutely love this! My skin feels smooth and looks radiant.",
    },
    {
      id: 7,
      name: "Ethan",
      date: "18-12-2025",
      rating: 4,
      review: "Good for sensitive skin. Leaves my face soft and moisturized.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(productContent[0].id); // update this to null and then setSelectedItem after the API call
  const selectedContent = productContent.find(
    (item) => item.id === selectedItem
  )?.content;

  const calculateSaveAmount = (oldPrice, newPrice) => {
    return `- ₹${+oldPrice - +newPrice}`;
  };

  const handleClick = (id) => {
    setSelectedItem(id);
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
        <div
          className={`mb-4 py-24 ${isMobile ? "" : "px-5"} font-poppins`}
        >
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-1">
              <div className="p-4 rounded-lg shadow-lg flex justify-center self-start">
                <img src={products.imgSrc} />
              </div>
              <div className="grid grid-cols-3 px-5 py-3 gap-2 cursor-pointer">
                <img
                  src={products.imgSrc}
                  className="rounded-lg shadow-lg border"
                />
                <img
                  src={products.imgSrc}
                  className="rounded-lg shadow-lg border"
                />
                <img
                  src={products.imgSrc}
                  className="rounded-lg shadow-lg border"
                />
              </div>
            </div>
            <div className={`${isMobile ? "mt-5" : "ml-5"}`}>
              <p className="text-3xl font-bold">{productName}</p>
              <div className="flex flex-col">
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
                    value={4}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={{ ml: 2 }}>{4}</Box>
                </Box>
                <FadedLineBreak />
                <div className="flex items-center md:!items-start lg:!items-center flex-col md:!flex-row gap-2">
                  <div>
                    {products.strikePrice && (
                      <span className="text-left text-sm text-slate-400 line-through font-bold mr-4">
                        ₹{products.strikePrice}
                      </span>
                    )}
                    <span className="text-xl text-left text-skyn font-bold">
                      ₹{products.productPrice}
                    </span>
                    <span className="text-xs">{"(incl. of all taxes.)"}</span>
                  </div>
                  <button className="shadow-md rounded-xl p-2 text-sm font-semibold bg-emerald-700 text-white w-24">
                    {calculateSaveAmount(
                      products.strikePrice,
                      products.productPrice
                    )}
                  </button>
                </div>
              </div>
              {/* <FadedLineBreak /> */}
              <div className="grid grid-cols-1 md:!grid-cols-3 gap-4 place-items-center mt-5">
                <CustomDropdown
                  textClassOverride="!text-kashmirBlue"
                  classes="!rounded-md !mb-4"
                  requiredStar
                  labelToShow="Select Quantity"
                  name="quantity"
                  showIconOutline
                  options={[
                    { label: "1", value: "1" },
                    {
                      label: "2",
                      value: "2",
                    },
                    {
                      label: "3",
                      value: "3",
                    },
                    {
                      label: "4",
                      value: "4",
                    },
                    {
                      label: "5",
                      value: "5",
                    },
                  ]}
                  value={quantity}
                  handleChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  className="text-coal shadow-md rounded-xl p-3 text-sm text-center font-semibold border !border-skyn hover:bg-skyn hover:!text-white w-full transition duration-500"
                  onClick={() => {
                    console.log("quantity", quantity);
                  }}
                >
                  Add To Cart
                </button>
                <button className="shadow-md rounded-xl p-3 text-sm text-center font-semibold bg-skyn text-white hover:opacity-80 w-full transition duration-500">
                  Buy Now
                </button>
              </div>
              <FadedLineBreak />
              <div className="flex gap-4 place-items-center w-100 md:!w-96">
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Check Pincode"
                  maxLength={6}
                  regex={regex.numeric}
                  name="pinCode"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
                <button
                  className="shadow-md rounded-xl p-3 text-sm text-center font-semibold bg-skyn text-white transition duration-500 mt-4 w-1/3"
                  onClick={() => {
                    console.log("Pincode", pinCode);
                  }}
                >
                  Check
                </button>
              </div>
              <div className="flex flex-col mt-5 gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <FaShippingFast size="2rem" className="flex self-start" />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold ml-2">
                        Free Shipping
                      </span>
                      <span className="text-sm text-kashmirBlue ml-2">
                        Free standard shipping on orders over 1000rs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt size="1.5rem" className="flex self-start" />
                  <span className="text-lg font-bold ml-4">100% Original</span>
                </div>
              </div>
              <FadedLineBreak />
            </div>
          </div>
          {/* Product Details */}
          <motion.div
            variants={FadeInWrapper("top", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10"
          >
            {isLargeScreen && (
              <div>
                <ul className="flex justify-center items-center gap-4 border-b-2">
                  {productContent.map((item) => (
                    <li
                      key={item.id}
                      className={`text-lg font-semibold cursor-pointer group p-2`}
                      onClick={() => handleClick(item.id)}
                    >
                      <span
                        className={`border-skyn group-hover:border-b-4 p-2 ${item.id === selectedItem ? "!border-skyn border-b-4" : ""}`}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
                {selectedItem && (
                  <div className="p-4">
                    <p>{selectedContent}</p>
                  </div>
                )}
              </div>
            )}
            {!isLargeScreen && (
              <div>
                {productContent.map((item) => (
                  <Accordion defaultExpanded={item.id === 1} key={item.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="text-skyn" />}
                      aria-controls={`${item.id}-content`}
                      id={`${item.id}-header`}
                      className="bg-gray-50 rounded-md"
                    >
                      <Typography
                        component="span"
                        className="font-bold font-poppins text-skyn"
                      >
                        {item.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.content.split("\n").map((para, index) => (
                        <Typography
                          key={index}
                          className="!font-poppins !text-cello !font-medium"
                        >
                          {para}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            )}
          </motion.div>
          <FadedLineBreak />
          {/* Product Reviews */}
          <ProductReviews ReviewContent={reviewContent} />
        </div>
      </motion.div>
    </div>
  );
}

export default ProductsDetails;
