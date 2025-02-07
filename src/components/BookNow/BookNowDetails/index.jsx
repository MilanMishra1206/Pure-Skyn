import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import CustomButton2 from "../../../shared/CustomButton2";
import BookNowForm from "./BookNowForm";
import LoginModal from "../LoginModal";

const BookNowDetails = ({
  isLoggedIn,
  formik,
  isMobile,
  timeSlots,
  handleSubmit,
  checked,
  setChecked,
}) => {
  const [treatmentName, setTreatmentName] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    setTreatmentName(sessionStorage.getItem("treatmentName"));
    setPackageName(sessionStorage.getItem("packageName"));
    setPackagePrice(sessionStorage.getItem("packagePrice"));
  }, []);

  const handleServiceBooking = () => {
    if (!isLoggedIn) {
      setOpenLoginModal(true);
    } else {
      window.prompt("Booking Success");
      //api call for booking and payment
    }
  };

  return (
    <div className={`${isMobile ? "" : "px-4"} mt-4 py-4`}>
      <div className="md:px-5 xl:!mx-5">
        <div className="flex flex-col xl:!flex-row gap-4 place-content-center px-2 py-6 md:!px-4 sm:py-10">
          <div className="flow-root border shadow rounded md:p-4 lg:!pl-1 xl:!p-4 self-start w-full">
            <BookNowForm
              isLoggedIn={isLoggedIn}
              formik={formik}
              timeSlots={timeSlots}
              handleSubmit={handleSubmit}
              treatmentName={treatmentName}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
          <div className="flex flex-col border shadow rounded p-4 xl:self-start font-poppins">
            <div className="text-2xl font-bold text-center">Summary</div>
            <div className="mt-6 border-b py-2">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-lg font-semibold text-coffee">
                  {treatmentName}
                </p>
                <p className="text-lg font-semibold text-coffee">
                  {packageName}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="font-medium text-kashmirBlue">Package Price</p>
              <p className="text-xl font-semibold text-coal">
                ₹ {packagePrice || 0}
              </p>
            </div>
            <div className="mt-6 flex border-t border-b py-3 items-center justify-between">
              <p className="font-medium text-kashmirBlue">Amount To Be Paid</p>
              <p className="text-xl font-semibold text-coal">
                ₹ {packagePrice / 2 || 0}
              </p>
            </div>
            <small className="text-sm mt-4 text-Green">
              Note: You will have to pay <strong>50%</strong> at the time of
              booking and the rest 50% amount post service
            </small>
            <div className="mt-6 flex justify-end mb-5">
              <CustomButton2
                buttonText="Book Now"
                faIcon={
                  <MdOutlineShoppingCartCheckout
                    size="1.5rem"
                    className="ml-2 group-hover:scale-110 group-hover:!ml-5"
                  />
                }
                buttonClass="!w-96 !justify-end !text-xl"
                handleSubmit={handleServiceBooking}
              />
            </div>
          </div>
        </div>
      </div>
      {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
    </div>
  );
};

export default BookNowDetails;
