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
import { useDispatch } from "react-redux";
import { MdVerified } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

import { ProductReviews } from "./ProductReviews";
import BuyMoreProducts from "./BuyMoreProducts";
import Resources from "../../../config/Resources";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { regex, INRCurrency } from "../../../helpers/Regex";
import CustomTextField from "../../../shared/CustomTextField";
import CustomDropdown from "../../../shared/CustomDropdown";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { addToCart } from "../../../redux/Actions";
import ProductDescriptionImage from "./ProductDescriptionImage";
import OffersCarousel from "./OffersCarousel";
import DisplaySection from "../DisplaySection";
import { reviewContent } from "../../../helpers/LaserServices";
import { getShippingDate, productList } from "../../../helpers/Products";

function ProductsDetails() {
  const { productName } = useParams();
  const showSnackbar = useAppSnackbar();
  const dispatch = useDispatch();
  const isSmallestDevice = useMediaQuery("(max-width: 330px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1438px)");
  const [quantity, setQuantity] = useState("1");
  const [pinCode, setPinCode] = useState("");
  const [productDetail, setProductDetail] = useState();
  const [noOfRatings, setNoOfRatings] = useState(0);
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    let foundProduct;
    let foundCategory = "";

    for (const category in productList) {
      const product = productList[category]?.[productName];
      if (product) {
        foundProduct = product;
        foundCategory = category;
        break;
      }
    }

    setProductDetail(foundProduct);
    setProductCategory(foundCategory);
  }, [productName]);

  useEffect(() => {
    setNoOfRatings(reviewContent.length);
  }, [reviewContent]);

  const breadcrumbs = [
    <Link key="1" to="/" className="text-skyn font-poppins hover:opacity-80">
      Home
    </Link>,
    <Link
      key="2"
      to="/products"
      className="text-skyn !font-poppins hover:!opacity-80"
    >
      Products
    </Link>,
    <Typography key="3" className="!text-coal !font-poppins">
      {productName}
    </Typography>,
  ];

  const [selectedItem, setSelectedItem] = useState(
    productDetail?.productsAdditionalDetails[0]?.id
  ); // update this to null and then setSelectedItem after the API call
  const selectedContent = productDetail?.productsAdditionalDetails?.find(
    (item) => item?.id === selectedItem
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
    dispatch(addToCart(productDetail));
    showSnackbar("Product Added to Cart", "success");
  };

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isSmallestDevice ? "p-2" : "p-3"} md:!p-4 lg:!p-5`}
      >
        <div className={`mb-4 py-12 ${isMobile ? "" : "px-5"} font-poppins`}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" className="mb-4">
            {breadcrumbs}
          </Breadcrumbs>
          <div className="grid lg:grid-cols-2 gap-4 bg-[#FAFAFA] p-0 md:!p-4">
            <ProductDescriptionImage
              productDetail={productDetail}
              defaultImage={productDetail?.imgSrc}
            />
            <div className={`${isMobile ? "mt-5" : "ml-5"}`}>
              <div>
                <p className="text-3xl font-bold">{productName}</p>
                <div className="flex gap-2">
                  {productDetail?.smallDescription.map((desc) => (
                    <div key={desc.id} className="flex items-center gap-2">
                      <FaCircleCheck fill="green" size="1rem" />
                      <p className="!font-poppins text-sm text-green-700">
                        {desc.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-2 md:items-center mt-4">
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
                  <span className="flex items-center gap-2 text-coal font-medium">
                    <MdVerified size="1rem" fill="#EE6503" /> Based on{" "}
                    {noOfRatings} reviews
                  </span>
                </div>
                <hr className="!my-6" />
                <div className="flex md:!items-start lg:!items-center flex-col md:!flex-row gap-2">
                  <div className="flex flex-col">
                    {productDetail?.strikePrice && (
                      <span className="text-left text-sm text-slate-400 line-through font-bold mr-4">
                        {INRCurrency(productDetail?.strikePrice)}
                      </span>
                    )}
                    <span className="text-3xl text-left text-skyn font-bold">
                      {INRCurrency(productDetail?.productPrice)}
                    </span>
                    <span className="text-xs">{"(incl. of all taxes.)"}</span>
                  </div>
                  {productDetail?.strikePrice && (
                    <button className="shadow-md rounded-xl p-2 text-sm font-semibold bg-emerald-700 text-white w-24">
                      {calculateSaveAmount(
                        productDetail?.strikePrice,
                        productDetail?.productPrice
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-100 md:!w-96 gap-4 place-items-center mt-4">
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
                  className="!flex !items-center !justify-center gap-2 w-full !bg-skyn !text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all !shadow-[3px_3px_0px_black] hover:!shadow-none hover:!translate-x-[3px] hover:!translate-y-[3px] cursor-pointer"
                  onClick={() => handleAddToCart()}
                >
                  <FaCartPlus size="1.5rem" /> Add to Cart
                </button>
              </div>
              <div className="flex gap-4 place-items-center w-100 md:!w-96 my-6">
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
                <button
                  className="!flex !items-center mt-4 !justify-center gap-2 w-full !bg-skyn !text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all !shadow-[3px_3px_0px_black] hover:!shadow-none hover:!translate-x-[3px] hover:!translate-y-[3px] cursor-pointer"
                  onClick={handlePincodeCheck}
                >
                  Check
                </button>
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
              <hr className="!my-6" />
              <div className="flex flex-col md:!flex-row md:justify-between font-poppins my-6">
                <div className="flex items-center gap-2">
                  <BsFillCartCheckFill fill="#064e3b" size="1.5rem" />
                  <span className="text-lg text-emerald-900 font-medium">
                    Recently in 12 carts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShippingFast fill="#EE6503" size="1.5rem" />
                  <span className="text-lg text-coal font-medium">
                    Shipping by {getShippingDate()}
                  </span>
                </div>
              </div>
              <div className="flex flex-col font-bold mb-5">
                <div className="flex justify-center items-center gap-2">
                  <BiSolidOffer size="1.5rem" fill="#EE6503" />
                  <span className="text-2xl font-semibold">
                    Special Offers & Coupons
                  </span>
                </div>
                <OffersCarousel />
              </div>
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
                  {productDetail?.productsAdditionalDetails.map((item) => (
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
                {productDetail?.productsAdditionalDetails.map((item) => (
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
          <hr />
          <DisplaySection />
          <hr className="" />
          {/* More Product */}
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <BuyMoreProducts productCategory={productCategory}/>
          </motion.div>
          <hr />
          {/* Product Reviews */}
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ProductReviews reviewContent={reviewContent} />
          </motion.div>
          <hr />
        </div>
      </motion.div>
    </div>
  );
}

export default ProductsDetails;
