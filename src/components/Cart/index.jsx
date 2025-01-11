import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";
import { useState } from "react";

function Cart() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [cartItems, setCartItems] = useState([
    { id: 1, product: "Apple", quantity: 2, price: 1.5 },
    { id: 2, product: "Banana", quantity: 3, price: 1.0 },
    { id: 3, product: "Orange", quantity: 1, price: 2.0 },
  ]);

  // Calculate total price for each item
  const getTotalForItem = (item) => item.quantity * item.price;

  // Calculate the overall total
  const getTotalCartValue = () => {
    return cartItems.reduce((acc, item) => acc + getTotalForItem(item), 0);
  };

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}
    >
      <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}>
        <CustomHeader heading={"Shopping Cart"} showBackButton={true} />
        <div className="p-4 border shadow rounded">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Product</th>
                <th className="text-left py-2 px-4">Quantity</th>
                <th className="text-left py-2 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{item.product}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">
                    ₹{getTotalForItem(item).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 font-semibold text-lg t">
            <strong>Total: </strong>₹{getTotalCartValue().toFixed(2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
