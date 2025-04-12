import { Link } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import ProductCarousel from "../ProductCarousel";
import { addToCart } from "../../../../redux/Actions";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";
import { INRCurrency } from "../../../../helpers/Regex";
import { productList } from "../../../../helpers/Products";

function BuyMoreProducts({
  showCarousel = true,
  handleOpenCart,
  productCategory = "",
}) {
  const dispatch = useDispatch();
  const showSnackbar = useAppSnackbar();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showSnackbar("Product Added to Cart", "success");
  };

  let products = [];

  if (productCategory && productList[productCategory]) {
    products = Object.values(productList[productCategory]);
  } else {
    products = Object.values(productList).flatMap((category) =>
      Object.values(category)
    );
  }

  return (
    <div>
      {showCarousel ? (
        <ProductCarousel carouselContent={products} />
      ) : (
        <div className="space-y-4">
          <p className="text-center text-2xl mb-5 font-bold text-bold text-emerald-900 uppercase">
            Boost Your Results
          </p>
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div className="flex gap-2 items-center mx-4 border-b-2">
                <img
                  src={item.imgSrc}
                  className="h-20 w-20"
                  alt={item.productName}
                />
                <div className="flex flex-col space-y-2 w-48">
                  <span className="font-bold text-coal text-xs md:!text-base">
                    {item.productName}
                  </span>
                  <Box
                    sx={{
                      width: 150,
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
                    <p className="text-emerald-900 font-bold text-xs md:!text-base">
                      {INRCurrency(item.productPrice)}
                    </p>
                    {item.strikePrice && (
                      <p className="text-slate-400 line-through text-xs md:!text-base">
                        {INRCurrency(item.strikePrice)}
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
