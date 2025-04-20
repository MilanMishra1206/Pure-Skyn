import React, { lazy, Suspense, useEffect, useState } from "react";
import { MdDeleteForever, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";

import CustomButton2 from "../../../shared/CustomButton2";
import BookNowForm from "./BookNowForm";
import { removeFromServicesCart } from "../../../redux/Actions";
import ConfirmationModal from "../../ProductsCart/ConfirmationModal";
import FadedLineBreak from "../../../shared/CustomHrTag";
import { getBookNowFormValidation } from "../../../helpers/Login";
import { createNewBooking } from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { INRCurrency } from "../../../helpers/Regex";
import Resources from "../../../config/Resources";
import BookingSuccessModal from "./BookingSuccessModal";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));
const CustomPackageTermsAndConditions = lazy(
  () => import("../../../shared/CustomPackageTermsAndConditions")
);

const BookNowDetails = ({ isLoggedIn }) => {
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const servicesCart = useSelector((state) => state.servicesCart.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showSnackbar = useAppSnackbar();
  const [packagePrice, setPackagePrice] = useState(0);
  const [removeItem, setRemoveItem] = useState(false);
  const [askForLogin, setAskForLogin] = useState(false);
  const [subServiceId, setSubServiceId] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [isOpenTandCModal, setIsOpenTandCModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showBookingSuccessModal, setShowBookingSuccessModal] = useState(false);
  const [successBookingContent, setSuccessBookingContent] = useState({});
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    treatmentDate: "",
    timeSlot: "",
    city: "",
  });

  useEffect(() => {
    const storedTimeSlots = sessionStorage.getItem("availableTimeSlots");
    setTimeSlots(
      storedTimeSlots
        ? JSON.parse(storedTimeSlots)
        : ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
    );
  }, [sessionStorage.getItem("availableTimeSlots")]);

  useEffect(() => {
    isLoggedIn &&
      setInitialValues({
        name: userProfile?.name || "",
        email: userProfile?.email || "",
        mobile: userProfile?.phone || "",
        address: "",
        city: "",
        treatmentDate: "",
        timeSlot: "",
      });
  }, [isLoggedIn, userProfile]);

  const { mutate: createBooking, isLoading } = useMutation(createNewBooking, {
    onSuccess(res) {
      if (res?.status !== "ERROR") {
        setShowBookingSuccessModal(true);
        setSuccessBookingContent(res?.data);
        showSnackbar(res?.message, "success");
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError(error) {
      showSnackbar(error?.message, "error");
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues,
    validationSchema: getBookNowFormValidation,
    onSubmit: (values) => {
      const { name, email, address, city, mobile, timeSlot, treatmentDate } =
        values;
      const [day, month, year] = treatmentDate.split("/");
      const formattedDate = `${year}-${month}-${day}`;
      const formattedTimeISO = new Date(
        `${formattedDate} ${timeSlot}`
      ).toISOString();

      const servicesBooked = Array.isArray(servicesCart)
        ? servicesCart.map(({ subServiceId }) => {
            const date = formattedDate;
            const time = formattedTimeISO;
            return {
              subServiceId,
              date,
              time,
              sessions: [
                {
                  id: subServiceId,
                  date,
                  time,
                },
              ],
            };
          })
        : [];
      // const servicesBooked = Array.isArray(servicesCart)
      //   ? servicesCart.map(
      //       ({
      //         treatmentName = "",
      //         packageName = "",
      //         serviceId = "",
      //         subServiceId = "",
      //         packagePrice = 0,
      //         featureName = "",
      //         selectedPackageImg = "",
      //         strikeOutPrice = null,
      //       }) => ({
      //         treatmentName,
      //         packageName,
      //         serviceId,
      //         subServiceId,
      //         packagePrice,
      //         featureName,
      //         selectedPackageImg,
      //         strikeOutPrice,
      //       })
      //     )
      //   : [];
      const beneficiary = {
        name,
        email,
        mobile,
        address,
        city,
      };
      const reqBody = {
        userId: userProfile.userId,
        beneficiary,
        servicesBooked,
        paymentId: "P123",
      };
      createBooking({
        reqBody,
      });
    },
  });

  useEffect(() => {
    const totalPackagePrice = servicesCart.reduce(
      (total, service) => total + +service.packagePrice,
      0
    );
    setPackagePrice(totalPackagePrice);
  }, [servicesCart]);

  const handleServiceBooking = () => {
    if (!isLoggedIn) {
      setAskForLogin(true);
    }
    if (!formik.isValid && isLoggedIn) {
      showSnackbar("Please fill all the required fields", "error");
    } else {
      formik.handleSubmit();
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
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
      <div className="md:px-5 xl:!mx-5">
        <div className="flex flex-col xl:!flex-row gap-4 place-content-center px-2 py-6 md:!px-4 sm:py-10">
          <div className="flow-root border shadow rounded lg:!pl-1 self-start w-full xl:!w-3/5">
            <BookNowForm
              isLoggedIn={isLoggedIn}
              formik={formik}
              timeSlots={timeSlots}
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
                      {INRCurrency(service.packagePrice)}
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
                <span>{INRCurrency(packagePrice)}</span>
              </div>
              <div className="flex justify-between font-semibold py-2 text-lg text-coal">
                <span>Amount Payable:</span>
                <span>{INRCurrency(packagePrice / 2)}</span>
              </div>
            </div>
            <small className="text-sm mt-4 text-Green">
              Note: You will have to pay <strong>50%</strong> at the time of
              booking and the rest 50% amount post service
            </small>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="tandc"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="accent-skyn cursor-pointer"
              />
              <label htmlFor="tandc">
                I Agree to the{" "}
                <button
                  type="button"
                  className="text-bitterSweet hover:underline bg-white outline-none border-none"
                  onClick={() => setIsOpenTandCModal(true)}
                >
                  Terms & Conditions*
                </button>
              </label>
            </div>
            <div className="mt-6 flex justify-end mb-5">
              <CustomButton2
                buttonText="Book Now"
                faIcon={
                  <MdOutlineShoppingCartCheckout
                    size="1.5rem"
                    className="ml-2 group-hover:scale-110 group-hover:!ml-5"
                  />
                }
                buttonClass={`!w-96 !justify-end !text-xl ${!isChecked ? "disabled" : ""}`}
                handleSubmit={handleServiceBooking}
              />
            </div>
          </div>
        </div>
      </div>
      {removeItem && (
        <ConfirmationModal
          title="Are you sure you want to remove this service from the cart?"
          handleCancel={() => setRemoveItem(false)}
          handlePrimaryButtonClick={confirmRemove}
          confirmButtonText="Remove"
        />
      )}
      {askForLogin && (
        <ConfirmationModal
          title="You have to login before booking our services!"
          handleCancel={() => setAskForLogin(false)}
          handlePrimaryButtonClick={() => navigate("/login")}
          confirmButtonText="Login"
          confirmButtonColor="bg-skyn hover:!opacity-80"
          imageSrc={Resources.images.Common.Warning}
        />
      )}
      {/* Booking Success Content Modal */}
      {showBookingSuccessModal && (
        <BookingSuccessModal
          handlePrimaryButtonClick={() => setShowBookingSuccessModal(false)}
          bookingData={successBookingContent}
        />
      )}
      {/* Terms and Conditions Modal */}
      <Suspense>
        <CustomPackageTermsAndConditions
          isOpenTandCModal={isOpenTandCModal}
          setIsOpenTandCModal={setIsOpenTandCModal}
          buttonText="I Agree"
        />
      </Suspense>
    </div>
  );
};

export default BookNowDetails;
