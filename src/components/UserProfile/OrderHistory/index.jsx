import React from "react";

export default function OrderHistory({ orderHistory }) {
  return (
    <div>
      <p className="font-semibold text-cello font-poppins text-xl">My Orders</p>
      <hr className="my-4 border-blue-gray-50 px-8" />
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
