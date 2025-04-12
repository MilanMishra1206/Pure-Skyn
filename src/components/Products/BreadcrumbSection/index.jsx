import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BreadcrumbSection = () => {
  return (
    <div className={`mb-4 py-4 font-poppins`}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link
          to="/"
          className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
        >
          Home
        </Link>
        <Typography className="!text-coal !font-poppins !text-lg">
          Products
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbSection;
