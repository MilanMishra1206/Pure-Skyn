import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToServicesCart } from "../../redux/Actions";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

const CustomPricingTable = ({ pricingContent, treatmentName }) => {
  const showSnackbar = useAppSnackbar();
  const [disabledButtons, setDisabledButtons] = useState({});
  const servicesCart = useSelector((state) => state.servicesCart.services);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedDisabledButtons = {};

    pricingContent.forEach((treatment) => {
      const isAlreadyInCart = servicesCart.some(
        (item) => item.subServiceId === treatment.subServiceId
      );

      updatedDisabledButtons[treatment.subServiceId] = isAlreadyInCart;
    });

    setDisabledButtons(updatedDisabledButtons);
  }, [servicesCart, pricingContent]);

  const handleAddToCart = (
    label,
    packageName,
    packagePrice,
    serviceId,
    subServiceId,
    featureName,
    selectedPackageImg,
    isMediFacial
  ) => {
    const newPackage = {
      treatmentName: isMediFacial ? label : treatmentName,
      packageName,
      packagePrice,
      serviceId,
      subServiceId,
      featureName,
      selectedPackageImg,
    };
    dispatch(addToServicesCart(newPackage));
    showSnackbar("Service Added to Cart", "success");
  };

  return (
    <div className="overflow-x-auto w-full mt-5 mb-5 rounded-2 shadow-lg">
      <table className="border border-gray-300 font-bold min-w-full text-white">
        <thead className="!bg-coal">
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-center font-semibold">
              Treatment
            </th>
            <th className="px-4 py-2 border-b border-gray-300 text-center font-semibold">
              Price
            </th>
            <th className="px-4 py-2 border-b border-gray-300 text-center font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingContent.map((treatment, idx) => (
            <tr key={idx} className="text-center">
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                {treatment.label}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                ₹{treatment.pricing}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                <button
                  className={`bg-skyn text-white px-4 py-1 rounded hover:opacity-80 shadow-lg ${
                    disabledButtons[treatment.subServiceId]
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={disabledButtons[treatment.subServiceId]}
                  onClick={() =>
                    handleAddToCart(
                      treatment.label,
                      treatment.packageName,
                      treatment.pricing,
                      treatment.serviceId,
                      treatment.subServiceId,
                      treatment.featureName,
                      treatment.selectedPackageImg,
                      treatment.isMediFacial ?? false
                    )
                  }
                >
                  {disabledButtons[treatment.featureName]
                    ? "Added to Cart"
                    : "Add To Cart"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomPricingTable;
