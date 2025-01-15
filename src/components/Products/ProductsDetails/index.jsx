import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Divider,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaShippingFast, FaShieldAlt, FaCartPlus } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { ProductReviews } from "./ProductReviews";
import BuyMoreProducts from "./BuyMoreProducts";
import Resources from "../../../config/Resources";
import FadedLineBreak from "../../../shared/CustomHrTag";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import regex from "../../../helpers/Regex";
import CustomTextField from "../../../shared/CustomTextField";
import CustomDropdown from "../../../shared/CustomDropdown";
import CustomButton2 from "../../../shared/CustomButton2";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { addToCart } from "../../../redux/Actions";
import { useDispatch } from "react-redux";
import { MdVerified } from "react-icons/md";

function ProductsDetails() {
  const { productName } = useParams();
  const showSnackbar = useAppSnackbar();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1438px)");
  const [quantity, setQuantity] = useState("1");
  const [pinCode, setPinCode] = useState("");
  const [noOfRatings, setNoOfRatings] = useState(0);

  const products = {
    productName: "BP Machine",
    imgSrc: Resources.images.Products.img1,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    ratings: 4,
    strikePrice: "2800",
    productPrice: "2250",
    category: "Machine",
    quantity: 1,
  };

  const productContent = [
    {
      id: 1,
      name: "Description",
      content: `Lorem ipsum dolor sit amet, <b>consectetuer adipiscing elit</b>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <b>Donec quam felis</b>: <ul class="list-disc"> <li>ultricies nec</li> <li>pellentesque eu</li> <li>pretium quis sem.</li> <li>Nulla consequat massa quis enim.</li></ul>`,
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
      content: `<div class="font-bold text-xl">Returns Policy</div>
                <div class="space-y-4 font-poppins">
                <p class="mt-4">Personal use items once delivered cannot be returned. <b>Please record an unboxing video during opening of the package as this is necessary for issuing refund in case of wrong item delivery/damaged delivery. Please Note this is the policy of shipping partner and not pureskyn.com. Without unboxing video a refund will not be issued.</b></p>
                <p>Once a return is raised we will get the return order picked up from the same address as the address of delivery.</p>
                <p class="mb-4">You can expect the refund/replacement within 5-30 days of handing over the package for return, in most cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return order (5 to 10 business days) + the time it takes for us to process your return once we receive it (3 to 5 business days) + the time it takes for the bank to process the refund request (5 to 10 business days).</p>
                </div>
                <div class="font-bold text-xl">Shipping</div>
                <div class="space-y-4">
                <p class="mt-4">We can ship to majority countries across the world provided there are no restrictions on the products in the destinations country.</p>
                <p>When you place an order, we will estimate shipping cost for you.</p>
                <p>Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page.</p>
                </div>`,
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

  useEffect(() => {
    setNoOfRatings(reviewContent.length);
  }, [reviewContent]);

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-kashmirBlue font-poppins hover:opacity-80"
    >
      Home
    </Link>,
    <Link
      key="2"
      to="/products"
      className="text-kashmirBlue font-poppins hover:opacity-80"
    >
      Products
    </Link>,
    <Typography key="3" className="text-coal font-poppins cursor-pointer">
      {products.productName}
    </Typography>,
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

  const handlePincodeCheck = () => {
    console.log("Pincode", pinCode);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(products));
    showSnackbar("Product Added to Cart", "success");
  };

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 p-3 md:!p-4 lg:!p-5"
      >
        <div className={`mb-4 py-24 ${isMobile ? "" : "px-5"} font-poppins`}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" className="mb-4">
            {breadcrumbs}
          </Breadcrumbs>
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
                <div className="flex flex-col md:flex-row gap-2 items-center mt-4">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={4}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Box sx={{ ml: 2 }}>{4}/5</Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="!border-black border border-r-0 border-opacity-30 hidden md:!block"
                  />
                  <span className="flex items-center justify-center gap-2 text-coal font-medium">
                    <MdVerified size="1rem" fill="#EE6503" /> Based on{" "}
                    {noOfRatings} reviews
                  </span>
                </div>
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
              <div className="grid grid-cols-1 md:!grid-cols-2 gap-4 place-items-center mt-5">
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
                <CustomButton2
                  buttonText="Add to Cart"
                  faIcon={<FaCartPlus size="1.5rem" />}
                  buttonClass="!mt-0"
                  handleSubmit={handleAddToCart}
                />
              </div>
              {/* <div className="flex flex-col gap-4 mt-5">
                <div className="flex gap-3">
                  <button
                    className="px-3 py-2 rounded shadow bg-aliceBlue-2 mt-4"
                    onClick={() => setQuantity(+quantity - 1)}
                  >
                    <FaMinus className="text-coal" size="1.1rem" />
                  </button>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice !text-center"
                    className="h-12 rounded-md !bg-transparent"
                    classes="!rounded-md !mb-4"
                    requiredStar
                    labelToShow="Select Quantity"
                    maxLength={2}
                    regex={regex.numeric}
                    inputClassName="!bg-transparent !text-center"
                    name="quantity"
                    showIconOutline
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="px-3 py-2 rounded shadow bg-aliceBlue-2 mt-4"
                    onClick={() => setQuantity(+quantity + 1)}
                  >
                    <FaPlus className="text-coal" size="1.1rem" />
                  </button>
                </div>
                <CustomButton2
                  buttonText="Add to Cart"
                  faIcon={<FaCartPlus size="1.5rem" />}
                  buttonClass="!mt-0 !w-64"
                  handleSubmit={handleAddToCart}
                />
              </div> */}
              <FadedLineBreak />
              <div className="flex gap-4 place-items-center w-100 md:!w-96">
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
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
                <CustomButton2
                  buttonText="Check"
                  handleSubmit={handlePincodeCheck}
                />
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
                        Free standard shipping on orders over ₹500
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
                  <div
                    className="p-4"
                    dangerouslySetInnerHTML={{ __html: selectedContent }}
                  />
                )}
              </div>
            )}
            {!isLargeScreen && (
              <div className="mb-5">
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
          {/* More Product */}
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <BuyMoreProducts />
          </motion.div>
          <FadedLineBreak />
          {/* Product Reviews */}
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ProductReviews reviewContent={reviewContent} />
          </motion.div>
          <FadedLineBreak />
        </div>
      </motion.div>
    </div>
  );
}

export default ProductsDetails;
