import Resources from "../../../config/Resources";
import { whyUsContent } from "../../../helpers/AccordianContent";
import CustomAccordion from "../../../shared/CustomAccordion";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";
import FadedLineBreak from "../../../shared/CustomHrTag";

function WhyUs({ isMobile }) {
  return (
    <div className="px-4 mb-5">
      <div className={`${isMobile ? "mt-4" : "mt-5"}`}>
        <FadedLineBreak />
        <CustomHomeHeader
          heading={
            "Why Pure Skyn? - Give your clients the silky smooth skin they crave with Pure Skyn"
          }
        />
      </div>
      <div
        className={`grid grid-cols-1 lg:!grid-cols-2 gap-5 items-center ${isMobile ? "p-2" : "px-5"}`}
      >
        <div className="flex justify-center">
          <img
            src={Resources.images.Services.whyUs}
            alt="why us"
            className="w-4/5"
          />
        </div>
        <div className="mt-4">
          <CustomAccordion accordionData={whyUsContent} />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
