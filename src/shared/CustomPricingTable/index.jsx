import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPricingTable = ({ pricingContent }) => {
  const navigate = useNavigate();

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
          {pricingContent.map((treatment) => (
            <tr key={treatment.id} className="text-center">
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                {treatment.name}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                {treatment.price}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-coal">
                <button
                  className="bg-skyn text-white px-4 py-1 rounded hover:opacity-80"
                  onClick={() => navigate(treatment.route)}
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
