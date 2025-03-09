import { useMediaQuery } from "@mui/material";
import { MdAccessTime } from "react-icons/md";
import { INRCurrency } from "../../../../helpers/Regex";

function CustomPackagesCards({ packageDetails, handleAddToCart, addedToCart }) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className={`grid lg:!grid-cols-2 gap-4 mt-5 font-poppins w-4/5 lg:!w-full`}
    >
      {packageDetails.map((item, index) => (
        <div
          key={index}
          className={`relative overflow-hidden w-full p-4 rounded-2xl cursor-pointer 
          ${addedToCart[item.featureName] ? "border-1 border-[#6b4f3f]" : "border border-[#d6c5b4]"} 
           shadow-md hover:shadow-lg transition-all duration-300`}
        >
          <span className="absolute top-0 left-0 bg-coffee text-white text-sm font-bold px-2 py-1 rounded-tl-2xl rounded-br-2xl">
            Fixed Packages
          </span>

          <div
            className={`flex ${isMobile ? "" : "justify-between gap-5"} mt-4`}
          >
            <div
              className={`flex flex-col ${isMobile ? "w-full" : "w-48 md:!w-4/6 lg:!w-3/5"}`}
            >
              <p
                className={`font-poppins text-coffee font-bold text-xl ${isMobile ? "text-center" : "text-left"}`}
              >
                {item.packageName}
              </p>
              <div
                className={`${!isMobile ? "hidden" : "flex items-center justify-center mt-4"}`}
              >
                <img
                  src={item.selectedPackageImg}
                  className="h-52 w-52 object-cover rounded-xl"
                />
              </div>
              <div
                className={`flex mt-3 mb-4 ${isMobile ? "flex-col gap-2" : "flex-col xl:!flex-row xl:!items-center"}`}
              >
                <div className="flex gap-2 items-center">
                  <span className="text-coal font-medium mr-2">
                    {INRCurrency(item.packagePrice)}
                  </span>
                  <span className="mr-2 text-slate-400 line-through">
                    {INRCurrency(item.strikeOutPrice)}
                  </span>
                </div>
                <div
                  className={`${isMobile ? "hidden" : "md:hidden xl:!block h-5 w-px bg-gray-300"}`}
                ></div>
                <div className="flex items-center gap-1 text-coal">
                  <MdAccessTime
                    fill="grey"
                    className={`${isMobile ? "" : "xl:ml-2"}`}
                  />
                  <span>60 mins</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-justify">
                <div className="flex gap-2">
                  <span className="!font-poppins text-green-700 text-sm">
                    ✅ No more oohs & aahs while facial threading or waxing
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="!font-poppins text-green-700 text-sm">
                    ✅ Includes only upper lip, chin and lower chin areas
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <img
                src={item.selectedPackageImg}
                className={`h-48 w-48 object-cover hidden md:!block rounded-xl`}
              />
              <button
                className={`hidden md:!block no-underline mt-4 py-2 ${addedToCart[item.featureName] ? "px-2" : "px-3"} rounded bg-coffee text-white text-center font-bold hover:shadow-xl hover:opacity-80 disabled:opacity-80 w-full`}
                onClick={() => handleAddToCart(item)}
              >
                {addedToCart[item.featureName]
                  ? "Added To Cart"
                  : "Add To Cart"}
              </button>
            </div>
          </div>
          <button
            className={`block md:!hidden w-full no-underline mt-4 py-2 ${addedToCart[item.featureName] ? "px-2" : "px-3"} rounded bg-coffee text-white text-center font-bold hover:shadow-xl hover:opacity-80 disabled:opacity-80 w-full`}
            onClick={() => handleAddToCart(item)}
          >
            {addedToCart[item.featureName] ? "Added To Cart" : "Add To Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CustomPackagesCards;
