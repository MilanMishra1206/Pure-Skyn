import * as yup from "yup";
import regex from "../Regex";
import React from "react";

const loginInitialValues = {
  emailAddress: "",
  password: "",
};

const getLoginValidation = () =>
  yup.object().shape({
    emailAddress: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

const signUpInitialValue = {
  fullName: "",
  emailAddress: "",
  contactNumber: "",
  password: "",
  confirmPassword: "",
};

const getSignUpValidation = () =>
  yup.object().shape({
    fullName: yup.string().required("Name is required"),
    emailAddress: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    contactNumber: yup
      .string()
      .required("Phone number is required")
      .matches(regex.mobileNumber, "Enter Valid Phone Number"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password Must Match")
      .required("Confirm password is required"),
  });

const getTandCContent = () => (
  <div className="text-kashmirBlue text-center text-sm p-2">
    <div className="mt-4">
      <div className="text-cello font-bold mt-1">
        1.1 Know Your Customer Guidelines
      </div>
      <div className="mt-2">
        <div className="text-kashmirBlue font-bold ml-2">
          1.1.1 KYC should be carried out for all customers. It is of two types
          - Basic KYC and Enhanced KYC.{" "}
        </div>
        <div className="mt-1 ml-4">
          <div>
            Basic KYC involves verification of identity and residence of
            customers. It involves collection of identity proof, address proof
            and latest photograph. Enhanced KYC involves in addition to basic
            KYC, ascertainment of genuineness of source of funds by verification
            of income document.
          </div>
          <div>
            Where a customer is a juridical person, verification of identity is
            required to be carried out on persons purporting to act and is
            authorized to act on behalf of a customer. Special care has to be
            exercised to ensure that contracts are not anonymous or under
            fictitious names. No contract can be entered into with persons of
            known criminal background or known to be engaged in money
            laundering/ terrorist financing activities.
          </div>
          <div>
            Remittances of premium by cash exceeding Rs.49,999/- will not be
            accepted. Acceptance of Premium beyond Rs.49,999/- will be only
            through cheques, demand drafts, credit card or any other banking
            channels.
          </div>
          <div>
            Insurance premium paid by persons other than the person insured
            should be looked into to establish insurable interest
          </div>
        </div>
      </div>
    </div>
  </div>
);

const bookNowInitialValues = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  treatment: "",
};

const bookNowFormInitialValues = {
  ...bookNowInitialValues,
  address: "",
  treatmentDate: "",
  timeSlot: "",
  laserOption: "",
};

const getBookNowValidation = () =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    mobile: yup
      .string()
      .matches(regex.mobileNumber, "Please Enter Valid Mobile Number")
      .required("Mobile number is required"),
    city: yup.string().required("City is required"),
    treatment: yup.string().required("Treatment is required"),
  });

const getBookNowFormValidation = () =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    mobile: yup
      .string()
      .matches(regex.mobileNumber, "Please Enter Valid Mobile Number")
      .required("Mobile number is required"),
    address: yup.string().required("Address is required"),
    treatmentDate: yup.string().required("Date is required"),
    timeSlot: yup.string().required("Please select a time slot"),
    city: yup.string().required("City is required"),
    treatment: yup.string().required("Treatment is required"),
    laserOption: yup
      .string()
      .when("treatment", ([treatment], schema) =>
        treatment === "Laser Hair Removal"
          ? schema.required("Required")
          : schema.notRequired()
      ),
  });

export {
  loginInitialValues,
  getLoginValidation,
  signUpInitialValue,
  getSignUpValidation,
  getTandCContent,
  bookNowInitialValues,
  getBookNowValidation,
  bookNowFormInitialValues,
  getBookNowFormValidation,
};
