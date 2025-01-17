import { useState } from "react";
import Resources from "../../../../config/Resources";

function ProductDescriptionImage({ productName }) {
  const initialSmallImages = [
    Resources.images.Products.dermaticaAzeProactiveLotion.img2,
    Resources.images.Products.dermaticaAzeProactiveLotion.img3,
    Resources.images.Products.dermaticaAzeProactiveLotion.img4,
  ];
  const [bigImage, setBigImage] = useState(
    Resources.images.Products.dermaticaAzeProactiveLotion.img1
  );
  const [smallImages, setSmallImages] = useState(initialSmallImages);

  const handleImageClick = (clickedImage) => {
    const newSmallImages = [...smallImages, bigImage];
    const updatedSmallImages = newSmallImages.filter(
      (image) => image !== clickedImage
    );
    setBigImage(clickedImage);
    setSmallImages(updatedSmallImages);
  };

  const handleBackClick = () => {
    const currentIndex = Object.values(
      Resources.images.Products.dermaticaAzeProactiveLotion
    ).indexOf(bigImage);
    const newIndex =
      currentIndex === 0
        ? Object.values(Resources.images.Products.dermaticaAzeProactiveLotion)
            .length - 1
        : currentIndex - 1;
    setBigImage(
      Object.values(Resources.images.Products.dermaticaAzeProactiveLotion)[
        newIndex
      ]
    );

    const newSmallImages = [...smallImages];
    const movedImage = newSmallImages.pop();
    newSmallImages.unshift(movedImage);
    setSmallImages(newSmallImages);
  };

  const handleForwardClick = () => {
    const currentIndex = Object.values(
      Resources.images.Products.dermaticaAzeProactiveLotion
    ).indexOf(bigImage);
    const newIndex =
      currentIndex ===
      Object.values(Resources.images.Products.dermaticaAzeProactiveLotion)
        .length -
        1
        ? 0
        : currentIndex + 1;
    setBigImage(
      Object.values(Resources.images.Products.dermaticaAzeProactiveLotion)[
        newIndex
      ]
    );

    const newSmallImages = [...smallImages];
    const movedImage = newSmallImages.shift();
    newSmallImages.push(movedImage);
    setSmallImages(newSmallImages);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="rounded-lg shadow-lg flex justify-center self-start relative">
        <img src={bigImage} alt={productName} className="rounded-lg" />
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
      <div className="grid grid-cols-3 md:px-5 py-3 gap-2 cursor-pointer">
        {smallImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={productName}
            className="rounded-lg shadow-lg border"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductDescriptionImage;
