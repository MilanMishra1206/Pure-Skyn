import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CustomButton({ linkTo, linkClass, text }) {
  return (
    <div>
      <button className="btn-1">
        <FaArrowRightLong className="arrow-icon arr-1" />
        <Link to={linkTo} className={`text ${linkClass}`}>
          {text}
        </Link>
        <span className="circle"></span>
        <FaArrowRightLong className="arrow-icon arr-2" />
      </button>
    </div>
  );
}

export default CustomButton;
