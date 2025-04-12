import { lazy, Suspense, useEffect, useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { TbMoodSadSquint } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import CustomButton2 from "../../shared/CustomButton2";
import FadedLineBreak from "../../shared/CustomHrTag";
import BuyMoreProducts from "../Products/ProductsDetails/BuyMoreProducts";
import { emptyCart, removeFromCart, updateQuantity } from "../../redux/Actions";
import Resources from "../../config/Resources";
import { FaCircleCheck } from "react-icons/fa6";
import HandleQuantity from "./HandleQuantity";
import ConfirmationModal from "./ConfirmationModal";
import { INRCurrency } from "../../helpers/Regex";

const CustomTextField = lazy(() => import("../../shared/CustomTextField"));

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargerScreen = useMediaQuery("(min-width: 1280px)");
  const originalShippingCharges = 149;

  const [productId, setProductId] = useState("");
  const [removeItem, setRemoveItem] = useState(false);
  const [removeMessage, setRemoveMessage] = useState("");
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(149);
  const [couponCodeName, setCouponCodeName] = useState("");
  const [amountAfterCoupon, setAmountAfterCoupon] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [originalCartValue, setOriginCartValue] = useState(0);
  const [showMinValueMessage, setShowMinValueMessage] = useState("");

  const cartItems = useSelector((state) => state.cart.items);

  const getTotalForItem = (item) => item.quantity * +item.productPrice;

  useEffect(() => {
    return setTotalCartValue(
      cartItems.reduce((acc, item) => acc + getTotalForItem(item), 0)
    );
  }, [cartItems]);

  useEffect(() => {
    return setOriginCartValue(
      cartItems.reduce((acc, item) => acc + getTotalForItem(item), 0)
    );
  }, [cartItems]);

  // const getTotalCartValue = () => {
  //   return cartItems.reduce(
  //     (acc, item) => setTotalCartValue(acc + getTotalForItem(item)),
  //     0
  //   );
  // };

  const availableCoupons = [
    {
      id: 1,
      couponCode: "PS30",
      description: "30% off on the cart value",
      percentOff: 30,
      productsFree: 0,
    },
    {
      id: 2,
      couponCode: "PS40",
      description: "40% off on the cart value",
      percentOff: 40,
      productsFree: 0,
    },
  ];

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const handleCartSubmit = () => {
    console.log("Cart Values...");
  };

  const handleItemIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleItemDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleEmptyCart = () => {
    setRemoveItem(true);
    setRemoveMessage(
      "Are you sure you want to empty your cart? You will miss out great offers!"
    );
    setIsEmptyCart(true);
  };

  const handleItemRemove = (productId) => {
    setRemoveItem(true);
    setRemoveMessage("Are you sure you want to the remove product from cart?");
    setIsEmptyCart(false);
    setProductId(productId);
  };

  const handleCancel = () => {
    setRemoveItem(false);
    setRemoveMessage("");
    setIsEmptyCart(false);
  };

  const confirmRemove = () => {
    isEmptyCart ? dispatch(emptyCart()) : dispatch(removeFromCart(productId));
    setRemoveItem(false);
  };

  const freeDeliveryStatus = () => {
    if (originalCartValue >= 500) {
      return "CONGRATS! You get FREE SHIPPING 🎉🎉";
    } else {
      return "FREE SHIPPING on orders above ₹500";
    }
  };

  useEffect(() => {
    return originalCartValue >= 500
      ? setShippingCharges(0)
      : setShippingCharges(149);
  }, [originalCartValue]);

  const handleCouponApply = (couponCode) => {
    const couponDetails = availableCoupons.filter(
      (item) => item.couponCode === couponCode
    );
    if (couponCodeName.trim()) {
      if (couponDetails.length > 0 && originalCartValue >= 500) {
        const percentOff = couponDetails[0].percentOff;
        setTotalCartValue(totalCartValue - (totalCartValue * percentOff) / 100);
        setAmountAfterCoupon((totalCartValue * percentOff) / 100);
        setIsCouponApplied(true);
        setShowMinValueMessage("");
      } else {
        if (originalCartValue < 500) {
          setShowMinValueMessage("Minimum cart value should be more than ₹500");
        } else {
          setShowMinValueMessage("No such coupon available. Please try again!");
        }
        setIsCouponApplied(false);
      }
    } else {
      setIsCouponApplied(false);
      setShowMinValueMessage("");
    }
  };

  const handleRemoveCoupon = () => {
    setIsCouponApplied(false);
    setCouponCodeName("");
    setTotalCartValue(originalCartValue);
  };

  useEffect(() => {
    if (originalCartValue < 500) {
      handleCouponApply();
    }
  }, [originalCartValue]);

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography
      key="2"
      className="!text-coal !font-poppins !text-lg"
    >
      Cart
    </Typography>,
  ];

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}
    >
      <div className={`mt-5 ${isMobile ? "px-1" : "px-4"}`}>
        <div className="px-4">
          <Breadcrumbs
            separator=">"
            aria-label="breadcrumb"
            className="mb-4 px-1"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        {cartItems?.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-2 md:!px-5 pb-5">
            <img src={Resources.images.Common.emptyCart} />
            <p className="text-xl font-bold text-center">
              Your cart is empty. Let's add some items! ⚡
            </p>
            <CustomButton2
              buttonText="Continue Shopping"
              buttonClass="md:!w-3/5 lg:!w-1/3"
              handleSubmit={() => navigate("/products")}
              faIcon={<FaCartPlus size="1.5rem" />}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-end px-5">
              <Link
                to={"/products"}
                className="flex items-center text-skyn hover:opacity-80 font-bold no-underline hover:scale-110 text-xl md:!text-2xl"
              >
                Continue Shopping
                <MdKeyboardDoubleArrowRight className="text-3xl text-skyn" />
              </Link>
            </div>
            <div className="md:px-5 xl:!mx-5">
              <div className="flex flex-col lg:!flex-row gap-4 place-content-center px-2 py-6 md:!px-4 sm:py-10">
                <div className="flow-root border shadow rounded md:p-4 lg:!pl-1 xl:!p-4 self-start">
                  <ul className="md:my-8 p-0">
                    {cartItems?.map((item) => (
                      <div key={item.id}>
                        <li className="flex flex-col gap-2 space-y-3 py-2 text-left sm:flex-row sm:space-x-5 sm:space-y-0 px-3">
                          <div className="shrink-0 flex justify-center">
                            <img
                              className="h-[150px] max-w-full rounded-lg object-cover cursor-pointer"
                              src={item.imgSrc}
                              alt="product-icon"
                              onClick={() =>
                                navigate(`/products/${item.productName}`)
                              }
                            />
                          </div>
                          <div className="relative flex flex-1 flex-col xl:!flex-row justify-between">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                              <div>
                                <Link
                                  className={`${isMobile ? "!text-center" : "!text-left"} no-underline text-base font-semibold text-gray-900 cursor-pointer hover:!text-skyn`}
                                  to={`/products/${item.productName}`}
                                >
                                  {item.productName}
                                </Link>
                                <p
                                  className={`mx-0 mt-1 mb-0 text-sm text-gray-400`}
                                >
                                  {truncateText(item.productDescription, 13)}{" "}
                                  <Link
                                    to={`/products/${item.productName}`}
                                    className="text-sm text-skyn hover:opacity-80 no-underline"
                                  >
                                    {" "}
                                    Read More
                                  </Link>
                                </p>
                              </div>
                              {isMobile && !isLargerScreen && (
                                <div className="flex flex-row items-center gap-4">
                                  <div className="flex flex-row items-center gap-4">
                                    <HandleQuantity
                                      item={item}
                                      handleItemDecrease={() =>
                                        handleItemDecrease(item)
                                      }
                                      handleItemIncrease={() =>
                                        handleItemIncrease(item)
                                      }
                                      handleItemRemove={() =>
                                        handleItemRemove(item.id)
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                              <div className="flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end xl:!items-center">
                                <p className="shrink-0 text-base font-semibold text-gray-900 sm:order-2 md:ml-5 sm:text-right">
                                  ₹{getTotalForItem(item)}
                                </p>
                                {isLargerScreen && (
                                  <div className="flex flex-row items-center gap-4">
                                    <HandleQuantity
                                      item={item}
                                      handleItemDecrease={() =>
                                        handleItemDecrease(item)
                                      }
                                      handleItemIncrease={() =>
                                        handleItemIncrease(item)
                                      }
                                      handleItemRemove={() =>
                                        handleItemRemove(item.id)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            {!isMobile && !isLargerScreen && (
                              <div className="flex flex-row items-center gap-4 mt-4 md:self-start">
                                <div className="flex flex-row items-center gap-4">
                                  <HandleQuantity
                                    item={item}
                                    handleItemDecrease={() =>
                                      handleItemDecrease(item)
                                    }
                                    handleItemIncrease={() =>
                                      handleItemIncrease(item)
                                    }
                                    handleItemRemove={() =>
                                      handleItemRemove(item.id)
                                    }
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                        <FadedLineBreak />
                      </div>
                    ))}
                  </ul>
                  <div className="flex justify-center md:!justify-end lg:!justify-center xl:!justify-end px-4 lg:!px-0 mb-4 lg:ml-3">
                    <button
                      className="flex items-center justify-center gap-1 px-4 py-2 w-full md:!w-1/3 font-bold lg:!w-full xl:!w-1/3 rounded bg-gray-700 text-white hover:opacity-80"
                      onClick={() => handleEmptyCart(cartItems)}
                    >
                      <MdDeleteForever size="1.5rem" className="text-white" />
                      Empty Cart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border shadow rounded p-4 lg:self-start font-poppins">
                  <div className="text-2xl font-bold text-center">
                    Cart Value
                  </div>
                  <div className="rounded-2xl bg-slate-50 text-coal py-4 px-2 my-4 shadow">
                    <p className="font-bold text-xl text-center mb-4">
                      Available Coupons
                    </p>
                    {availableCoupons.length === 0 ? (
                      <div className="flex font-bold text-skyn p-2">
                        Sorry! No Coupons Available at the moment.
                        <TbMoodSadSquint size="2rem" />
                      </div>
                    ) : (
                      availableCoupons.map((coupon) => (
                        <div
                          key={coupon.id}
                          className="mb-3 bg-[#ecf2fb] p-1 rounded"
                        >
                          <StarRateRoundedIcon
                            style={{ color: "#fde047", fontSize: "1.6rem" }}
                          />
                          <span key={coupon.id}>{coupon.description} - </span>
                          <span className="text-skyn font-bold cursor-pointer hover:opacity-80">
                            {coupon.couponCode}{" "}
                          </span>
                          <StarRateRoundedIcon
                            style={{ color: "#fde047", fontSize: "1.6rem" }}
                          />
                        </div>
                      ))
                    )}
                    {availableCoupons.length > 1 && (
                      <small>
                        <span className="font-bold">Note: </span>You cannot club
                        2 coupons
                      </small>
                    )}
                  </div>
                  <div className="p-2 text-lg bg-emerald-800 text-white shadow rounded-xl text-center font-bold">
                    {freeDeliveryStatus()}
                  </div>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-kashmirBlue">Subtotal</p>
                      <p className="text-lg font-semibold text-cello">
                        {isCouponApplied
                          ? `${INRCurrency(originalCartValue)}`
                          : `${INRCurrency(totalCartValue)}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-kashmirBlue">Shipping</p>
                      {shippingCharges === 0 ? (
                        <div className="flex gap-1 items-center self-start">
                          <span className="text-left text-slate-400 line-through font-bold mr-4">
                            ₹{originalShippingCharges}
                          </span>
                          <span className="text-lg font-semibold text-cello">
                            ₹{shippingCharges.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-semibold text-cello">
                          ₹{shippingCharges.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {isCouponApplied ? (
                      <div className="p-2 rounded font-bold my-4">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                          <p className="flex text-skyn items-center gap-2">
                            {couponCodeName} Applied{" "}
                            <FaCircleCheck size="1rem" fill="green" />
                          </p>
                          <button
                            className="text-bitterSweet text-sm underline cursor-pointer hover:opacity-80"
                            onClick={handleRemoveCoupon}
                          >
                            Remove Coupon
                          </button>
                        </div>
                        <span className="font-bold bg-emerald-700 text-white p-2 rounded text-ce">
                          Congratulations! You got {INRCurrency(amountAfterCoupon)} OFF
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-content-end lg:!justify-between mt-4 my-4">
                        <Suspense fallback={<div />}>
                          <CustomTextField
                            textClassOverride="!text-kashmirBlue"
                            placeholderClasses="placeholder:!opacity-30 !text-licorice"
                            className="h-12 rounded-md !bg-transparent"
                            placeholder="Enter"
                            labelToShow="Have a coupon? Apply here"
                            name="name"
                            textFieldColorClass="shadow-insetLight"
                            inputClassName="!bg-transparent"
                            fieldWidth="!mb-4"
                            value={couponCodeName}
                            onChange={(e) => setCouponCodeName(e.target.value)}
                          />
                        </Suspense>
                        <button
                          onClick={() => handleCouponApply(couponCodeName)}
                          className="mt-1 px-4 py-2 h-12 text-sm bg-emerald-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 hover:opacity-80 mb-4"
                        >
                          Apply Coupon
                        </button>
                        {showMinValueMessage && (
                          <small className="text-sm text-bitterSweet">
                            {showMinValueMessage}
                          </small>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-medium text-kashmirBlue">Total</p>
                    <p className="text-xl font-semibold text-coal">
                      {INRCurrency((totalCartValue + shippingCharges))}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end mb-5">
                    <CustomButton2
                      buttonText="Checkout"
                      handleSubmit={handleCartSubmit}
                      faIcon={
                        <MdOutlineShoppingCartCheckout
                          size="1.5rem"
                          className="ml-2 group-hover:scale-110 group-hover:!ml-5"
                        />
                      }
                      buttonClass="!w-96 !justify-end !text-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <FadedLineBreak />
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <BuyMoreProducts productCategory=""/>
        </motion.div>
      </div>
      {removeItem && (
        <ConfirmationModal
          isEmptyCart={isEmptyCart}
          title={removeMessage}
          handleCancel={handleCancel}
          handlePrimaryButtonClick={confirmRemove}
          confirmButtonText={isEmptyCart ? "Empty" : "Remove"}
        />
      )}
    </motion.div>
  );
}

export default Cart;
