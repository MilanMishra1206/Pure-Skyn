import { Link } from "react-router-dom";
import Resources from "../../../../config/Resources";
import { CustomRevealHeading } from "../../../../shared/CustomRevealHeading";
import ProductCarousel from "../ProductCarousel";

function BuyMoreProducts() {
  const productList = [
    {
      id: 1,
      productName: "BP Machine",
      imgSrc: Resources.images.Products.img1,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4,
      strikePrice: "2800",
      productPrice: "2250",
      category: "Machine",
      quantity: 1,
    },
    {
      id: 2,
      productName: "Crepe Bandage",
      imgSrc: Resources.images.Products.img2,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4.5,
      productPrice: "250",
      category: "Bandages",
      quantity: 1,
    },
    {
      id: 3,
      productName: "Stethoscope",
      imgSrc: Resources.images.Products.img3,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      strikePrice: "1000",
      productPrice: "700",
      category: "Machine",
      quantity: 1,
    },
    {
      id: 4,
      productName: "N-96 Mask",
      imgSrc: Resources.images.Products.img4,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 5,
      productPrice: "650",
      category: "Bla Bla",
      quantity: 1,
    },
    {
      id: 5,
      productName: "Sugar Machine",
      imgSrc: Resources.images.Products.img5,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 4,
      strikePrice: "2000",
      productPrice: "1500",
      category: "Machine",
      quantity: 1,
    },
    {
      id: 6,
      productName: "Scissors",
      imgSrc: Resources.images.Products.img6,
      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ratings: 3.5,
      productPrice: "250",
      category: "Bla Bla",
      quantity: 1,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:!flex-row md:gap-4 justify-center items-center cursor-pointer">
        <CustomRevealHeading heading={"Similar"} />
        <CustomRevealHeading heading={"Products"} />
      </div>
      <ProductCarousel carouselContent={productList} />
      <div className="flex p-3 justify-center w-auto">
        <Link
          to="/products"
          className="text-skyn no-underline hover:scale-110 hover:opacity-80 text-xl font-bold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
}

export default BuyMoreProducts;
