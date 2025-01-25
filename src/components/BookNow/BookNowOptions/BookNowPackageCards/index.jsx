function BookNowPackageCards({
  packageDetails,
  isMultiplePackage,
  handleBookNowClick,
}) {
  return (
    <div
      className={`grid ${isMultiplePackage ? "md:grid-cols-2 xl:!grid-cols-4" : "place-items-center"} gap-4 mt-5 place-items-center`}
    >
      {packageDetails.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded shadow-lg cursor-pointer hover:scale-105 duration-500"
          onClick={() => handleBookNowClick(item.label, true)}
        >
          <img
            src={item.imgSrc}
            className={`${isMultiplePackage ? "w-full h-full object-cover" : "h-96"}`}
            alt={item.packageName}
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-coffee bg-opacity-60 backdrop-blur-md text-center">
            <span className="font-poppins text-white font-bold text-xl text-center">
              {item.packageName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookNowPackageCards;
