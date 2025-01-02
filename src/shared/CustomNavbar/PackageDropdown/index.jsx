import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

let servicesItem;

const PackageDropdown = ({ packagesItem, header }) => {
  servicesItem = packagesItem;
  return (
    <div className="flex">
      <FlyoutLink href="#" FlyoutContent={PackageContent}>
        <div className="flex items-center">{header}</div>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-white no-underline">
        <div className="flex items-center">
          {children}
          {!open && (
            <MdOutlineKeyboardArrowDown className="text-white text-2xl cursor-pointer active:outline-none" />
          )}
          {open && (
            <MdOutlineKeyboardArrowUp className="text-white text-2xl cursor-pointer active:outline-none" />
          )}
        </div>
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-skyn transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const handleKeyPress = (e, action) => {
  if (e.key === "Enter" || e.key === " ") {
    action();
  }
};

const PackageContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      {servicesItem.map(({ id, label, action }) => (
        <div
          key={id}
          className="flex items-center pt-2 cursor-pointer hover:bg-slate-300 p-2 rounded !font-medium"
          role="menuitem"
          tabIndex={0}
          onClick={action}
          onKeyDown={(e) => handleKeyPress(e, action)}
        >
          <span className="text-base text-kashmirBlue">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default PackageDropdown;
