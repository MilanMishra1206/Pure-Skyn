import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { customPackageDetails } from "../../../helpers/LaserServices";
import MotionWrapper from "../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import Resources from "../../../config/Resources";
import FadedLineBreak from "../../../shared/CustomHrTag";
import CustomPackagesCards from "./PackagesCards";
import { addToServicesCart } from "../../../redux/Actions";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";

function CustomPackages() {
  const dispatch = useDispatch();
  const showSnackbar = useAppSnackbar();
  const servicesCart = useSelector((state) => state.servicesCart.services);

  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
  }, []);

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="!text-cello !font-poppins !text-lg">
      Packages
    </Typography>,
  ];

  useEffect(() => {
    const updatedCartStatus = customPackageDetails.reduce((acc, item) => {
      acc[item.featureName] = servicesCart.some(
        (cartItem) => cartItem.featureName === item.featureName
      );
      return acc;
    }, {});

    setAddedToCart(updatedCartStatus);
  }, [servicesCart, customPackageDetails]);

  const handleAddToCart = (service) => {
    dispatch(addToServicesCart(service));
    showSnackbar("Service added to the cart", "success");
  };

  return (
    <MotionWrapper>
      <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-5 ${isMobile ? "px-1" : "px-5"}`}
        >
          <div>
            <Breadcrumbs
              separator=">"
              aria-label="breadcrumb"
              className="mb-4 px-1"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <div className="font-bold text-coffee text-4xl xl:!text-6xl mb-4">
              Packages
            </div>
            <div className="relative">
              {isMobile ? (
                <img
                  src={Resources.images.Services.mediFacialPackageMobile}
                  alt="Medi-facial-packages"
                />
              ) : (
                <img
                  src={Resources.images.Services.mediFacialPackage}
                  alt="Medi-facial-packages"
                />
              )}
            </div>
            <FadedLineBreak />
            <motion.div
              variants={FadeInWrapper("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4 font-poppins font-medium text-lg text-center text-coal"
            >
              <p>
                At Pure Skyn, we take pride in offering premium skincare
                services, including laser hair removal and Medi facials, to help
                you achieve radiant, flawless skin. Our highly trained
                professionals use the state-of-the-art Venus Velocity Diode
                laser to provide a safe, comfortable, and effective hair removal
                experience. Whether you're looking for the confidence of smooth,
                hair-free skin or the rejuvenating benefits of a hydrating and
                brightening Medi facial, we are here to help you look and feel
                your best.
              </p>
              <p>
                Don't miss the chance to experience the freedom and confidence
                of smooth, hair-free skin. Our limited-time laser hair removal
                packages provide the perfect opportunity to say goodbye to
                unwanted hair and embrace effortless beauty. If you're looking
                for a long-lasting glow, deep hydration, and a brighter
                complexion, treat yourself to a rejuvenating Medi facial for
                radiant, refreshed skin.
              </p>
            </motion.div>
          </div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center font-poppins mt-5 ${isMobile ? "p-1" : "p-4"}`}
          >
            <div className="font-extrabold text-2xl lg:!text-4xl">
              PRIME PACKAGES
            </div>
            <CustomPackagesCards
              packageDetails={customPackageDetails}
              handleAddToCart={handleAddToCart}
              addedToCart={addedToCart}
            />
          </motion.div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={Resources.images.Common.fiftyPercentAfterServiceBanner}
              alt="Offer"
              className="md:hidden"
            />
            <img
              src={Resources.images.Common.fiftyPercentAfterServiceBannerMobile}
              alt="50% After Service Banner"
              className="block md:!hidden"
            />
          </motion.div>
          <FadedLineBreak />
        </motion.div>
      </div>
    </MotionWrapper>
  );
}

export default CustomPackages;
