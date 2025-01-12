import { Button } from "react-bootstrap";

function CustomButton2({
  buttonText = "Book Now",
  handleSubmit,
  faIcon,
  buttonClass,
}) {
  return (
    <Button
      variant="contained"
      className={`!flex !items-center !justify-center gap-2 mt-4 w-full !bg-skyn !text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all !shadow-[3px_3px_0px_black] hover:!shadow-none hover:!translate-x-[3px] hover:!translate-y-[3px] cursor-pointer ${buttonClass}`}
      onClick={() => handleSubmit()}
    >
      {faIcon && faIcon} {buttonText}
    </Button>
  );
}

export default CustomButton2;
