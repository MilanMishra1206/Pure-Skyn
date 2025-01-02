import { useMediaQuery } from "@mui/material";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";

function Products() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}
      >
          <CustomHeader
            heading={"Products"}
            showBackButton={true}
            navigateTo={"/"}
          />
      </motion.div>
    </div>
  );
}

export default Products;
