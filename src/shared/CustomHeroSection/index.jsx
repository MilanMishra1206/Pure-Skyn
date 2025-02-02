import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Resources from "../../config/Resources";
import CustomButton2 from "../CustomButton2";

const CustomHeroSection = () => {
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const handleDownloadApp = () => {
    console.log("Download app button clicked");
  };

  return (
    <section className="w-full bg-[#FAFAFA] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto mt-5 shadow-lg">
      <div>
        <span className="flex justify-center mb-4 text-xs md:text-sm font-medium">
          <img
            src={Resources.images.NavBar.logo2}
            className={`${isTablet ? "w-4/5" : "w-3/5"}`}
          />
        </span>
        <div className="text-base md:text-lg text-cello my-4 md:my-6 px-3 lg:!mx-5 font-poppins text-center">
          <p>Get the best deals from our latest promotions.</p>
          <p>
            <strong className="text-coffee">
              Pure Skyn is more than just Laser Hair Removal and Medifacial.
            </strong>{" "}
            We offer laser skin treatments with the use of the most advanced
            technology like Candela GentleMax Pro and Morpheus8, as well as hair
            regrowth solutions, especially for men. Treatments are suitable for
            any skin type.
          </p>
          <p className="text-coffee font-bold">
            Book and save up to 50% when you purchase your treatment packages.
          </p>
        </div>
        <div className="flex justify-center">
          <CustomButton2
            buttonText="Download App"
            buttonClass="md:!w-1/2"
            handleSubmit={handleDownloadApp}
          />
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
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
    src: `${Resources.images.Services.LaserHairRemoval.laserHairSelectedPart}`,
  },
  {
    id: 2,
    src: `${Resources.images.Services.LaserHairRemoval.Men.imageTwo}`,
  },
  {
    id: 3,
    src: `${Resources.images.Services.LaserHairRemoval.Women.headerWomen}`,
  },
  {
    id: 4,
    src: `${Resources.images.Services.OxyGeneo.header}`,
  },
  {
    id: 5,
    src: `${Resources.images.Services.OxyGeneo.img2}`,
  },
  {
    id: 6,
    src: `${Resources.images.Services.OxyGeneo.oxygeneoCard}`,
  },
  {
    id: 7,
    src: `${Resources.images.Services.OxyHydra.header}`,
  },
  {
    id: 8,
    src: `${Resources.images.Services.OxyHydra.img3}`,
  },
  {
    id: 9,
    src: `${Resources.images.Services.OxyHydra.header2}`,
  },
  {
    id: 10,
    src: `${Resources.images.Services.LaserHairRemoval.Men.headerMen}`,
  },
  {
    id: 11,
    src: `${Resources.images.Services.Dermafrac.imageFour}`,
  },
  {
    id: 12,
    src: `${Resources.images.Services.Dermafrac.dermafracCard}`,
  },
  {
    id: 13,
    src: `${Resources.images.Services.SkinTightening.header}`,
  },
  {
    id: 14,
    src: `${Resources.images.Services.SkinTightening.img2}`,
  },
  {
    id: 15,
    src: `${Resources.images.Services.SkinTightening.img3}`,
  },
  {
    id: 16,
    src: `${Resources.images.Services.SkinTightening.img5}`,
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
    <div className="grid grid-cols-2 xl:!grid-cols-4 grid-rows-4 h-[650px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default CustomHeroSection;
