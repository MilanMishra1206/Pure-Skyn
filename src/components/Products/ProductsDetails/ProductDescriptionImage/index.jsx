import { useEffect, useState } from "react";
import Resources from "../../../../config/Resources";
import { FaShieldAlt, FaShippingFast } from "react-icons/fa";

function ProductDescriptionImage({ productDetail, defaultImage }) {
  const allImages = productDetail?.allImages;

  const [bigImage, setBigImage] = useState("");

  useEffect(() => {
    if (defaultImage) {
      setBigImage(defaultImage);
    }
  }, [defaultImage]);

  const handleImageClick = (clickedImage) => {
    setBigImage(clickedImage);
  };

  const handleBackClick = () => {
    const currentIndex = allImages?.indexOf(bigImage);
    const newIndex =
      currentIndex === 0 ? allImages?.length - 1 : currentIndex - 1;
    setBigImage(allImages?.[newIndex]);
  };

  const handleForwardClick = () => {
    const currentIndex = allImages?.indexOf(bigImage);
    const newIndex =
      currentIndex === allImages?.length - 1 ? 0 : currentIndex + 1;
    setBigImage(allImages?.[newIndex]);
  };

  const renderSmallImages = () =>
    allImages?.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={productDetail?.productName}
        className={`rounded-lg shadow-lg border w-26 cursor-pointer ${bigImage === image ? "border-2 !border-skyn" : ""}`}
        onClick={() => handleImageClick(image)}
      />
    ));

  return (
    <>
      <div className="hidden md:!flex gap-6 lg:!hidden xl:!flex">
        <div className="flex flex-col gap-4 justify-center py-3 self-start">
          {renderSmallImages()}
        </div>
        <div className="flex flex-col flex-grow items-center justify-center w-1/2 self-start">
          <div className="relative rounded-lg shadow-lg">
            <img
              src={bigImage}
              alt={productDetail?.productName}
              className="rounded-lg w-full max-w-lg"
            />
            <button
              onClick={handleBackClick}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
            >
              &#8592;
            </button>
            <button
              onClick={handleForwardClick}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
            >
              &#8594;
            </button>
          </div>
          {Tabs()}
        </div>
      </div>
      <div className="grid md:!hidden lg:!grid lg:!grid-cols-1 xl:!hidden">
        <div className="rounded-lg shadow-lg flex justify-center self-start relative">
          <img
            src={bigImage}
            alt={productDetail?.productName}
            className="rounded-lg"
          />
          <button
            onClick={handleBackClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={handleForwardClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
          >
            &#8594;
          </button>
        </div>
        <div className="grid grid-cols-4 md:px-5 py-3 gap-2 cursor-pointer">
          {renderSmallImages()}
        </div>
        <div>{Tabs()}</div>
      </div>
    </>
  );
}

export default ProductDescriptionImage;

function Tabs() {
  return (
    <div className="mt-6 w-full">
      <div className="grid grid-cols-3 justify-between border-2 !border-skyn rounded">
        <div className="flex flex-col justify-center items-center p-1 md:!p-2 border-r-2 !border-skyn">
          <img
            src={Resources.images.Products.free_shipping_img}
            className="h-8"
          />
          <span className="text-sm md:!text-lg font-bold xl:!ml-2 text-center">
            Free Shipping
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-1 md:!p-2 border-r-2 !border-skyn">
          <img
            src={Resources.images.Products.lowest_price_img}
            className="h-8"
          />
          <span className="text-sm md:!text-lg font-bold xl:!ml-2 text-center">
            Lowest Price
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-1 md:!p-2 !border-skyn">
          <img src={Resources.images.Products.original_img} className="h-8" />
          <span className="text-sm md:!text-lg font-bold xl:!ml-2 text-center">
            100% Original
          </span>
        </div>
      </div>
    </div>
  );
}

// <div className="flex gap-6">
// {/* Small images (thumbnails) on the left */}
// <div className="flex flex-col gap-4 justify-between py-3 h-full">
//   {" "}
//   {/* Set h-full here */}
//   {smallImages.map((image, index) => (
//     <img
//       key={index}
//       src={image}
//       alt={productName}
//       className="rounded-lg shadow-lg border w-32 h-full object-cover cursor-pointer" // Make images take full height
//       onClick={() => handleImageClick(image)}
//     />
//   ))}
// </div>

// {/* Large image on the right */}
// <div className="flex flex-grow items-center justify-center w-1/2 h-full">
//   {" "}
//   {/* Set h-full here */}
//   <div className="relative rounded-lg shadow-lg w-full h-full">
//     <img
//       src={bigImage}
//       alt={productName}
//       className="rounded-lg w-full h-full object-cover"
//     />{" "}
//     {/* Make image take full height and width */}
//     {/* Navigation buttons for large image */}
//     <button
//       onClick={handleBackClick}
//       className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
//     >
//       &#8592;
//     </button>
//     <button
//       onClick={handleForwardClick}
//       className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
//     >
//       &#8594;
//     </button>
//   </div>
// </div>
// </div>

{
  /* <div className="flex gap-6">
      <div className="flex flex-col gap-4 justify-center py-3 self-start">
        {smallImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={productName}
            className="rounded-lg shadow-lg border w-26 cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="flex flex-grow items-center justify-center w-1/2 self-start">
        <div className="relative rounded-lg shadow-lg">
          <img src={bigImage} alt={productName} className="rounded-lg w-full" />
          <button
            onClick={handleBackClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={handleForwardClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-2 py-1 text-2xl hover:opacity-80 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div> */
}
