function BookNowPackageCards({
  packageDetails,
  isMultiplePackage,
  handlePackageCardClick,
}) {
  return (
    <div
      className={`grid ${isMultiplePackage ? "md:grid-cols-3 xl:!grid-cols-5" : "place-items-center"} gap-4 mt-5 place-items-center`}
    >
      {packageDetails.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded shadow-lg cursor-pointer hover:scale-105 duration-500"
          onClick={() => handlePackageCardClick(item.featureName, true)}
        >
          <img
            src={item.imgSrc}
            className="h-52 object-cover"
            alt={item.packageName}
          />
          <div className="w-full p-2 bg-coffee text-center">
            <span className="font-poppins text-white font-bold text-lg text-center">
              {item.packageName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookNowPackageCards;
