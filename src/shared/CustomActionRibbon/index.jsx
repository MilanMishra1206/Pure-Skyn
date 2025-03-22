import React from "react";
import { FaPhone, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomActionRibbon = ({ isFooterVisible }) => {
  return (
    <div
      className={`w-full font-poppins bg-coal text-white flex justify-around items-center py-2 shadow-lg sm:hidden transition-transform duration-300
        ${isFooterVisible ? "fixed translate-y-full" : "translate-y-0 fixed bottom-0 left-0"}`}
    >
      <Link
        className="flex flex-col items-center cursor-pointer hover:bg-gray-600 rounded-md px-4 py-2"
        to="tel:+1234567890"
      >
        <FaPhone className="text-2xl" />
        <span className="text-sm mt-1">Call</span>
      </Link>

      <Link
        className="flex flex-col items-center cursor-pointer hover:bg-gray-600 rounded-md px-4 py-2"
        to="/book-now"
      >
        <FaCalendarAlt className="text-2xl" />
        <span className="text-sm mt-1">Book</span>
      </Link>

      <Link
        className="flex flex-col items-center cursor-pointer hover:bg-gray-600 rounded-md px-4 py-2"
        to="/products"
      >
        <FaShoppingCart className="text-2xl" />
        <span className="text-sm mt-1">Shop</span>
      </Link>
    </div>
  );
};

export default CustomActionRibbon;
