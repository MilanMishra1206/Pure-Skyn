import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import {
  allPackageDetails,
  dermafraqPackage,
  laserHairMenPackage,
  laserHairWomenPackage,
  oxygeneoPackage,
  oxyHydraPackage,
  skinTighteningPackage,
} from "../../../helpers/LaserServices";
import BookNowPackageCards from "./BookNowPackageCards";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function BookNowOptions({ heading, setTreatmentPackage, setCurrentStep }) {
  const [packageDetails, setPackageDetails] = useState([]);
  const [isMultiplePackage, setIsMultiplePackage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [treatmentPackageDetails, setTreatmentPackageDetails] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

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
      setIsMultiplePackage(true);
    } else if (heading === "Dermafrac Infustion Facial") {
      setPackageDetails(dermafraqPackage);
      setIsMultiplePackage(false);
    } else if (heading === "Oxygeneo") {
      setPackageDetails(oxygeneoPackage);
      setIsMultiplePackage(false);
    }
  }, [heading]);

  const handlePackageCardClick = (packageName, openModal) => {
    setTreatmentPackage(selectedPackage);
    setOpenModal(openModal);
    getTreatmentPackage(packageName);
  };

  const getTreatmentPackage = (packageName) => {
    if (heading.includes("Women")) {
      setTreatmentPackageDetails(allPackageDetails.LHRWomen[packageName]);
    } else if (heading.includes("Men")) {
      setTreatmentPackageDetails(allPackageDetails.LHRMen[packageName]);
    } else if (heading.includes("Derma")) {
      setTreatmentPackageDetails(allPackageDetails.dermafrac[packageName]);
    } else if (heading.includes("Skin")) {
      setTreatmentPackageDetails(allPackageDetails.skinTightening[packageName]);
    } else if (heading.includes("Oxygeneo")) {
      setTreatmentPackageDetails(allPackageDetails.oxyGeneo[packageName]);
    } else if (heading.includes("Oxy Hydra")) {
      setTreatmentPackageDetails(allPackageDetails.oxyHydra[packageName]);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setTreatmentPackageDetails([]);
    setSelectedPackage(null);
  };

  const handlePackageSelect = (packageName, price) => {
    setSelectedPackage({ packageName, price });
    sessionStorage.setItem("packageName", packageName);
    sessionStorage.setItem("packagePrice", price);
  };

  const bookNowClick = () => {
    setOpenModal(false);
    setTreatmentPackageDetails([]);
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
          handlePackageCardClick={handlePackageCardClick}
        />
      </motion.div>
      {openModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          <div
            className={`fixed top-0 font-poppins right-0 h-full w-4/5 md:!w-3/5 lg:!w-1/2 xl:!w-1/3 bg-[#FAFAFA] z-50 transform ${
              openModal ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 mr-5 right-4 text-2xl text-coffee"
              onClick={closeModal}
            >
              <IoIosCloseCircle size={"2rem"} />
            </button>
            <div className="flex flex-col gap-3 p-4 mt-5">
              <p className="text-2xl font-extrabold uppercase text-cello text-center">
                {heading} Package
              </p>
              <hr className="!p-0" />
              <p className="text-xl font-bold uppercase text-center">
                Select Your Package
              </p>
              {treatmentPackageDetails.map((item, index) => (
                <div
                  className={`flex flex-col lg:!flex-row md:justify-between gap-3 p-4 rounded cursor-pointer border-2
                  ${selectedPackage?.packageName === item.name ? "!border-black" : "!border-black] hover:!shadow-lg"}`}
                  onClick={() => handlePackageSelect(item.name, item.price)}
                  key={index}
                >
                  <span className={`font-extrabold font-xl text-coffee`}>
                    {item.name}
                  </span>
                  <span className={`font-bold font-xl text-Green`}>
                    ₹ {item.price}
                  </span>
                </div>
              ))}
              <Link
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold mt-5 hover:shadow-xl"
                onClick={() => bookNowClick()}
              >
                Book Now
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookNowOptions;
