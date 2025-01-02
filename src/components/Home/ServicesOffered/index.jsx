import Resources from "../../../config/Resources";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import BookNowForm from "../../BookNow/BookNowForm";
import CustomHeader from "../../../shared/CustomHeader";
import CustomCards from "../../../shared/CustomCards";

function ServicesOffered() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLaptop = useMediaQuery("(min-width: 1336px)");

  const services = [
    {
      id: 1,
      title: "Laser Hair Removal",
      image: `${Resources.images.Services.LaserHairRemoval.laserHairRemovalCard}`,
      linkTo: "services/laser-hair-removal",
    },
    {
      id: 2,
      title: "Oxy Hydra Facial",
      image: `${Resources.images.Services.OxyHydra.oxyHydraCard}`,
      linkTo: "services/skin/medi-facial/oxy-hydra-facial",
    },
    {
      id: 3,
      title: "RF Skin Tightening",
      image: `${Resources.images.Services.SkinTightening.skinTighteningCard}`,
      linkTo: "services/skin/medi-facial/skin-tightening",
    },
    {
      id: 4,
      title: "Dermafrac Infusion Facial",
      image: `${Resources.images.Services.Dermafrac.dermafracCard}`,
      linkTo: "services/skin/medi-facial/dermafrac-infusion-facial",
    },
    {
      id: 5,
      title: "Oxygeneo",
      image: `${Resources.images.Services.OxyGeneo.img1}`,
      linkTo: "services/skin/medi-facial/oxygeneo",
    },
  ];

  return (
    <div>
      <div className="px-4 mb-5">
        <div className={`${isMobile ? "" : "px-4"}`}>
          <CustomHeader
            heading={"Services Offered"}
            subHeading={"Start Your Skin Journey Today"}
          />
        </div>
      </div>
      <div>
        {isLaptop && (
          <div
            className="h-screen bg-cover bg-no-repeat bg-center relative p-5 bg-[#F7D9CB]"
            style={{
              backgroundImage: `url(${Resources.images.Common.bookNow})`,
            }}
          >
            <div className="flex items-center absolute inset-0 bg-opacity-40 justify-center mr-5">
              <div className="flex flex-col w-50">
                <BookNowForm />
              </div>
            </div>
          </div>
        )}
        {!isLaptop && (
          <div
            className="h-screen bg-cover bg-no-repeat bg-center relative p-5 bg-[#F7D9CB]"
            style={{
              backgroundImage: `url(${Resources.images.Common.BookNowTabletView})`,
            }}
          >
            <div className="flex items-center absolute inset-0 bg-opacity-40 justify-center backdrop-blur">
              <div className="flex flex-col">
                <BookNowForm />
              </div>
            </div>
          </div>
        )}
        <div className="px-5 mt-5">
          <div className="flex justify-end px-5 mt-5">
            <Link
              to="/services"
              className="text-skyn hover:opacity-80 font-bold text-xl font-poppins"
            >
              {"Explore More >"}
            </Link>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4 place-items-center ${isMobile ? "p-2" : "mt-5"}`}
        >
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

export default ServicesOffered;
