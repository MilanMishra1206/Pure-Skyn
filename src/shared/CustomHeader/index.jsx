import { useMediaQuery } from "@mui/material";
import CustomBackNavigation from "../CustomBackNavigation";

function CustomHeader({ heading, subHeading, showBackButton, navigateTo }) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={`flex py-4 ${isMobile ? "mt-5" : "mt-4"}`}>
      {showBackButton && <CustomBackNavigation navigateTo={navigateTo} />}
      <div>
        <div className="flex flex-col font-poppins">
          <div className="text-3xl font-bold text-skyn mb-2">{heading}</div>
          <hr className="h-1 !bg-skyn mb-2" />
        </div>
        {subHeading && (
          <div className="font-poppins text-xl font-extrabold">
            {subHeading}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomHeader;
