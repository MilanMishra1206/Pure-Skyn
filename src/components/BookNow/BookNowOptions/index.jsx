import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
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
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import {
  addToServicesCart,
  emptyServiceCart,
  removeFromServicesCart,
} from "../../../redux/Actions";
import { INRCurrency } from "../../../helpers/Regex";

function BookNowOptions({
  heading,
  setTreatmentPackage,
  setCurrentStep,
  servicesCart,
}) {
  const dispatch = useDispatch();
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
  const showSnackbar = useAppSnackbar();

  const handlePackageCardClick = (featureName, imgSrc) => {
    servicesCart.map((service) => {
      if (service.featureName === featureName) {
        setSelectedPackages({
          packageName: service.packageName,
          price: service.packagePrice,
        });
      }
    });
    setTreatmentPackage(selectedPackages);
    sessionStorage.setItem("selectedFeatureName", featureName);
    setOpenModal(true);
    getTreatmentPackage(featureName);
    setSelectedPackageImg(imgSrc);
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
  };

  const closeModal = () => {
    setSelectedPackages(null);
    setOpenModal(false);
    setTreatmentPackageDetails([]);
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

  const viewCartClick = () => {
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
    const selectedFeatureName = sessionStorage.getItem("selectedFeatureName");
    if (selectedFeatureName !== newPackage.featureName) {
      showSnackbar("Please select the service option", "error");
    } else {
      dispatch(addToServicesCart(newPackage));
      showSnackbar("Service added to the cart", "success");
      setOpenModal(false);
    }
  };

  const removeFromCart = () => {
    const selectedFeatureName = sessionStorage.getItem("selectedFeatureName");
    const serviceToRemove = servicesCart.find(
      (service) => service.featureName === selectedFeatureName
    );
    if (serviceToRemove) {
      showSnackbar("Service removed from the cart", "success");
      dispatch(removeFromServicesCart(serviceToRemove.subServiceId));
      setSelectedPackages(null);
      setOpenModal(false);
    } else {
      showSnackbar("Service not available in the cart", "error");
    }
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
        isSelected: servicesCart.some(
          (cartPkg) => cartPkg.featureName === pkg.featureName
        ),
      }));

      setPackageDetails(updatedPackages);
      setIsMultiplePackage(selectedPackage.isMultiple);
    }
  }, [heading, servicesCart]);

  const removeAllService = () => {
    showSnackbar("Removed all services from cart", "success");
    dispatch(emptyServiceCart());
  };

  return (
    <div className="py-5">
      <p className="font-bold text-4xl text-coffee text-center">{heading}</p>
      <div className="flex justify-center lg:!justify-end gap-2 mt-4">
        <button
          className="px-3 py-2 rounded bg-coffee text-white font-bold hover:!opacity-80 hover:!shadow-lg"
          onClick={viewCartClick}
        >
          View Cart
        </button>

        <button
          className="px-3 py-2 rounded bg-coffee text-white font-bold hover:!opacity-80 hover:!shadow-lg"
          onClick={removeAllService}
        >
          Empty Cart
        </button>
      </div>
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {heading.includes("Laser") && (
          <div className="text-sm text-bitterSweet text-center mt-4">
            <span>
              <strong className="!text-coal">Note: </strong>Please select either
              Full Body packages or Other Packages. You can't club Full Body
              Package with Other Packages.
            </span>
          </div>
        )}
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
            className={`fixed !overflow-y-auto max-h-screen top-0 font-poppins right-0 h-full w-80 md:!w-3/5 lg:!w-1/2 xl:!w-1/3 bg-[#FFFF] z-50 transform ${
              openModal ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 mr-5 right-4 text-2xl text-coffee"
              onClick={closeModal}
            >
              <IoIosCloseCircle size={"2rem"} />
            </button>
            <div className="flex flex-col gap-3 p-4 mt-4">
              <p className="text-lg md:!text-2xl font-extrabold uppercase text-cello text-center">
                {heading} Package
              </p>
              <hr className="!p-0" />
              <p className="text-lg md:!text-xl font-bold uppercase text-center">
                Select Your Package
              </p>
              {treatmentPackageDetails.map((item, index) => (
                <div
                  className={`flex flex-col lg:!flex-row md:justify-between gap-3 p-4 rounded cursor-pointer border-2
                  ${selectedPackages?.packageName === item.name ? "!border-black" : "hover:!shadow-lg"}`}
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
                    {INRCurrency(item.price)}
                  </span>
                </div>
              ))}
              <button
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold mt-5 hover:shadow-xl disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80"
                onClick={addToCart}
              >
                Add To Cart
              </button>
              <button
                className="no-underline p-3 rounded bg-coffee text-white text-center font-bold hover:shadow-xl disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80"
                onClick={viewCartClick}
              >
                View Cart
              </button>
              <button
                className="no-underline p-3 rounded bg-secondary text-white text-center font-bold hover:shadow-xl disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80"
                onClick={removeFromCart}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookNowOptions;
