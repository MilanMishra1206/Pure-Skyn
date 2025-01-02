import React, { lazy, Suspense, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import regex from "../../../helpers/Regex";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { AnimatePresence, motion } from "framer-motion";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));

export default function Address({
  addresses,
  setAddresses,
  addressFormik,
  isAdding,
  setIsAdding,
  handleAddressSubmit,
}) {
  const addressTypes = ["Home", "Office", "Others"];
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [deleteAddressIndex, setDeleteAddressIndex] = useState(null);
  const showSnackbar = useAppSnackbar();

  const handleEdit = (index) => {
    const address = addresses[index];
    setIsAdding(true);
    setEditingAddressIndex(index);
    addressFormik.setValues({
      fullName: address.fullName || "",
      contactNumber: address.contactNumber || "",
      addressLine1: address.addressLine1 || "",
      addressLine2: address.addressLine2 || "",
      city: address.city || "",
      state: address.state || "",
      pinCode: address.pinCode || "",
      addressName: address.addressName || "",
    });
  };

  const handleSave = () => {
    if (!addressFormik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    }
    if (editingAddressIndex !== null) {
      // will make API call here releated to update address -- PUT //
      // updateAddressAPI(updatedAddress)
      //   .then((updatedData) => {
      //     const updatedAddresses = [...addresses];
      //     updatedAddresses[editingAddressIndex] = updatedData;
      //     setAddresses(updatedAddresses);
      //     showSnackbar("Address updated successfully!", "success");
      //   })
      //   .catch((error) => {
      //     showSnackbar("Failed to update address.", "error");
      //   });
      const updatedAddress = {
        ...addresses[editingAddressIndex],
        ...addressFormik.values,
      };
      const updatedAddresses = [...addresses];
      updatedAddresses[editingAddressIndex] = updatedAddress;
      setAddresses(updatedAddresses);
    } else {
      handleAddressSubmit();
    }

    setEditingAddressIndex(null);
    setIsAdding(false);
    showSnackbar("Address updated successfully!", "success");
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingAddressIndex(null);
    addressFormik.resetForm();
  };

  const handleDelete = (index) => {
    setDeleteAddressIndex(index);
    setIsConfirmingDelete(true);
  };

  const confirmDelete = () => {
    const updatedAddresses = addresses.filter(
      (_, idx) => idx !== deleteAddressIndex
    );
    setAddresses(updatedAddresses);
    setIsConfirmingDelete(false);
    showSnackbar("Address deleted successfully!", "success");
  };

  const cancelDelete = () => {
    setIsConfirmingDelete(false);
    setDeleteAddressIndex(null);
  };

  return (
    <div>
      <p className="font-semibold text-cello font-poppins text-xl">
        Address Details
      </p>
      <hr className="my-4 border-blue-gray-50 px-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 font-poppins">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <h3 className="font-bold text-lg mb-2 text-skyn">
              {address.addressName}
            </h3>
            <hr className="my-2 border-blue-gray-50 px-8" />
            <p className="text-gray-600 font-bold">{address.fullName}</p>
            <p className="text-gray-600 text-sm mt-2">
              {address.contactNumber}
            </p>
            <p className="text-gray-600 text-sm">{address.addressLine1}</p>
            <p className="text-gray-600 text-sm">{address.addressLine2}</p>
            <p className="text-gray-600 text-sm">
              {`${address.city}, ${address.state} - ${address.pinCode}`}
            </p>
            <hr className="my-4 border-blue-gray-50 px-8" />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleEdit(index)}
                className="flex items-center space-x-1 text-sm bg-skyn text-white hover:opacity-80 transition-all duration-300 px-4 py-2 rounded shadow-lg"
              >
                <FiEdit2 />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="flex items-center space-x-1 text-sm bg-red-600 text-white hover:opacity-80 transition-all duration-300 px-4 py-2 rounded shadow-lg"
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
      <AnimatePresence>
        {isConfirmingDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center place-content-center overflow-scroll"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg w-full max-w-lg"
            >
              <h3 className="font-bold text-lg mb-4">
                Are you sure you want to delete this address?
              </h3>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelDelete}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAdding && (
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
                      name="contactNumber"
                      maxLength={10}
                      regex={regex.numeric}
                      textFieldColorClass="shadow-insetLight"
                      inputClassName="!bg-transparent"
                      fieldWidth="w-full !mb-4"
                      value={addressFormik.values?.contactNumber}
                      onChange={addressFormik.handleChange}
                      handleBlur={addressFormik.handleBlur}
                      error={addressFormik.errors.contactNumber}
                      touched={addressFormik.touched.contactNumber}
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
                      // disabledField
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
                      // disabledField
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
                <h2 className="font-bold mb-4 text-lg">
                  Save Address As
                  <span className="text-xs text-bitterSweet">*</span>
                </h2>
                <div className="flex flex-col gap-2 md:!flex-row md:!space-x-4">
                  {addressTypes.map((type, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        addressFormik.setFieldValue("addressName", type)
                      }
                      className={`py-2 px-4 rounded-md text-sm font-medium transition-all border ${
                        addressFormik.values.addressName === type
                          ? "bg-skyn text-white border-skyn"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </form>
              <div className="flex flex-col md:!flex-row justify-end gap-4 mt-5">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-skyn text-white px-4 py-2 rounded-md hover:bg-skyn-dark hover:opacity-80"
                  onClick={handleSave}
                >
                  {editingAddressIndex !== null
                    ? "Save Changes"
                    : "Add Address"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
