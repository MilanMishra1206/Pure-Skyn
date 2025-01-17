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
import { FaSquareCheck } from "react-icons/fa6";
import ProductDescriptionImage from "./ProductDescriptionImage";

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
    productName: "Dermatica Aze Proactive Lotion",
    imgSrc: Resources.images.Products.img1,
    productDescription:
      "At Pureskyn, we believe that the foundation of real beauty is flawless, clear skin. We are thrilled to present Dermatica Aze Proactive Lotion, a revolutionary skincare solution created to effectively and gently treat acne, acne scars, and acne marks. With Dermatica Aze, your secret to bright, glowing skin, bid adieu to the aggravation of acne and the scarring that follows.",
    ratings: 4,
    smallDescription: [
      { id: 1, content: "Treats Acne" },
      { id: 2, content: "Reduces Acne Scars" },
    ],
    productPrice: "1080",
    category: "Machine",
    quantity: 1,
  };

  const productContent = [
    {
      id: 1,
      name: "Description",
      content: `At Pureskyn, we believe that the foundation of real beauty is flawless, clear skin. We are thrilled to present Dermatica Aze Proactive Lotion, a revolutionary skincare solution created to effectively and gently treat acne, acne scars, and acne marks. With Dermatica Aze, your secret to bright, glowing skin, bid adieu to the aggravation of acne and the scarring that follows.`,
    },
    {
      id: 2,
      name: "Key Benefits",
      content: `<div class="grid gap-2">
      <div>
        <span class="font-bold">Fades Acne Marks: </span>
        <span>Acne marks can linger long after blemishes have healed. Our lotion works to fade these marks, allowing your skin to regain its even, flawless complexion.</span>
      </div>
      <div>
        <span class="font-bold">Reduces Acne Scars: </span>
        <span>Acne scars can be a source of insecurity, but Dermatica Aze is here to reduce their appearance. It helps diminish the visibility of scars, promoting a smoother, more refined skin texture.</span>
      </div>
      <div>
        <span class="font-bold">Multi-Action Formulation: </span>
        <span>We understand that acne and its aftermath require a multi-faceted approach. Dermatica Aze Proactive Lotion is formulated to take care of acne, acne marks, and acne scars in one gentle formulation.</span>
      </div>
      <div>
        <span class="font-bold">Gentle and Effective: </span>
        <span>Harsh treatments can worsen acne and scars. Our lotion is designed to be gentle on your skin while delivering effective results. It treats your skin with care, ensuring a soothing experience.</span>
      </div>
      <div>
        <span class="font-bold">Promotes Healthy Skin: </span>
        <span>Healthy skin is the foundation of beauty. Dermatica Aze not only addresses current concerns but also promotes the overall health and well-being of your skin.</span>
      </div>
    </div>`,
    },
    {
      id: 3,
      name: "How to Use",
      content: `<u class="space-y-4 list-disc no-underline">
                  <li>Take a sufficient of product in your palm</li>
                  <li>Apply on cleansed face and nect at night</li>
                  <li>Use regularly or as directed by your physician</li>
                </u>`,
    },
    {
      id: 4,
      name: "Ingredients",
      content: `<u class="space-y-2 list-disc no-underline">
                  <li>DM Water</li>
                  <li>Porassium Azeloyl Diglycinate</li>
                  <li>DMDM Hydantoin</li>
                  <li>Lodopropynyl Butylcarbamate</li>
                </u>`,
    },
    {
      id: 5,
      name: "Additional Information",
      content: `<div class="space-y-2">
                  <p>Make Dermatica Aze Proactive Lotion a part of your daily skincare routine, and watch as acne, marks, and scars become a thing of the past. Say goodbye to the insecurity of acne-related skin issues and hello to the confidence of clear, radiant beauty.</p> 
                  <p>Invest in your skin, invest in Dermatica Aze Proactive Lotion today!</p> 
                  <p>Rediscover the joy of clear, blemish-free skin with Dermatica Aze Proactive Lotion from Pureskyn. Embrace the confidence that comes with a clearer, more radiant complexion, and step out into the world with pride!</p>
                </div>`,
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
            <ProductDescriptionImage productName={productName} />
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
                    <span className="text-3xl text-left text-skyn font-bold">
                      ₹{products.productPrice}
                    </span>
                    <span className="text-xs">{"(incl. of all taxes.)"}</span>
                  </div>
                  {products.strikePrice && (
                    <button className="shadow-md rounded-xl p-2 text-sm font-semibold bg-emerald-700 text-white w-24">
                      {calculateSaveAmount(
                        products.strikePrice,
                        products.productPrice
                      )}
                    </button>
                  )}
                </div>
                <div className="flex flex-col mt-4">
                  {products.smallDescription.map((desc) => (
                    <div key={desc.id} className="flex items-center gap-2">
                      <FaSquareCheck fill="green" size="1.2rem" />
                      <p className="text-xl !font-poppins">{desc.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:w-52 gap-4 place-items-center mt-5">
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
                          dangerouslySetInnerHTML={{ __html: para }}
                        />
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
