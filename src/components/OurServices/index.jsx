import Resources from "../../config/Resources";
import { useMediaQuery } from "@mui/material";
import CustomCards from "../../shared/CustomCards";
import CustomHeader from "../../shared/CustomHeader";

function LaserServices() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const services = [
    {
      id: 1,
      title: "Laser Hair Removal",
      image: `${Resources.images.Services.LaserHairRemoval.laserHairRemovalCard}`,
      linkTo: "laser-hair-removal",
    },
    {
      id: 2,
      title: "Oxy Hydra Facial",
      image: `${Resources.images.Services.OxyHydra.oxyHydraCard}`,
      linkTo: "skin/medi-facial/oxy-hydra-facial",
    },
    {
      id: 3,
      title: "RF Skin Tightening",
      image: `${Resources.images.Services.SkinTightening.skinTighteningCard}`,
      linkTo: "skin/medi-facial/skin-tightening",
    },
    {
      id: 4,
      title: "Dermafrac Infusion Facial",
      image: `${Resources.images.Services.Dermafrac.dermafracCard}`,
      linkTo: "skin/medi-facial/dermafrac-infusion-facial",
    },
    {
      id: 5,
      title: "Oxygeneo",
      image: `${Resources.images.Services.OxyGeneo.oxygeneoCard}`,
      linkTo: "skin/medi-facial/oxygeneo",
    },
  ];

  return (
    <div className="mt-5">
      <div className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}>
        <CustomHeader
          heading={"Services"}
          subHeading={"What We Offer"}
          showBackButton={true}
          navigateTo={"/"}
        />

        <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4 px-4">
          {services.map((item) => (
            <CustomCards
              title={item.title}
              imgSrc={item.image}
              linkTo={item.linkTo}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaserServices;
