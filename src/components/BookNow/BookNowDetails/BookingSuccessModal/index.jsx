import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import {
  convertToIndianTime,
  formatDateMMDDYYYY,
  SERVICE_MAP,
} from "../../../../helpers/LaserServices";

function BookingSuccessModal({
  handlePrimaryButtonClick,
  bookingData,
  userProfile,
}) {
  if (!bookingData) return null;

  const { bookingId, userInfo, servicesBooked, payment } = bookingData;

  const matchedAddress = userProfile?.addresses?.find(
    (addr) => addr.id === userInfo.address
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900/20 backdrop-blur fixed inset-0 z-50 flex items-center justify-center px-4 font-poppins"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg w-full max-w-lg h-[90vh] flex flex-col"
        >
          <div className="overflow-y-auto p-6">
            <div className="flex flex-col items-center mb-6">
              <FaCheckCircle className="text-green-700 text-5xl mb-4" />
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Booking Confirmed!
              </h1>
              <p className="text-gray-600 text-sm text-center">
                Your appointment has been successfully scheduled.
              </p>
            </div>
            <div className="flex gap-2 items-center bg-gray-50 rounded-lg shadow-md p-4 mb-6">
              <p className="text-sm text-gray-600">Booking ID</p>
              <p className="text-lg font-bold text-denim">{bookingId}</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-6 text-sm space-y-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                User Details
              </h2>
              <div className="grid lg:!grid-cols-2 gap-2 mt-4">
                <span>
                  <strong>Name:</strong> {userInfo?.name}
                </span>
                <span>
                  <strong>Email:</strong> {userInfo?.email}
                </span>
                <span>
                  <strong>Mobile:</strong> {userInfo?.mobile}
                </span>
                <span className="font-medium text-coal">
                  <strong>Address:</strong> {matchedAddress?.addressLine1},{" "}
                  {matchedAddress?.addressLine2}
                </span>
                <span className="font-medium text-coal">
                  <strong>City:</strong> {userInfo.city}
                </span>
                <span className="font-medium text-coal">
                  <strong>Pin Code:</strong> {matchedAddress?.pinCode}
                </span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-6 text-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Services Booked
              </h2>
              {servicesBooked?.map((service, index) => (
                <div
                  key={index}
                  className="mb-4 border-b pb-4 last:border-b-0 space-y-2 "
                >
                  <p>
                    <strong>Service Name:</strong>{" "}
                    {SERVICE_MAP[service.subServiceId] || "Unknown Service"}
                  </p>
                  {service.sessions?.length > 0 && (
                    <div className="mt-2">
                      <p className="font-bold text-sm text-gray-700 mb-1">
                        Sessions:
                      </p>
                      {service.sessions.map((session, i) => (
                        <div key={i} className="text-sm text-gray-600 ml-4">
                          <p>
                            • {formatDateMMDDYYYY(session.treatmentDate)} at{" "}
                            {session.appointmentTime}
                          </p>
                        </div>
                      ))}
                      <p className="text-green-700 font-poppins mt-2 text-xs">
                        You can update the dates for other sessions from Profile
                        section under My Appointments*
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {payment && (
              <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Payment Details
                </h2>
                <p>
                  <strong>Amount:</strong> ₹{payment.amount}
                </p>
                <p>
                  <strong>Transaction ID:</strong> {payment.transactionId}
                </p>
                <p>
                  <strong>Mode:</strong> {payment.paymentMode}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {formatDateMMDDYYYY(payment.paymentDate)}
                </p>
                <p>
                  <strong>Time:</strong>{" "}
                  {convertToIndianTime(payment.paymentTime)}
                </p>
              </div>
            )}
          </div>
          <div className="border-t p-4 flex justify-center">
            <button
              onClick={handlePrimaryButtonClick}
              className="text-white px-4 py-2 rounded-md bg-denim hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BookingSuccessModal;
