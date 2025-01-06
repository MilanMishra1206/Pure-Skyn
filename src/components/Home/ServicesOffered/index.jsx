import Resources from "../../../config/Resources";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import BookNowForm from "../../BookNow/BookNowForm";
import CustomHeader from "../../../shared/CustomHeader";
import CustomCards from "../../../shared/CustomCards";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
      image: `${Resources.images.Services.OxyHydra.img4}`,
      linkTo: "services/skin/medi-facial/oxy-hydra-facial",
    },
    {
      id: 3,
      title: "RF Skin Tightening",
      image: `${Resources.images.Services.SkinTightening.img7}`,
      linkTo: "services/skin/medi-facial/skin-tightening",
    },
    {
      id: 4,
      title: "Dermafrac Infusion Facial",
      image: `${Resources.images.Services.Dermafrac.img6}`,
      linkTo: "services/skin/medi-facial/dermafrac-infusion-facial",
    },
    {
      id: 5,
      title: "Oxygeneo",
      image: `${Resources.images.Services.OxyGeneo.img6}`,
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
          <div className="flex justify-end px-5">
            <Link
              to="/services"
              className="flex items-center text-skyn font-bold text-xl font-poppins no-underline hover:opacity-80 hover:underline hover:!tracking-widest"
            >
              Explore More
              <MdKeyboardDoubleArrowRight className="text-2xl text-skyn" />
            </Link>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4 place-items-center ${isMobile ? "p-2" : "mt-5 px-4"}`}
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
