import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdOutlineShoppingCartCheckout } from "react-icons/md";
import CustomButton2 from "../../../shared/CustomButton2";
import BookNowForm from "./BookNowForm";
import LoginModal from "../LoginModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromServicesCart } from "../../../redux/Actions";
import ConfirmationModal from "../../Cart/ConfirmationModal";
import FadedLineBreak from "../../../shared/CustomHrTag";

const BookNowDetails = ({
  isLoggedIn,
  formik,
  isMobile,
  timeSlots,
  handleSubmit,
  checked,
  setChecked,
}) => {
  const servicesCart = useSelector((state) => state.servicesCart.services);
  const dispatch = useDispatch();
  const [packagePrice, setPackagePrice] = useState(0);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);
  const [subServiceId, setSubServiceId] = useState("");

  useEffect(() => {
    const totalPackagePrice = servicesCart.reduce(
      (total, service) => total + service.packagePrice,
      0
    );
    setPackagePrice(totalPackagePrice);
  }, [servicesCart]);

  const handleServiceBooking = () => {
    if (!isLoggedIn) {
      setOpenLoginModal(true);
    } else {
      window.prompt("Booking Success");
      //api call for booking and payment
    }
  };

  const handleItemRemove = (subServiceId) => {
    setSubServiceId(subServiceId);
    setRemoveItem(true);
  };

  const confirmRemove = () => {
    dispatch(removeFromServicesCart(subServiceId));
    setRemoveItem(false);
  };

  return (
    <div>
      <div className="md:px-5 xl:!mx-5">
        <div className="flex flex-col xl:!flex-row gap-4 place-content-center px-2 py-6 md:!px-4 sm:py-10">
          <div className="flow-root border shadow rounded lg:!pl-1 self-start w-full xl:!w-3/5">
            <BookNowForm
              isLoggedIn={isLoggedIn}
              formik={formik}
              timeSlots={timeSlots}
              handleSubmit={handleSubmit}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
          <div className="flex flex-col border shadow rounded p-4 xl:self-start font-poppins">
            <div className="text-2xl font-bold text-center">Summary</div>
            <FadedLineBreak />
            {servicesCart.map((service, index) => (
              <div key={index}>
                <li className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 text-left">
                  <img
                    src={service.selectedPackageImg}
                    className="h-16 w-16 object-cover"
                    alt={service.packageName}
                  />
                  <div className="flex flex-col sm:flex-grow sm:pl-4 text-center md:!text-left">
                    <span className="text-base text-kashmirBlue">
                      {service.treatmentName}
                    </span>
                    <span className="font-medium text-coal">
                      {service.packageName}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-base text-coal font-semibold">
                      ₹{service.packagePrice}
                    </span>
                    <MdDeleteForever
                      size="1.5rem"
                      className="text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-red-600 cursor-pointer"
                      onClick={() => handleItemRemove(service.subServiceId)}
                    />
                  </div>
                </li>
                <hr />
              </div>
            ))}
            <div className="px-4 py-2">
              <div className="flex justify-between py-2 text-lg text-coal">
                <span>Total Package Price:</span>
                <span>₹{packagePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold py-2 text-lg text-coal">
                <span>Amount Payable:</span>
                <span>₹{(packagePrice / 2).toFixed(2)}</span>
              </div>
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
      {removeItem && (
        <ConfirmationModal
          isEmptyCart={false}
          removeMessage="Are you sure you want to remove this service from the cart?"
          handleCancel={() => setRemoveItem(false)}
          confirmRemove={confirmRemove}
        />
      )}
    </div>
  );
};

export default BookNowDetails;
