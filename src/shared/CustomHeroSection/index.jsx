import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import Resources from "../../config/Resources";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { getQueryValidation } from "../../helpers/Login";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { addNewQuery } from "../../services/Query";
import QueryForm from "./QueryForm";
import ServiceCards from "../../components/Home/ServiceCards";

const CustomLoader = lazy(() => import("../CustomLoader"));

const CustomHeroSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1023px)");
  const showSnackbar = useAppSnackbar();

  const { mutate: askQuery, isLoading } = useMutation(addNewQuery, {
    onSuccess: (res) => {
      if (res?.status === "SUCCESS") {
        showSnackbar(`Thank You! We will give you a call soon!`, "success");
        queryFormik.resetForm();
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError: (err) => {
      showSnackbar(err?.message, "error");
    },
  });

  const queryFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      name: "",
      phone: "",
      serviceId: "",
    },
    validationSchema: getQueryValidation,
    onSubmit: (value) => {
      const { name, phone, serviceId } = value;
      askQuery({ name, phone, serviceId });
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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomLoader open={isLoading}></CustomLoader>
      </Suspense>
      {isLargeScreen && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-5 mt-2 font-poppins relative w-full flex items-center bg-[#FFF8EA]"
        >
          <>
            <img
              src={Resources.images.Login.loginBg}
              className="absolute top-12 left-0 h-[42rem]"
              alt="Banner"
            />
            <div className="relative w-full h-full flex flex-row justify-end items-center z-10 mt-2">
              <div className="flex w-full md:w-1/2 py-5 px-4 flex-col h-[44.5rem] rounded-lg">
                <div className="space-y-10 text-center lg:mb-5">
                  <div className="text-4xl xl:text-6xl font-medium text-coal">
                    <p>It's All About </p>
                    <p className="mt-3">The Results!</p>
                  </div>
                  <p className="mt-3 text-coffee text-lg font-poppins font-bold">
                    Hair free smooth and glowing skin with no hassle!
                  </p>
                  <p className="text-xl text-coal">
                    Laser Hair Removal, Oxy Hydra Facial, RF Skin Tightening,
                    Dermafrac Infusion, Oxygeneo & More.
                  </p>
                </div>
                <div className="text-base md:text-lg text-cello my-4 md:my-6 px-3 lg:!mx-5 font-poppins text-center">
                  <p>
                    <strong className="text-coffee">
                      Get the Best Deals on Our Latest Promotions!
                    </strong>{" "}
                    Book now and save up to 50% on Laser Hair Removal,
                    Medifacials, advanced skin treatments, and hair regrowth
                    solutions for all skin types.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={Resources.images.Common.googlePlayButton}
                    alt="Google Play Button"
                    className="w-48 rounded-2 cursor-pointer"
                    onClick={handleDownloadApp}
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-0">
                  <Link
                    to="/book-now"
                    className="w-full no-underline text-center rounded-3xl border-1 border-[#B18260] shadow px-5 py-3 duration-500 text-coffee hover:bg-coffee hover:text-white hover:shadow-lg"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/services"
                    className="w-full no-underline text-center rounded-3xl border-1 border-[#B18260] shadow px-5 py-3 duration-500 text-coffee hover:bg-coffee hover:text-white hover:shadow-lg"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </>
        </motion.div>
      )}
      {!isLargeScreen && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 font-poppins"
        >
          <div className="grid md:grid-cols-2 w-full h-full py-3">
            <img
              src={Resources.images.Common.homeHeaderMobile}
              className="w-full h-full object-cover"
              alt="Banner"
            />
            <div className="flex flex-col justify-between py-4 px-2 bg-[#FFF7E9]">
              <div className="space-y-10 text-center lg:mb-5">
                <div className="text-4xl font-medium text-coal">
                  <p>It's All About </p>
                  <p className="mt-3">The Results!</p>
                </div>
              </div>
              <p className="mt-3 text-coffee font-poppins font-bold text-lg">
                Hair free smooth and glowing skin with no hassle!
              </p>
              <div className=" text-cello my-4 md:my-6 px-3 lg:!mx-5 font-poppins text-center">
                <p>
                  <strong className="text-coffee">
                    Get the Best Deals on Our Latest Promotions!
                  </strong>{" "}
                  Book now and save up to 50% on Laser Hair Removal,
                  Medifacials, advanced skin treatments, and hair regrowth
                  solutions for all skin types.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={Resources.images.Common.googlePlayButton}
                  alt="Google Play Button"
                  className="w-36 rounded-2 cursor-pointer"
                  onClick={handleDownloadApp}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-0">
                <Link
                  to="/book-now"
                  className="w-full no-underline text-center rounded-3xl border-1 border-[#B18260] shadow p-3 text-coffee hover:bg-coffee hover:text-white hover:shadow-lg"
                >
                  Book Now
                </Link>
                <Link
                  to="/services"
                  className="w-full no-underline text-center rounded-3xl border-1 border-[#B18260] shadow p-3 text-coffee hover:bg-coffee hover:text-white hover:shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <motion.div
        variants={FadeInWrapper("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-5 font-poppins"
      >
        <section className="grid md:grid-cols-2 gap-8 items-center w-full px-2 md:!px-5 mx-auto font-poppins h-full">
          <QueryForm
            queryFormik={queryFormik}
            handleQueryFormSubmit={handleQueryFormSubmit}
          />
          <div className="hidden md:!flex flex-col order-1 lg:!order-2">
            <ShuffleGrid />
          </div>
          <div className="block md:!hidden order-1 lg:!order-2">
            <ServiceCards />
          </div>
        </section>
      </motion.div>
    </>
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
    src: `${Resources.images.Login.signupBg}`,
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
    id: 9,
    src: `${Resources.images.Services.SkinTightening.img5}`,
  },
  {
    id: 10,
    src: `${Resources.images.Services.LaserHairRemoval.laserHairSelectedPart}`,
  },
  {
    id: 11,
    src: `${Resources.images.Services.LaserHairRemoval.Women.LHRWomenHomeCard}`,
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
      className="w-full h-full object-cover"
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
    <div className="grid grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 grid-rows-3 place-items-center h-[550px] xl:!h-[550px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default CustomHeroSection;
