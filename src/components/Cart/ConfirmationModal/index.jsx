import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Resources from "../../../config/Resources";

function ConfirmationModal({
  removeMessage,
  handleCancel,
  confirmRemove,
  isEmptyCart,
}) {
  return (
    <AnimatePresence>
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
          className="bg-white p-8 rounded-lg w-full max-w-lg"
        >
          <div className="flex justify-center mb-4">
            <img
              src={Resources.images.Common.removeItem}
              className="h-16 mb-3"
            />
          </div>
          <h3 className="font-bold text-lg mb-4 text-center text-coal">
            {removeMessage}
          </h3>
          <div className="flex flex-col md:!flex-row justify-center gap-4 mt-4">
            <button
              onClick={handleCancel}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={confirmRemove}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              {isEmptyCart ? "Empty" : "Remove"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ConfirmationModal;
