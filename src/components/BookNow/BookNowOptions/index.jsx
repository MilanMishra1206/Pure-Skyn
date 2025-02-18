import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useMutation } from "react-query";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
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
import { requestBooking } from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { addToServicesCart } from "../../../redux/Actions";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function BookNowOptions({ heading, setTreatmentPackage, setCurrentStep }) {
  const dispatch = useDispatch();
  const serviceCartItems = useSelector((state) => state.servicesCart.services);

  const [packageDetails, setPackageDetails] = useState([]);
  const [isMultiplePackage, setIsMultiplePackage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [treatmentPackageDetails, setTreatmentPackageDetails] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState(null);
  const [serviceId, setServiceId] = useState("");
  const [subServiceId, setSubServiceId] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [featureName, setFeatureName] = useState("");
  const [selectedPackageImg, setSelectedPackageImg] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const showSnackbar = useAppSnackbar();

  const handlePackageCardClick = (featureName, imgSrc) => {
    serviceCartItems.map((service) => {
      if (service.featureName === featureName) {
        setSelectedPackages({
          packageName: service.packageName,
          price: service.packagePrice,
        });
      }
    });
    setTreatmentPackage(selectedPackages);
    setOpenModal(true);
    getTreatmentPackage(featureName);
    setSelectedPackageImg(imgSrc);
    serviceCartItems.map((service) => {
      if (service.subServiceId === subServiceId) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    });
  };

  const closeModal = () => {
    setOpenModal(false);
    setTreatmentPackageDetails([]);
  };

  const handlePackageSelect = (
    packageName,
    price,
    serviceId,
    subServiceId,
    featureName
  ) => {
    setSelectedPackages({ packageName, price });
    setPackageName(packageName);
    setPackagePrice(price);
    setFeatureName(featureName);
    setServiceId(serviceId);
    setSubServiceId(subServiceId);
    serviceCartItems.map((service) => {
      if (service.subServiceId === subServiceId) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    });
  };

  const getTreatmentPackage = (featureName) => {
    if (heading.includes("Women")) {
      setTreatmentPackageDetails(allPackageDetails.LHRWomen[featureName]);
    } else if (heading.includes("Men")) {
      setTreatmentPackageDetails(allPackageDetails.LHRMen[featureName]);
    } else if (heading.includes("Derma")) {
      setTreatmentPackageDetails(allPackageDetails.dermafrac[featureName]);
    } else if (heading.includes("Skin")) {
      setTreatmentPackageDetails(allPackageDetails.skinTightening[featureName]);
    } else if (heading.includes("Oxygeneo")) {
      setTreatmentPackageDetails(allPackageDetails.oxygeneo[featureName]);
    } else if (heading.includes("Oxy Hydra")) {
      setTreatmentPackageDetails(allPackageDetails.oxyhydraFacial[featureName]);
    }
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

  const viewCartClick = () => {
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

  const addToCart = () => {
    const treatmentName = sessionStorage.getItem("treatmentName");
    const newPackage = {
      treatmentName,
      packageName,
      packagePrice,
      serviceId,
      subServiceId,
      featureName,
      selectedPackageImg,
    };
    dispatch(addToServicesCart(newPackage));
    setOpenModal(false);
  };

  useEffect(() => {
    const packageMapping = {
      "Laser Hair Removal Women": {
        package: laserHairWomenPackage,
        isMultiple: true,
      },
      "Laser Hair Removal Men": {
        package: laserHairMenPackage,
        isMultiple: true,
      },
      "Oxy Hydra Facial": { package: oxyHydraPackage, isMultiple: false },
      "RF Skin Tightening": {
        package: skinTighteningPackage,
        isMultiple: false,
      },
      "Dermafrac Infusion Facial": {
        package: dermafraqPackage,
        isMultiple: false,
      },
      Oxygeneo: { package: oxygeneoPackage, isMultiple: false },
    };

    const selectedPackage = packageMapping[heading];
    if (selectedPackage) {
      const updatedPackages = selectedPackage.package.map((pkg) => ({
        ...pkg,
        isDisabled: serviceCartItems.some(
          (cartPkg) => cartPkg.featureName === pkg.featureName
        ),
      }));

      setPackageDetails(updatedPackages);
      setIsMultiplePackage(selectedPackage.isMultiple);
    }
  }, [heading, serviceCartItems]);

  return (
    <div className="py-5">
      <Suspense fallback={<div />}>
        <CustomLoader open={isLoading} />
      </Suspense>
      <p className="font-bold text-4xl text-coffee text-center">{heading}</p>
      <div className="flex justify-end">
        <button
          className="p-3 rounded bg-coffee text-white font-bold hover:!opacity-80 hover:!shadow-lg"
          onClick={viewCartClick}
        >
          View Cart
        </button>
      </div>
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
                  ${selectedPackages?.packageName === item.name ? "!border-black" : "!border-black] hover:!shadow-lg"}`}
                  onClick={() =>
                    handlePackageSelect(
                      item.name,
                      item.price,
                      item.serviceId,
                      item.subServiceId,
                      item.featureName
                    )
                  }
                  key={index}
                >
                  <span className={`font-extrabold font-xl text-coffee`}>
                    {item.name}
                  </span>
                  <span className={`font-bold font-xl text-Green`}>
                    ₹{item.price}
                  </span>
                </div>
              ))}
              <button
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold mt-5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80"
                disabled={!isButtonDisabled}
                onClick={addToCart}
              >
                Add To Cart
              </button>
              <button
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80"
                onClick={viewCartClick}
              >
                View Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookNowOptions;
