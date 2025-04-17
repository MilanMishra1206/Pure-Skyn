import { lazy, Suspense } from "react";
import CustomButton2 from "../../CustomButton2";
import Resources from "../../../config/Resources";
import { getIn } from "formik";

const CustomTextField = lazy(() => import("../../CustomTextField"));
const CustomDropdown = lazy(() => import("../../CustomDropdown"));

function QueryForm({ queryFormik, handleQueryFormSubmit }) {
  return (
    <div className="flex flex-col items-center order-2 lg:!order-1">
      <div className="flex lg:w-4/5 xl:!w-3/5 flex-col shadow rounded-lg px-4 py-6 border bg-[#FFFFFF] ">
        <div className="flex justify-center p-4">
          <img
            src={Resources.images.Common.newLogoWhite}
            alt="branding"
            className="w-4/5 md:!w-3/5"
          />
        </div>
        <span className="text-lg font-poppins text-center mb-4">
          Have Query? We will give a call!{" "}
        </span>
        <hr />
        <form className="w-full mt-4">
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-cello"
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter Your Name"
              requiredStar
              labelToShow="Name"
              name="name"
              textFieldColorClass="shadow-insetLight"
              inputClassName="!bg-transparent"
              fieldWidth="w-full !mb-4"
              value={queryFormik.values?.name}
              onChange={queryFormik.handleChange}
              handleBlur={queryFormik.handleBlur}
              error={queryFormik.errors.name}
              touched={queryFormik.touched.name}
            />
          </Suspense>
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-cello"
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter Your Number"
              requiredStar
              labelToShow="Phone Number"
              maxLength={10}
              name="phone"
              textFieldColorClass="shadow-insetLight"
              inputClassName="!bg-transparent"
              fieldWidth="w-full !mb-4"
              value={queryFormik.values?.phone}
              onChange={queryFormik.handleChange}
              handleBlur={queryFormik.handleBlur}
              error={queryFormik.errors.phone}
              touched={queryFormik.touched.phone}
            />
          </Suspense>
          <Suspense fallback={<div />}>
            <CustomDropdown
              textClassOverride="!text-kashmirBlue"
              classes="!rounded-md !mb-4"
              requiredStar
              labelToShow="Select Service"
              name="serviceId"
              showIconOutline
              options={[
                {
                  label: "Laser Hair Removal",
                  value: "Laser Hair Removal",
                },
                {
                  label: "Oxy Hydra Facial",
                  value: "Oxy Hydra Facial",
                },
                {
                  label: "Oxygeneo",
                  value: "Oxygeneo",
                },
                {
                  label: "RF Skin Tightening",
                  value: "RF Skin Tightening",
                },
                {
                  label: "Derma Infusion Facial",
                  value: "Derma Infusion Facial",
                },
              ]}
              value={queryFormik.values.serviceId}
              handleBlur={queryFormik.handleBlur}
              handleChange={queryFormik.handleChange}
              errorMessage={getIn(queryFormik.errors, "serviceId")}
              error={getIn(queryFormik.errors, "serviceId")}
              touched={getIn(queryFormik.touched, "serviceId")}
            />
          </Suspense>
          <Suspense fallback={<div />}>
            <CustomDropdown
              textClassOverride="!text-kashmirBlue"
              classes="!rounded-md !mb-4"
              requiredStar
              labelToShow="Select City"
              name="city"
              showIconOutline
              options={[
                {
                  label: "South Delhi",
                  value: "South Delhi",
                },
                {
                  label: "Gurgaon",
                  value: "Gurgaon",
                },
              ]}
              value={queryFormik.values.city}
              handleBlur={queryFormik.handleBlur}
              handleChange={queryFormik.handleChange}
              errorMessage={getIn(queryFormik.errors, "city")}
              error={getIn(queryFormik.errors, "city")}
              touched={getIn(queryFormik.touched, "city")}
            />
          </Suspense>
        </form>
        <div className="flex justify-center">
          <CustomButton2
            buttonText="Submit"
            handleSubmit={handleQueryFormSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default QueryForm;
