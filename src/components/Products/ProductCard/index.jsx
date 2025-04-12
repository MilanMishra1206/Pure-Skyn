import { Box, Rating } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import { INRCurrency } from "../../../helpers/Regex";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const calculateSaveAmount = (oldPrice, newPrice) => {
    return `Save ₹${+oldPrice - +newPrice}`;
  };

  return (
    <div className="flex flex-col p-4 shadow-lg rounded-2xl font-poppins relative">
      {product.strikePrice && (
        <button className="absolute top-2 right-2 shadow-md rounded-xl py-2 px-1 text-sm font-semibold bg-skyn text-white w-26">
          {calculateSaveAmount(product.strikePrice, product.productPrice)}
        </button>
      )}
      <div className="flex items-center justify-center">
        <img
          src={product.imgSrc}
          alt={product.productName}
          className="rounded-xl h-60 w-56 cursor-pointer"
          onClick={() => navigate(`/products/${product.productName}`)}
        />
      </div>
      <div className="flex-1 mt-4 h-10">
        <Link
          className="font-bold text-coal hover:text-skyn no-underline cursor-pointer"
          to={`/products/${product.productName}`}
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
          }}
        >
          {product.productName}
        </Link>
        <Box
          sx={{
            width: 100,
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <Rating
            name="text-feedback"
            value={product.ratings}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{product.ratings}</Box>
        </Box>
        <div className="mb-2">
          <span
            className="text-sm text-justify !text-kashmirBlue !cursor-default mt-4"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
            }}
          >
            {product.productDescription}
          </span>
          <Link
            className="underline !text-skyn hover:!opacity-80 text-xs"
            to={`/products/${product.productName}`}
          >
            Read More
          </Link>
        </div>
        {product.strikePrice && (
          <span className="mt-4 text-left text-slate-400 line-through font-bold mr-4">
            {INRCurrency(product.strikePrice)}
          </span>
        )}
        <span className="mt-4 text-left text-skyn font-bold text-lg">
          {INRCurrency(product.productPrice)}
        </span>
      </div>
      <button
        className="flex items-center gap-2 rounded-2xl cursor-pointer font-bold bg-skyn text-white border hover:!border-black w-full justify-center hover:!border hover:!bg-white hover:!text-skyn px-3 py-2 mt-4 transition duration-500"
        onClick={() => onAddToCart(product)}
      >
        Add To Cart <FaCartPlus size="1.2rem" />
      </button>
    </div>
  );
};

export default ProductCard;
