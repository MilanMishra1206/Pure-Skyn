import { useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import CustomButton2 from "../../shared/CustomButton2";
import FadedLineBreak from "../../shared/CustomHrTag";
import BuyMoreProducts from "../Products/ProductsDetails/BuyMoreProducts";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/Actions";
import { useState } from "react";

function Cart() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargerScreen = useMediaQuery("(min-width: 1280px)");
  const [productId, setProductId] = useState("");
  const [removeItem, setRemoveItem] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price for each item
  const getTotalForItem = (item) => item.quantity * +item.productPrice;

  // Calculate the overall total
  const getTotalCartValue = () => {
    return cartItems.reduce((acc, item) => acc + getTotalForItem(item), 0);
  };

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

  const handleItemRemove = (productId) => {
    setRemoveItem(true);
    setProductId(productId);
  };

  const handleCancel = () => {
    setRemoveItem(false);
  };

  const confirmRemove = () => {
    setRemoveItem(false);
    dispatch(removeFromCart(productId));
  };

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
          <CustomHeader heading={"Shopping Cart"} showBackButton={true} />
        </div>
        <div className="mx-auto">
          <div className="flex flex-col lg:!flex-row gap-4 place-content-center px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root border shadow rounded md:p-4">
              <ul className="md:my-8 pl-4">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0">
                        <img
                          className="h-24 w-24 max-w-full rounded-lg object-cover"
                          src={item.imgSrc}
                          alt="product-icon"
                        />
                      </div>
                      <div className="relative flex flex-1 flex-col xl:!flex-row justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center lg:!place-items-start">
                          <div>
                            <p className="text-base font-semibold text-gray-900">
                              {item.productName}
                            </p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              {truncateText(item.productDescription, 13)}
                            </p>
                          </div>
                          {isMobile && !isLargerScreen && (
                            <div className="flex flex-row items-center gap-4">
                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                <button
                                  className="flex items-center justify-center rounded-l-md  px-4 transition hover:bg-coal hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black"
                                  disabled={item.quantity === 1}
                                  onClick={() => handleItemDecrease(item)}
                                >
                                  -
                                </button>
                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {item.quantity}
                                </div>
                                <button
                                  className="flex items-center justify-center rounded-r-md  px-4 transition hover:bg-coal hover:text-white"
                                  onClick={() => handleItemIncrease(item)}
                                >
                                  +
                                </button>
                              </div>
                              <MdDeleteForever
                                size="1.5rem"
                                className="text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-bitterSweet cursor-pointer disabled:cursor-not-allowed"
                                disabled={item.quantity === 1}
                                onClick={() => handleItemRemove(item.id)}
                              />
                            </div>
                          )}
                          <div className="flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              ₹{getTotalForItem(item)}
                            </p>
                            {isLargerScreen && (
                              <div className="flex flex-row items-center gap-4">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button
                                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-coal hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black"
                                    disabled={item.quantity === 1}
                                    onClick={() => handleItemDecrease(item)}
                                  >
                                    -
                                  </button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-coal hover:text-white"
                                    onClick={() => handleItemIncrease(item)}
                                  >
                                    +
                                  </button>
                                </div>
                                <MdDeleteForever
                                  size="1.5rem"
                                  className="text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-bitterSweet cursor-pointer"
                                  onClick={() => handleItemRemove(item.id)}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        {!isMobile && !isLargerScreen && (
                          <div className="flex flex-row items-center gap-4 mt-4 md:self-start">
                            <div className="mx-auto flex h-8 items-stretch text-gray-600">
                              <button
                                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-coal hover:text-white disabled:bg-gray-200 disabled:text-black"
                                onClick={() => handleItemDecrease(item)}
                              >
                                -
                              </button>
                              <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                {item.quantity}
                              </div>
                              <button
                                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-coal hover:text-white"
                                onClick={() => handleItemIncrease(item)}
                              >
                                +
                              </button>
                            </div>
                            <MdDeleteForever
                              size="1.5rem"
                              className="text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-bitterSweet cursor-pointer"
                              onClick={() => handleItemRemove(item.id)}
                            />
                          </div>
                        )}
                      </div>
                    </li>
                    <FadedLineBreak />
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex flex-col border shadow rounded p-4 lg:self-start font-poppins">
              <div className="text-2xl font-bold text-center">Cart Value</div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-kashmirBlue">Subtotal</p>
                  <p className="text-lg font-semibold text-cello">
                    ₹{getTotalCartValue().toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-kashmirBlue">Shipping</p>
                  <p className="text-lg font-semibold text-cello">₹8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-medium text-kashmirBlue">Total</p>
                <p className="text-xl font-semibold text-coal">
                  ₹{getTotalCartValue().toFixed(2) + 8}
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
        <FadedLineBreak />
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <BuyMoreProducts />
        </motion.div>
      </div>
      <AnimatePresence>
        {removeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center place-content-center overflow-scroll"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg w-full max-w-lg"
            >
              <h3 className="font-bold text-lg mb-4">
                Are you sure you want to the remove product from cart?
              </h3>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRemove}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Cart;
