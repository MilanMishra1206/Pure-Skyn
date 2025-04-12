import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { Box, Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CustomButton2 from "../../../../shared/CustomButton2";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";
import { addToCart } from "../../../../redux/Actions";
import { INRCurrency } from "../../../../helpers/Regex";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showSnackbar = useAppSnackbar();
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showSnackbar("Product Added to Cart", "success");
  };

  return (
    <div>
      <Card style={{ width: "inherit" }}>
        <div className="flex items-center justify-center p-2">
          <img
            src={product.imgSrc}
            className="cursor-pointer h-64 rounded-md"
            onClick={() => navigate(`/products/${product.productName}`)}
            alt={product.productName}
          />
        </div>
        <div className="flex flex-col p-3">
          <Card.Title>
            <Link
              className="font-bold text-coal hover:text-skyn no-underline"
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
          </Card.Title>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
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
          <Card.Text
            className="text-sm !text-kashmirBlue !cursor-default mt-4"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
            }}
          >
            {product.productDescription}
          </Card.Text>
          <Link
            className="text-xs underline !text-skyn hover:!opacity-80"
            to={`/products/${product.productName}`}
          >
            Read More
          </Link>
          <div className="flex">
            {product.strikePrice && (
              <span className="mt-4 text-left text-slate-400 line-through font-bold mr-4">
                {INRCurrency(product.strikePrice)}
              </span>
            )}
            <span className="mt-4 text-left text-skyn font-bold">
              ₹{product.productPrice}
            </span>
          </div>
          <CustomButton2
            buttonText="Add to Cart"
            faIcon={<FaCartPlus size="1.5rem" />}
            handleSubmit={handleAddToCart}
          />
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
