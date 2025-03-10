import React, { lazy, Suspense, useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  addressInitialValues,
  getAddressValidationSchema,
} from "../../helpers/UserProfile";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import PersonalInformation from "./PersonalInformation";
import OrderHistory from "./OrderHistory";
import AppointmentDetails from "./AppointmentDetails";
import Address from "./Address";
import MotionWrapper from "../../config/MotionFramer/MotionWrapper";
import { addUserAddress, getUserAddress } from "../../services/Users";
import { setUserAddress } from "../../redux/Actions";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function UserProfile() {
  const isAdmin = false;
  const showSnackbar = useAppSnackbar();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const [addresses, setAddresses] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSection, setSelectedSection] = useState("Profile");

  useEffect(() => {
    const targetSection = decodeURIComponent(location.hash.replace("#", ""));
    if (targetSection) {
      setSelectedSection(targetSection);
    }
  }, [location.hash]);

  useEffect(() => {
    setName(userProfile?.name || "");
    setPhone(userProfile?.phone || "");
  }, [userProfile]);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
    navigate("/user-profile", { replace: true });
  };

  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const appointmentDetails = [
    { id: 1, treatmentName: "Laser Hair Removal", date: "11-12-2024" },
    { id: 2, treatmentName: "Oxy Hydra", date: "12-12-2024" },
  ];

  const orderHistory = [
    { id: 1, product: "Cleanser", orderedOn: "11-12-2024" },
    { id: 2, product: "Vitamin C Hydra Gel Creame", orderedOn: "12-12-2024" },
  ];

  const sidebarItemsForAdmin = [
    { id: "Profile", label: "My Profile", icon: <FaUser /> },
  ];

  const sidebarItems = [
    { id: "Profile", label: "My Profile", icon: <FaUser /> },
    { id: "Address", label: "Address", icon: <FaMapLocationDot /> },
    {
      id: "Appointments",
      label: "My Appointments",
      icon: <MdOutlineMedicalServices />,
    },
    { id: "Orders", label: "My Orders", icon: <FaShoppingCart /> },
  ];

  const { mutate: getUserAddresses, isFetching } = useMutation(getUserAddress, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        const addresses = res?.data;
        setAddresses(addresses);
        dispatch(setUserAddress({ addresses }));
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const { mutate: addAddress, isLoading } = useMutation(addUserAddress, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        showSnackbar(res.message, "success");
        setAddresses([
          ...addresses,
          res?.data?.addresses.map((item) => ({
            id: item.id || "",
            name: item.name || "",
            phone: item.phone || "",
            addressLine1: item.addressLine1 || "",
            addressLine2: item.addressLine2 || "",
            city: item.city || "",
            state: item.state || "",
            pinCode: item.pinCode || "",
          })),
        ]);
        setIsAdding(false);
        getUserAddresses({ userId: userProfile.userId });
      } else {
        showSnackbar(res.message, "error");
      }
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const addressFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: addressInitialValues,
    validationSchema: getAddressValidationSchema,
    onSubmit: (values, { resetForm }) => {
      addAddress({
        userId: userProfile.userId,
        addressDetails: {
          fullName: values?.fullName,
          phone: values?.phone,
          addressLine1: values?.addressLine1,
          addressLine2: values?.addressLine2,
          city: values?.city,
          state: values?.state,
          pinCode: values?.pinCode,
          country: "India",
        },
      });
      resetForm();
    },
  });

  const handleAddressSubmit = () => {
    if (!addressFormik.isValid) {
      showSnackbar("Please fill all the required fields", "error");
    } else {
      addressFormik.handleSubmit();
    }
  };

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="!text-cello !font-poppins !text-lg">
      Profile
    </Typography>,
  ];

  return (
    <MotionWrapper>
      <Suspense>
        <CustomLoader open={isLoading || isFetching} />
      </Suspense>
      <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
        <div className={`mt-5 ${isTablet ? "px-3" : "px-5"}`}>
          <Breadcrumbs
            separator=">"
            aria-label="breadcrumb"
            className="mb-4 py-2"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div
          className={`flex flex-col md:!flex-row mt-3 md:!space-x-5 space-y-5 md:!space-y-0 ${isTablet ? "px-3" : "px-5"}`}
        >
          {/* Sidebar */}
          <div
            className={`flex flex-col shadow rounded font-poppins sm:w-full md:!w-3/5 lg:!w-1/3 xl:!1/5 md:!self-start`}
          >
            <div className="flex flex-col bg-skyn text-white font-bold p-4 rounded-t-lg">
              <p>{name}</p>
              <p>{phone}</p>
            </div>
            <div className="flex flex-col p-4">
              {(isAdmin ? sidebarItemsForAdmin : sidebarItems).map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center space-x-2 w-full p-2 rounded cursor-pointer mb-2 ${
                    selectedSection === item.id
                      ? "!bg-slate-300"
                      : "hover:!bg-slate-300"
                  }`}
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.icon}
                  <div className="flex-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="shadow md:!p-5 rounded w-full">
            {selectedSection === "Profile" && (
              <Suspense fallback={<div />}>
                <PersonalInformation userProfile={userProfile} />
              </Suspense>
            )}
            {selectedSection === "Address" && (
              <Suspense fallback={<div />}>
                <Address
                  addresses={addresses}
                  setAddresses={setAddresses}
                  addressFormik={addressFormik}
                  isAdding={isAdding}
                  setIsAdding={setIsAdding}
                  handleAddressSubmit={handleAddressSubmit}
                />
              </Suspense>
            )}
            {selectedSection === "Appointments" && (
              <Suspense fallback={<div />}>
                <AppointmentDetails appointmentDetails={appointmentDetails} />
              </Suspense>
            )}
            {selectedSection === "Orders" && (
              <Suspense fallback={<div />}>
                <OrderHistory orderHistory={orderHistory} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default UserProfile;
