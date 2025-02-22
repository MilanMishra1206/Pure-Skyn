import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
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
import { useMutation } from "react-query";
import { requestBooking } from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import dayjs from "dayjs";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function BookNowOptions({ heading, setTreatmentPackage, setCurrentStep }) {
  const [packageDetails, setPackageDetails] = useState([]);
  const [isMultiplePackage, setIsMultiplePackage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [treatmentPackageDetails, setTreatmentPackageDetails] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [serviceId, setServiceId] = useState("");
  const [subServiceId, setSubServiceId] = useState("");
  const showSnackbar = useAppSnackbar();

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
    } else if (heading === "Dermafrac Infusion Facial") {
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
      setTreatmentPackageDetails(allPackageDetails.oxygeneo[packageName]);
    } else if (heading.includes("Oxy Hydra")) {
      setTreatmentPackageDetails(allPackageDetails.oxyhydraFacial[packageName]);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setTreatmentPackageDetails([]);
    setSelectedPackage(null);
  };

  const handlePackageSelect = (packageName, price, serviceId, subServiceId) => {
    setSelectedPackage({ packageName, price });
    sessionStorage.setItem("packageName", packageName);
    sessionStorage.setItem("packagePrice", price);
    setServiceId(serviceId);
    setSubServiceId(subServiceId);
  };

  const { mutate: reqBooking, isLoading } = useMutation(requestBooking, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        setOpenModal(false);
        setTreatmentPackageDetails([]);
        setCurrentStep(2);
        showSnackbar(res.message, "success");
        sessionStorage.setItem(
          "availableTimeSlots",
          JSON.stringify(res?.data?.availableTimeSlots)
        );
      }
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const bookNowClick = () => {
    // reqBooking({
    //   serviceId,
    //   subServiceId,
    //   date: dayjs().format("YYYY-MM-DD"),
    // });
    //will revert the changes post API calls are fixed
    setOpenModal(false);
    setTreatmentPackageDetails([]);
    setCurrentStep(2);
  };

  return (
    <div className="py-5">
      <Suspense fallback={<div />}>
        <CustomLoader open={isLoading} />
      </Suspense>
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
                  onClick={() =>
                    handlePackageSelect(
                      item.name,
                      item.price,
                      item.serviceId,
                      item.subServiceId
                    )
                  }
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
              <button
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold mt-5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80"
                disabled={!selectedPackage}
                onClick={bookNowClick}
              >
                Book Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookNowOptions;
