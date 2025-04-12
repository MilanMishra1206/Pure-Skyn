import { lazy, Suspense, useEffect, useState } from "react";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

import BookNowDetails from "../BookNowDetails";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import Resources from "../../../config/Resources";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function ServicesCart() {
  const navigate = useNavigate();
  const servicesCart = useSelector((state) => state.servicesCart.services);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [sessionStorage.getItem("token")]);

  const navigateToBookNow = () => {
    navigate("/book-now");
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
  };

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Link
      key="2"
      to="/book-now"
      onClick={navigateToBookNow}
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Book Now
    </Link>,
    <Typography key="3" className="!text-cello !font-poppins !text-lg">
      Services Cart
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
      <Suspense>
        <CustomLoader open={false} />
      </Suspense>
      <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}>
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          className="mb-4 px-1"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={Resources.images.Common.fiftyPercentAfterServiceBanner}
            alt="50% After Service Banner"
            className="hidden md:!block"
            />
            <img
            src={Resources.images.Common.fiftyPercentAfterServiceBanner}
            alt="50% After Service Banner"
            className="block md:!hidden"
            />
        </motion.div>
        {servicesCart.length > 0 ? (
          <BookNowDetails isLoggedIn={isLoggedIn} />
        ) : (
          <div className="flex flex-col items-center justify-center px-2 md:!px-5 pb-5">
            <img
              src={Resources.images.Common.emptyCart}
              className="h-52 md:!h-96"
              alt="Empty Cart"
            />
            <p className="text-xl font-bold text-center text-coal">
              No Services Added. Let's add some! ⚡
            </p>
            <button
              className="flex gap-2 items-center justify-center rounded-3xl font-medium px-4 active:!bg-white active:!text-skyn bg-skyn text-white hover:!opacity-80 active:!border-none transition duration-500 py-2 mt-4"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              <FaCartPlus size="1.2rem" />
              Book Services
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ServicesCart;
