/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Button from "@mui/material/Button";
import Resources from "../../config/Resources";
import "tailwindcss/tailwind.css";

function PageNotFound() {
  return (
    <div className="bg-solitude-3 h-screen flex flex-col md:!flex-row">
      <img
        className="w-24/100"
        src={Resources.images.PageNotFound.Crack1}
        alt="Crack1"
      />
      <div className="flex flex-col items-center w-4/5 mx-auto my-auto md:!w-52/100">
        <img
          className="h-[30%] w-3/5"
          src={Resources.images.PageNotFound.NotFound}
          alt=""
        />
        <p className="font-poppins font-bold text-4xl md:!text-4.3xl text-veniceBlue">
          Page Not Found
        </p>
        <p className="font-poppins font-medium text-center my-2 text-lg md:!text-xl text-cello">
          We Can&apos;t Seem To Find The Page You Are Looking For.
        </p>
        <p className="font-poppins font-medium text-xl text-cello">
          Sorry For The Inconvenince!
        </p>
        <Button
          variant="contained"
          onClick={() => window.history.go(-1)}
          className="!h-12 !w-32 !mt-4 !bg-funBlue !font-medium text-white !rounded-1.25lg"
        >
          Go Back
        </Button>
      </div>
      <img
        className="w-24/100 h-72 mt-auto ml-auto md:!relative md:!left-20"
        src={Resources.images.PageNotFound.Crack2}
        alt="Crack2"
      />
    </div>
  );
}

export default PageNotFound;
