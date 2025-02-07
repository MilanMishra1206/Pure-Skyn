import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { TbMoodSadSquint } from "react-icons/tb";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import {
  emptyCart,
  removeFromCart,
  updateQuantity,
} from "../../../redux/Actions";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import Resources from "../../../config/Resources";
import { FaCartPlus } from "react-icons/fa";
import HandleQuantity from "../HandleQuantity";
import FadedLineBreak from "../../../shared/CustomHrTag";
import BuyMoreProducts from "../../Products/ProductsDetails/BuyMoreProducts";
import ConfirmationModal from "../ConfirmationModal";
import CustomButton2 from "../../../shared/CustomButton2";

function CartDrawer({ openCart, handleOpenCart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productId, setProductId] = useState("");
  const [removeItem, setRemoveItem] = useState(false);
  const [removeMessage, setRemoveMessage] = useState("");
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [originalCartValue, setOriginCartValue] = useState(0);

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

  const availableCoupons = [
    {
      id: 1,
      couponCode: "PS125",
      description: "₹125 OFF above ₹1500!",
      priceOff: 30,
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

  const handleCartSubmit = () => {
    navigate("/cart");
    handleOpenCart();
  };

  const handleItemIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleItemDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"></div>
      <div
        className={`fixed !overflow-y-auto max-h-screen top-0 font-poppins right-0 h-full w-full md:!w-3/5 lg:!w-1/2 xl:!w-1/3 bg-[#FAFAFA] z-40 transform ${
          openCart ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sticky top-0 flex justify-center items-center p-4 shadow bg-white z-50">
          <span className="flex-1 text-coal font-bold text-xl text-center">
            My Cart
          </span>
          <button className="text-2xl text-coal" onClick={handleOpenCart}>
            <IoIosCloseCircle size={"2rem"} />
          </button>
        </div>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            {cartItems?.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-2 md:!px-5 pb-5">
                <img src={Resources.images.Common.emptyCart} className="h-52" />
                <p className="text-xl font-bold text-center text-coal">
                  Your cart is empty. Let's add some items! ⚡
                </p>
                <button
                  className="flex gap-2 items-center justify-center rounded-3xl font-medium px-4 active:!bg-white active:!text-skyn bg-skyn text-white hover:!opacity-80 active:!border-none transition duration-500 py-2 mt-4"
                  onClick={() => {
                    navigate("/products");
                    handleOpenCart();
                  }}
                >
                  <FaCartPlus size="1.2rem" />
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="mt-4">
                  <div className="bg-slate-50 text-coal shadow text-center py-3">
                    <p className="font-bold text-xl underline">
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
                          className="bg-body-secondary p-1 border-b-2"
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
                    <small className="mt-4 font-medium">
                      <strong>Note: </strong>Add them during the checkout
                    </small>
                  </div>
                  <div className="p-3 text-lg bg-emerald-900 text-white shadow text-center font-bold">
                    {freeDeliveryStatus()}
                  </div>
                  <div>
                    <div className="flow-root self-start">
                      <ul>
                        {cartItems?.map((item) => (
                          <div key={item.id}>
                            <li className="flex gap-4 px-3 py-3 mt-4 border-b">
                              <div className="shrink-0 flex justify-center">
                                <img
                                  className="h-20 max-w-full rounded-lg object-cover cursor-pointer"
                                  src={item.imgSrc}
                                  alt="product-icon"
                                  onClick={() => {
                                    navigate(`/products/${item.productName}`);
                                    handleOpenCart();
                                  }}
                                />
                              </div>
                              <div className="relative flex flex-1 flex-col justify-between font-poppins">
                                <div className="flex justify-content-between items-center">
                                  <Link
                                    className="no-underline font-semibold text-coal cursor-pointer hover:!text-skyn"
                                    to={`/products/${item.productName}`}
                                  >
                                    {item.productName}
                                  </Link>
                                  <p className="text-coal font-bold">
                                    ₹{getTotalForItem(item)}
                                  </p>
                                </div>
                                <div className="flex flex-row items-center gap-4 md:!mt-0 md:!justify-normal">
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
                            </li>
                          </div>
                        ))}
                      </ul>
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
              <BuyMoreProducts showCarousel={false} handleOpenCart={handleOpenCart}/>
            </motion.div>
          </div>
          {removeItem && (
            <ConfirmationModal
              isEmptyCart={isEmptyCart}
              removeMessage={removeMessage}
              handleCancel={handleCancel}
              confirmRemove={confirmRemove}
            />
          )}
        </motion.div>
        {cartItems?.length > 0 && (
          <div className="sticky flex flex-col bottom-0 shadow-lg p-4 bg-white z-50 mt-6 justify-content-center">
            <div className="flex items-center justify-between">
              <p className="text-coal font-bold text-xl">Subtotal ({cartItems?.length})</p>
              <p className="text-xl font-semibold text-coal">
                ₹{totalCartValue.toFixed(2)}
              </p>
            </div>
            <CustomButton2
              buttonText="Proceed to Checkout"
              handleSubmit={handleCartSubmit}
              faIcon={
                <MdOutlineShoppingCartCheckout
                  size="1.5rem"
                  className="ml-2 group-hover:scale-110 group-hover:!ml-5"
                />
              }
              buttonClass="!text-lg"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CartDrawer;
