import React from "react";
import FadedLineBreak from "../../../shared/CustomHrTag";

export default function OrderHistory({ orderHistory }) {
  return (
    <div className="p-4">
      <p className="font-semibold text-cello font-poppins text-xl text-center">
        My Orders
      </p>
      <FadedLineBreak />
      <div className="grid grid-cols-1 gap-4">
        {orderHistory.map((order) => (
          <div key={order.id} className="flex flex-col">
            <span className="text-black">{order.product}</span>
            <span className="text-kashmirBlue">
              Ordered on - {order.orderedOn}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
