import * as yup from "yup";

export const addressInitialValues = {
  id: "",
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pinCode: "",
  country: "",
};

export const getAddressValidationSchema = () =>
  yup.object().shape({
    fullName: yup.string().required("Name is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit contact number")
      .required("Contact Number is required"),
    addressLine1: yup.string().required("Required"),
    addressLine2: yup.string().required("Required"),
    pinCode: yup
      .string()
      .length(6, "Enter exactly 6 digits")
      .matches(/^[0-9]+$/, "Enter a valid Pincode")
      .required("Pincode is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
  });

export const getPersonalInfoValidationSchema = (isAdmin) =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit contact number")
      .required("Mobile number is required"),
    email: yup.string().email("Please Enter Valid Email").required("Required"),
    gender: isAdmin
      ? yup.string()
      : yup.string().required("Please select a gender"),
  });
