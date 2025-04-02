import { useMediaQuery } from "@mui/material";
import { MdAccessTime } from "react-icons/md";
import { lazy, Suspense, useState } from "react";
import { INRCurrency } from "../../../../helpers/Regex";
import { packagesDescriptionList } from "../../../../helpers/LaserServices";

const CustomPackageTermsAndConditions = lazy(
  () => import("../../../../shared/CustomPackageTermsAndConditions")
);

function BookNowPackageCards({
  packageDetails,
  isMultiplePackage,
  handlePackageCardClick,
}) {
  const [isOpenTandCModal, setIsOpenTandCModal] = useState(false);

  const isSmallestScreen = useMediaQuery("(max-width: 450px)");

  return (
    <div
      className={`grid ${isMultiplePackage ? "lg:!grid-cols-2" : "place-items-center"} gap-4 mt-5 place-items-center font-poppins`}
    >
      {packageDetails.map((item) => (
        <div
          key={item.id}
          className={`overflow-hidden ${!isMultiplePackage ? "w-full md:!w-3/5" : "w-full md:!w-4/5 lg:!w-full xl:!w-4/5"} p-3 rounded-2xl cursor-pointer ${item.isSelected ? "border-1 border-[#6b4f3f]" : "border border-[#d6c5b4]"} shadow-md hover:shadow-lg transition-all duration-300`}
        >
          <div
            className={`flex ${isSmallestScreen ? "" : "justify-between gap-2"}`}
          >
            <div
              className={`flex flex-col ${isSmallestScreen ? "w-full" : "w-48 md:!w-4/6 lg:!w-3/5"}`}
            >
              <p
                className={`font-poppins text-coffee font-bold text-xl ${isSmallestScreen ? "text-center" : "text-left"} `}
              >
                {item.packageName}
              </p>
              <div
                className={`${!isSmallestScreen ? "hidden" : "flex items-center justify-center mt-4"}`}
              >
                <img
                  src={item.imgSrc}
                  className="h-28 w-28 object-cover"
                  alt={item.packageName}
                />
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
                {packagesDescriptionList[item.featureName].map(
                  (descriptionList) => (
                    <div className="flex gap-2" key={descriptionList.id}>
                      <span className="!font-poppins text-green-700 text-sm">
                        ✅ {descriptionList.desc}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <img
                src={item.imgSrc}
                className={`h-28 w-28 object-cover ${isSmallestScreen ? "hidden" : "block"}`}
                alt={item.packageName}
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
          <button
            className="text-xs text-bitterSweet mt-4 bg-white outline-none border-none hover:underline"
            onClick={() => setIsOpenTandCModal(true)}
          >
            Terms & Conditions Applied{" "}
            <span className="text-bitterSweet">*</span>
          </button>
        </div>
      ))}
      {/* Terms and Conditions Modal */}
      <Suspense>
        <CustomPackageTermsAndConditions
          isOpenTandCModal={isOpenTandCModal}
          setIsOpenTandCModal={setIsOpenTandCModal}
          buttonText="I Agree"
        />
      </Suspense>
    </div>
  );
}

export default BookNowPackageCards;
