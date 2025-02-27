import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Resources from "../../config/Resources";
import CustomButton2 from "../CustomButton2";
import { Link } from "react-router-dom";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { useFormik } from "formik";
import { getQueryValidation } from "../../helpers/Login";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

const CustomTextField = lazy(() => import("../CustomTextField"));

const CustomHeroSection = () => {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isLargeScreen = useMediaQuery("(min-width: 1023px)");
  const showSnackbar = useAppSnackbar();

  const queryFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      query: "",
    },
    validationSchema: getQueryValidation,
    onSubmit: (value) => {
      showSnackbar("We will give you a call!", "success");
      queryFormik.resetForm();
    },
  });

  const handleQueryFormSubmit = () => {
    if (!queryFormik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    } else {
      queryFormik.handleSubmit();
    }
  };

  const handleDownloadApp = () => {
    console.log("Download app button clicked");
  };

  return (
    <motion.div
      variants={FadeInWrapper("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-12 font-poppins"
    >
      {isLargeScreen && (
        <div className="grid grid-cols-2 font-poppins h-96">
          <div className="flex flex-col justify-between p-5 bg-[#FFF7E9]">
            <div className="space-y-10 text-center lg:mb-5">
              <div className="text-4xl xl:!text-6xl font-medium text-center text-coal">
                <p>It's All About </p> <p className="mt-3">The Results!</p>
              </div>
              <p className="text-center text-coal text-xl">
                Laser Hair Removal, Oxy Hydra Facial, RF Skin Tightening,
                Dermafrac Infusion, Oxygenero & More.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:!grid-cols-2 space-y-4 lg:!space-x-4 lg:!space-y-0 mt-4 lg:!mt-0">
              <Link
                to="/book-now"
                className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow md:p-2 lg:!p-3 duration-500 text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow md:p-2 lg:!p-3 duration-500 text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
              >
                Explore More
              </Link>
            </div>
          </div>
          <img
            src={Resources.images.Common.homeHeader}
            className="h-100 w-full"
            alt="Banner"
          />
        </div>
      )}
      {!isLargeScreen && (
        <div className="grid md:!grid-cols-2 font-poppins">
          <img
            src={Resources.images.Common.homeHeaderMobile}
            className="h-100 w-full"
            alt="Banner"
          />
          <div className="flex flex-col justify-between p-5 bg-[#FFF7E9]">
            <div className="space-y-10 text-center lg:mb-5">
              <div className="text-4xl xl:!text-6xl font-medium text-center text-coal">
                <p>It's All About </p> <p className="mt-3">The Results!</p>
              </div>
              <p className="text-center text-coal text-xl">
                Laser Hair Removal, Oxy Hydra Facial, RF Skin Tightening,
                Dermafrac Infusion, Oxygenero & More.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:!grid-cols-2 space-y-4 lg:!space-x-4 lg:!space-y-0 mt-4 lg:!mt-0">
              <Link
                to="/book-now"
                className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow p-2 lg:!p-3  text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow p-2 lg:!p-3  text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      )}
      <section className="w-full bg-[#FFFFFF] px-2 md:!px-5 py-12 grid md:grid-cols-2 gap-8 mx-auto shadow-lg font-poppins h-full">
        <div className="flex flex-col items-center order-2 lg:!order-1">
          <div className="flex lg:w-4/5 xl:!w-3/5 flex-col shadow rounded-lg px-4 py-6 border h-full">
            <div className="flex justify-center p-4">
              <img
                src={Resources.images.Common.newLogoWhite}
                alt="branding"
                className="w-4/5 md:!w-3/5"
              />
            </div>
            <span className="text-lg font-poppins text-center mb-4">
              Have Query? We will give a call!{" "}
            </span>
            <hr />
            <form className="w-full mt-4 h-full">
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-cello"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter Your Name"
                  requiredStar
                  labelToShow="Name"
                  name="fullName"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={queryFormik.values?.fullName}
                  onChange={queryFormik.handleChange}
                  handleBlur={queryFormik.handleBlur}
                  error={queryFormik.errors.fullName}
                  touched={queryFormik.touched.fullName}
                />
              </Suspense>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-cello"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter Your Number"
                  requiredStar
                  labelToShow="Phone Number"
                  name="phoneNumber"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={queryFormik.values?.phoneNumber}
                  onChange={queryFormik.handleChange}
                  handleBlur={queryFormik.handleBlur}
                  error={queryFormik.errors.phoneNumber}
                  touched={queryFormik.touched.phoneNumber}
                />
              </Suspense>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-cello"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter Your Email"
                  requiredStar
                  labelToShow="Email Id"
                  name="email"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={queryFormik.values?.email}
                  onChange={queryFormik.handleChange}
                  handleBlur={queryFormik.handleBlur}
                  error={queryFormik.errors.email}
                  touched={queryFormik.touched.email}
                />
              </Suspense>
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-medium text-cello"
                >
                  Query<small className="text-bitterSweet">*</small>
                </label>
                <textarea
                  id="query"
                  name="query"
                  className={`mt-2 w-full rounded-lg border-gray-200 text-coal outline-none align-top shadow-xs sm:text-sm border p-2 ${
                    queryFormik.touched.query && queryFormik.errors.query
                      ? "!border-red-600"
                      : ""
                  }`}
                  rows="4"
                  placeholder="Ask Your Query"
                  value={queryFormik.values.query}
                  onChange={queryFormik.handleChange}
                  onBlur={queryFormik.handleBlur}
                />
                {queryFormik.touched.query && queryFormik.errors.query && (
                  <div className="text-bitterSweet text-xs">
                    {queryFormik.errors.query}
                  </div>
                )}
              </div>
            </form>
            <div className="flex justify-center">
              <CustomButton2
                buttonText="Submit"
                handleSubmit={handleQueryFormSubmit}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col order-1 lg:!order-2">
          <ShuffleGrid />
          <div className="text-base md:text-lg text-cello my-4 md:my-6 px-3 lg:!mx-5 font-poppins text-center">
            <p>
              <strong className="text-coffee">
                Get the Best Deals on Our Latest Promotions!
              </strong>{" "}
              Book now and save up to 50% on Laser Hair Removal, Medifacials,
              advanced skin treatments, and hair regrowth solutions for all skin
              types.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Resources.images.Common.googlePlayButton}
              alt="Google Play Button"
              className="w-48 rounded-2 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: `${Resources.images.Services.LaserHairRemoval.Men.imageTwo}`,
  },
  {
    id: 2,
    src: `${Resources.images.Services.LaserHairRemoval.Women.headerWomen}`,
  },
  {
    id: 3,
    src: `${Resources.images.Services.OxyGeneo.header}`,
  },
  {
    id: 4,
    src: `${Resources.images.Services.OxyGeneo.oxygeneoCard}`,
  },
  {
    id: 5,
    src: `${Resources.images.Services.OxyHydra.img3}`,
  },
  {
    id: 6,
    src: `${Resources.images.Services.Dermafrac.imageFour}`,
  },
  {
    id: 7,
    src: `${Resources.images.Services.Dermafrac.dermafracCard}`,
  },
  {
    id: 8,
    src: `${Resources.images.Services.SkinTightening.img3}`,
  },
  {
    id: 9,
    src: `${Resources.images.Services.SkinTightening.img5}`,
  },
  {
    id: 10,
    src: `${Resources.images.Services.LaserHairRemoval.laserHairSelectedPart}`,
  },
  {
    id: 11,
    src: `${Resources.images.Services.OxyHydra.img2}`,
  },
  {
    id: 12,
    src: `${Resources.images.Services.SkinTightening.img2}`,
  },
  {
    id: 13,
    src: `${Resources.images.Services.OxyGeneo.img2}`,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 grid-rows-3 h-[450px] xl:!h-[550px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default CustomHeroSection;
