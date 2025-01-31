import { useMediaQuery } from "@mui/material";

function CustomHomeHeader({ heading, headerClass }) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={`text-center py-4 ${isMobile ? "mt-5" : "mt-4"}`}>
      <div>
        <div className="flex flex-col font-poppins">
          <div
            className={`text-4xl md:!text-5xl font-bold text-skyn mb-3 ${headerClass}`}
          >
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHomeHeader;
