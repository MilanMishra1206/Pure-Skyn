import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import {
  dermafraqPackage,
  laserHairMenPackage,
  laserHairWomenPackage,
  oxygeneoPackage,
  oxyHydraPackage,
  skinTighteningPackage,
} from "../../../helpers/LaserServices";
import BookNowPackageCards from "./BookNowPackageCards";
import { useEffect, useState } from "react";

function BookNowOptions({ heading, setTreatmentPackage, setCurrentStep }) {
  const [packageDetails, setPackageDetails] = useState([]);
  const [isMultiplePackage, setIsMultiplePackage] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (heading === "Laser Hair Removal Women") {
      setPackageDetails(laserHairWomenPackage);
      setIsMultiplePackage(true);
    } else if (heading === "Laser Hair Removal Men") {
      setPackageDetails(laserHairMenPackage);
      setIsMultiplePackage(true);
    } else if (heading === "Oxy Hydra Facial") {
      setPackageDetails(oxyHydraPackage);
      setIsMultiplePackage(false);
    } else if (heading === "RF Skin Tightening") {
      setPackageDetails(skinTighteningPackage);
      setIsMultiplePackage(false);
    } else if (heading === "Dermafrac Infustion Facial") {
      setPackageDetails(dermafraqPackage);
      setIsMultiplePackage(false);
    } else if (heading === "Oxygeneo") {
      setPackageDetails(oxygeneoPackage);
      setIsMultiplePackage(false);
    }
  }, [heading]);

  const handleBookNowClick = (treatmentPackage, openModal) => {
    setTreatmentPackage(treatmentPackage);
    setOpenModal(openModal);
    setCurrentStep(2);
  };

  return (
    <div className="py-5">
      <p className="font-bold text-4xl text-coffee text-center">{heading}</p>
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <BookNowPackageCards
          packageDetails={packageDetails}
          isMultiplePackage={isMultiplePackage}
          handleBookNowClick={handleBookNowClick}
        />
      </motion.div>
      {openModal && <div>
        </div>}
    </div>
  );
}

export default BookNowOptions;
