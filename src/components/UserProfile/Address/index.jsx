import React, { lazy, Suspense, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation, useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { regex } from "../../../helpers/Regex";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import FadedLineBreak from "../../../shared/CustomHrTag";
import {
  deleteUserAddress,
  getUserAddress,
  updateUserAddress,
} from "../../../services/Users";
import ConfirmationModal from "../../ProductsCart/ConfirmationModal";
import Resources from "../../../config/Resources";
import { setUserAddress } from "../../../redux/Actions";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));
const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

export default function Address({
  addresses,
  setAddresses,
  addressFormik,
  isAdding,
  setIsAdding,
  handleAddressSubmit,
}) {
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState({});
  const showSnackbar = useAppSnackbar();
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const { isFetching, refetch } = useQuery(
    ["getUserAddress"],
    () => getUserAddress({ userId: userProfile.userId }),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      onSuccess: (response) => {
        if (response?.status === "SUCCESS") {
          setAddresses(response?.data);
          response?.data?.map((item) =>
            addressFormik.setValues({
              id: item.id || "",
              fullName: item.fullName || "",
              phone: item.phone || "",
              addressLine1: item.addressLine1 || "",
              addressLine2: item.addressLine2 || "",
              city: item.city || "",
              state: item.state || "",
              pinCode: item.pinCode || "",
              country: "India",
            })
          );
          if (refetch) {
            dispatch(
              setUserAddress({
                addresses: response?.data,
              })
            );
          }
        } else {
          if (!response?.message.includes("No addresses found")) {
            showSnackbar(response?.message, "error");
          }
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    }
  );

  const { mutate: updateAddress, isLoading } = useMutation(updateUserAddress, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        showSnackbar(res?.message, "success");
        refetch();
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError(err) {
      showSnackbar(err?.message, "error");
    },
  });

  const handleEdit = (index) => {
    const address = addresses[index];
    setIsAdding(true);
    setEditingAddressIndex(index);
    addressFormik.setValues({
      id: address.id || "",
      fullName: address.fullName || "",
      phone: address.phone || "",
      addressLine1: address.addressLine1 || "",
      addressLine2: address.addressLine2 || "",
      city: address.city || "",
      state: address.state || "",
      pinCode: address.pinCode || "",
      country: "India",
    });
  };

  const handleSave = () => {
    if (!addressFormik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    }
    if (editingAddressIndex !== null) {
      const updatedAddress = {
        ...addresses[editingAddressIndex],
        ...addressFormik.values,
      };
      const reqBody = {
        userId: userProfile.userId,
        addressId: updatedAddress.id,
        updatedAddress: {
          id: updatedAddress.id,
          fullName: updatedAddress.fullName,
          phone: updatedAddress.phone,
          addressLine1: updatedAddress.addressLine1,
          addressLine2: updatedAddress.addressLine2,
          city: updatedAddress.city,
          state: updatedAddress.state,
          pinCode: updatedAddress.pinCode,
          country: "India",
        },
      };
      updateAddress({ reqBody });
    } else {
      handleAddressSubmit();
    }
    setEditingAddressIndex(null);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingAddressIndex(null);
    addressFormik.resetForm();
  };

  const handleDelete = (address) => {
    setDeleteAddress(address);
    setIsConfirmingDelete(true);
  };

  const { mutate: delAddress, isLoading: isDeletingAddress } = useMutation(
    deleteUserAddress,
    {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          showSnackbar("Address removed", "success");
          setIsConfirmingDelete(false);
          refetch();
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    }
  );

  const confirmDelete = () => {
    delAddress({ userId: userProfile.userId, addressId: deleteAddress.id });
    // setAddresses(updatedAddresses);
  };

  const cancelDelete = () => {
    setIsConfirmingDelete(false);
    setDeleteAddress(null);
  };

  return (
    <div>
      <Suspense fallback={<div />}>
        <CustomLoader open={isFetching || isLoading || isDeletingAddress} />
      </Suspense>
      <p className="font-semibold text-cello font-poppins text-xl text-center mt-4">
        Address Details
      </p>
      <FadedLineBreak />
      <div className="grid xl:!grid-cols-2 gap-4 mt-4 font-poppins p-2">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <>
              <span className="text-gray-600 font-bold">
                {address.fullName}
              </span>
              <span className="text-gray-600 text-sm mt-2">
                {address.phone}
              </span>
              <span className="text-gray-600 text-sm">
                {address.addressLine1}
              </span>
              <span className="text-gray-600 text-sm">
                {address.addressLine2}
              </span>
              <span className="text-gray-600 text-sm">
                {`${address.city}, ${address.state} - ${address.pinCode}`}
              </span>
              <hr className="my-4 border-blue-gray-50 px-8" />
            </>
            <div className="flex flex-col lg:!flex-row gap-3 mt-4">
              <button
                onClick={() => handleEdit(index)}
                className="flex items-center space-x-1 text-sm bg-skyn justify-center text-white hover:opacity-80 transition-all duration-300 px-4 py-2 rounded shadow-lg"
              >
                <FiEdit2 />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(address)}
                className="flex items-center space-x-1 text-sm justify-center bg-red-600 text-white hover:opacity-80 transition-all duration-300 px-4 py-2 rounded shadow-lg"
              >
                <FiTrash2 />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
        {!isAdding && (
          <button
            onClick={() => {
              setIsAdding(true);
              setEditingAddressIndex(null);
              addressFormik.resetForm();
            }}
            className="flex items-center justify-center p-4 border rounded-md shadow-md bg-gray-100 hover:bg-gray-200 transition"
          >
            <AiOutlinePlus className="text-4xl text-gray-600" />
          </button>
        )}
      </div>
      {isConfirmingDelete && (
        <ConfirmationModal
          title="Are you sure you want to delete this address?"
          handleCancel={cancelDelete}
          handlePrimaryButtonClick={confirmDelete}
          confirmButtonText="Confirm"
          imageSrc={Resources.images.Common.Warning}
        />
      )}
      {isAdding && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center overflow-scroll"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "-12.5deg" }}
              transition={{ duration: 0.45 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-lg w-full max-w-lg"
            >
              <form>
                {/* Contact Details */}
                <h2 className="font-bold mb-4 text-lg">Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice"
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="Enter"
                      requiredStar
                      labelToShow="Full Name"
                      name="fullName"
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="w-full !mb-4"
                      value={addressFormik.values?.fullName}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.fullName}
                      touched={addressFormik.touched.fullName}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice"
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="Enter"
                      requiredStar
                      labelToShow="Contact Number"
                      name="phone"
                      maxLength={10}
                      regex={regex.numeric}
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="w-full !mb-4"
                      value={addressFormik.values?.phone}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.phone}
                      touched={addressFormik.touched.phone}
                    />
                  </Suspense>
                </div>
                <h2 className="font-bold mb-4 text-lg">Address Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Address Fields */}
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice"
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="Enter"
                      requiredStar
                      labelToShow="Address Line 1"
                      name="addressLine1"
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="w-full !mb-4"
                      value={addressFormik.values?.addressLine1}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.addressLine1}
                      touched={addressFormik.touched.addressLine1}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice"
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="Enter"
                      requiredStar
                      labelToShow="Address Line 2"
                      name="addressLine2"
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="w-full !mb-4"
                      value={addressFormik.values?.addressLine2}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.addressLine2}
                      touched={addressFormik.touched.addressLine2}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice "
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="Enter"
                      requiredStar
                      labelToShow="Pincode"
                      regex={regex.numeric}
                      name="pinCode"
                      maxLength={6}
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="!mb-4"
                      value={addressFormik.values?.pinCode}
                      // onChange={handlePinCodeChange}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.pinCode}
                      touched={addressFormik.touched.pinCode}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice "
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="City"
                      requiredStar
                      labelToShow="City"
                      name="city"
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="!mb-4"
                      value={addressFormik.values?.city}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.city}
                      touched={addressFormik.touched.city}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <CustomTextField
                      textClassOverride="!text-kashmirBlue"
                      placeholderClasses="placeholder:!opacity-30 !text-licorice "
                      className="h-12 rounded-md !bg-transparent"
                      placeholder="State"
                      requiredStar
                      labelToShow="State"
                      name="state"
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="!mb-4"
                      value={addressFormik.values?.state}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.state}
                      touched={addressFormik.touched.state}
                    />
                  </Suspense>
                </div>
              </form>
              <div className="flex flex-col md:!flex-row justify-end gap-4 mt-5">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 shadow-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-skyn text-white px-4 py-2 rounded-md hover:bg-skyn-dark hover:opacity-80 shadow-md"
                  onClick={handleSave}
                >
                  {editingAddressIndex !== null
                    ? "Save Changes"
                    : "Add Address"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
