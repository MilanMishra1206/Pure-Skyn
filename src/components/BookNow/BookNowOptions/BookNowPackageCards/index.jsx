import { useMediaQuery } from "@mui/material";
import { FaCircleCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { INRCurrency } from "../../../../helpers/Regex";

function BookNowPackageCards({
  packageDetails,
  isMultiplePackage,
  handlePackageCardClick,
}) {
  const isSmallestScreen = useMediaQuery("(max-width: 450px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className={`grid ${isMultiplePackage ? "lg:!grid-cols-2" : "place-items-center"} gap-4 mt-5 place-items-center font-poppins`}
    >
      {packageDetails.map((item) => (
        <div
          key={item.id}
          className={`overflow-hidden ${isMobile && "w-100"} lg:!w-100 p-3 rounded-md cursor-pointer ${item.isSelected ? "border-1 !border-[#064e3b]" : "border-1 border-black"} `}
        >
          <div
            className={`flex ${isSmallestScreen ? "" : "justify-between gap-2"}`}
          >
            <div
              className={`flex flex-col ${isSmallestScreen ? "w-full" : "w-48 md:!w-4/6 lg:!w-3/5"}`}
            >
              <p
                className={`font-poppins text-coffee font-bold text-2xl ${isSmallestScreen ? "text-center" : ""} `}
              >
                {item.packageName}
              </p>
              <div
                className={`${!isSmallestScreen ? "hidden" : "flex items-center justify-center"}`}
              >
                <img src={item.imgSrc} className="h-24 md:!h-48 object-cover" />
              </div>
              <div
                className={`flex mt-3 mb-4 ${isSmallestScreen ? "flex-col gap-2" : "flex-row items-center"}`}
              >
                <span className="text-coal mr-2">
                  {INRCurrency(item.singleSessionPricing)}
                </span>
                <div
                  className={`${isSmallestScreen ? "hidden" : "block h-5 w-px bg-gray-300"}`}
                ></div>
                <div className="flex items-center gap-2">
                  <MdAccessTime
                    fill="grey"
                    className={`${isSmallestScreen ? "" : "ml-2"}`}
                  />
                  <span>60 mins</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-justify">
                <div className="flex gap-2">
                  <FaCircleCheck fill="green" size="1.1rem" className="mt-1" />
                  <span className="!font-poppins text-green-700">
                    No more oohs & aahs while facial threading or waxing
                  </span>
                </div>
                <div className="flex gap-2">
                  <FaCircleCheck fill="green" size="1.1rem" className="mt-1" />
                  <span className="!font-poppins text-green-700">
                    Includes only upper lip, chin and lower chin areas
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <img
                src={item.imgSrc}
                className={`h-24 object-cover ${isSmallestScreen ? "hidden" : "block"}`}
              />
              <button
                className={`${isSmallestScreen ? "hidden" : "block"} no-underline mt-4 py-2 ${item.isSelected ? "px-2" : "px-3"} rounded bg-coffee text-white text-center font-bold hover:shadow-xl disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80`}
                onClick={() =>
                  handlePackageCardClick(item.featureName, item.imgSrc)
                }
              >
                {item.isSelected ? "Added To Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
          <button
            className={`${isSmallestScreen ? "block" : "hidden"} w-full no-underline mt-4 py-2 ${item.isSelected ? "px-2" : "px-3"} rounded bg-coffee text-white text-center font-bold hover:shadow-xl disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80`}
            onClick={() =>
              handlePackageCardClick(item.featureName, item.imgSrc)
            }
          >
            {item.isSelected ? "Added To Cart" : "Add To Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookNowPackageCards;
