import { useCallback } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const useNavigateBack = (fallbackUrl) => {
  const navigate = useNavigate();

  const navigateBack = useCallback(() => {
    if (fallbackUrl) {
      navigate(fallbackUrl, { replace: true });
    } else {
      navigate(-1);
    }
  }, [fallbackUrl, navigate]);

  return navigateBack;
};

const CustomBackNavigation = ({ navigateTo }) => {
  const navigateBack = useNavigateBack(navigateTo);
  return (
    <button
      type="button"
      onClick={navigateBack}
      className="h-8 w-8 p-1 mt-1 mr-2 flex justify-center items-center rounded-md shadow-[3px_3px_0px_black] border bg-white"
    >
      <MdOutlineArrowBackIos className="text-black text-xl" />
    </button>
  );
};

export default CustomBackNavigation;
