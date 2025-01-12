import { Card } from "react-bootstrap";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import { Link, useNavigate } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { FaCartPlus } from "react-icons/fa";
import CustomButton2 from "../../../../shared/CustomButton2";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";
import { addToCart } from "../../../../redux/Actions";
import { useDispatch } from "react-redux";

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
        <Card.Img
          variant="top"
          src={product.imgSrc}
          className="cursor-pointer"
          onClick={() => navigate(`/products/${product.productName}`)}
        />
        <FadedLineBreak />
        <Card.Body>
          <Card.Title>
            <Link
              className="font-bold text-coal text-xl mt-4 hover:text-skyn no-underline"
              to={`/products/${product.productName}`}
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
          <Card.Text className="text-sm !text-kashmirBlue !cursor-default mt-4 mb-4">
            {truncateText(product.productDescription, 12)}{" "}
            <Link
              className="underline !text-skyn hover:!opacity-80"
              to={`/products/${product.productName}`}
            >
              Read More
            </Link>
          </Card.Text>
          {product.strikePrice && (
            <span className="mt-4 text-left text-slate-400 line-through font-bold mr-4">
              ₹{product.strikePrice}
            </span>
          )}
          <span className="mt-4 text-left text-skyn font-bold">
            ₹{product.productPrice}
          </span>
          <CustomButton2
            buttonText="Add to Cart"
            faIcon={<FaCartPlus size="1.5rem" />}
            handleSubmit={handleAddToCart}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
