import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPricingTable = ({ pricingContent, treatmentName }) => {
  const navigate = useNavigate();

  const handleBookNow = (
    goToStep,
    packageName,
    isMedifacialPackage,
    label,
    packagePrice
  ) => {
    sessionStorage.setItem(
      "treatmentName",
      isMedifacialPackage ? label : treatmentName
    );
    sessionStorage.setItem("packageName", packageName);
    sessionStorage.setItem("packagePrice", packagePrice);
    sessionStorage.setItem("currentBookStep", goToStep ? 2 : 1);
    navigate("/book-now");
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
                ₹{treatment.pricing}{" "}
                {treatment.multiplSessions && "- (4+1) session"}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                <button
                  className="bg-skyn text-white px-4 py-1 rounded hover:opacity-80 shadow-lg"
                  onClick={() =>
                    handleBookNow(
                      treatment.Step3,
                      treatment.packageName,
                      treatment.isMedifacialPackage,
                      treatment.label,
                      treatment.pricing
                    )
                  }
                >
                  Book Now
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
