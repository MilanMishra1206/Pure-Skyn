import { FaCircleCheck } from "react-icons/fa6";

function BookNowPackageCards({
  packageDetails,
  isMultiplePackage,
  handlePackageCardClick,
}) {
  return (
    <div
      className={`grid ${isMultiplePackage ? "md:grid-cols-2 xl:!grid-cols-3" : "place-items-center"} gap-4 mt-5 place-items-center`}
    >
      {packageDetails.map((item) => (
        <div
          key={item.id}
          className={`relative overflow-hidden rounded-md shadow-lg cursor-pointer hover:!border hover:!border-black duration-500 w-96 place-items-center ${item.isDisabled ? "!border !border-emerald-900" : ""}`}
          onClick={() => handlePackageCardClick(item.featureName, item.imgSrc)}
        >
          {item.isDisabled && (
            <div className="absolute top-2 right-2">
              <FaCircleCheck fill="green" size="1.5rem" />
            </div>
          )}
          <img
            src={item.imgSrc}
            className="h-52 object-cover"
            alt={item.packageName}
          />
          <div className="w-full p-2 backdrop-blur-sm text-center">
            <span className="font-poppins text-coffee font-bold text-lg text-center">
              {item.packageName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookNowPackageCards;
