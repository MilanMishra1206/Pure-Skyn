import { Link } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import Resources from "../../../../config/Resources";
import ProductCarousel from "../ProductCarousel";
import { addToCart } from "../../../../redux/Actions";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";

function BuyMoreProducts({ showCarousel = true, handleOpenCart }) {
  const dispatch = useDispatch();
  const showSnackbar = useAppSnackbar();

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showSnackbar("Product Added to Cart", "success");
  };

  return (
    <div>
      {showCarousel ? (
        <ProductCarousel carouselContent={productList} />
      ) : (
        <div className="space-y-4">
          <p className="text-center text-2xl mb-5 font-bold text-bold text-emerald-900 uppercase">
            Boost Your Results
          </p>
          {productList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div className="flex gap-2 items-center mx-4 border-b-2">
                <img
                  src={item.imgSrc}
                  className="h-20"
                  alt={item.productName}
                />
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-coal">
                    {item.productName}
                  </span>
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={item.ratings}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Box sx={{ ml: 2 }}>{item.ratings}</Box>
                  </Box>
                  <div className="flex gap-2 items-center">
                    <p className="text-emerald-900 font-bold">
                      ₹{item.productPrice}
                    </p>
                    {item.strikePrice && (
                      <p className="text-slate-400 line-through">
                        ₹{item.strikePrice}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="bg-skyn p-2 text-white hover:opacity-80 shadow-lg rounded w-32"
                  onClick={() => handleAddToCart(item)}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex p-3 justify-center w-auto">
        <Link
          to="/products"
          onClick={handleOpenCart}
          className="text-skyn no-underline hover:scale-110 hover:opacity-80 text-xl font-bold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
}

export default BuyMoreProducts;
