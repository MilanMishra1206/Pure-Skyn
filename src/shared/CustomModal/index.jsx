import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function CustomModal({
  isOpen,
  setIsOpen,
  buttonText,
  antiButtonText,
  children,
  classes,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-slate-900/20 backdrop-blur p-4 md:!p-8 fixed inset-0 z-50 grid place-items-center overflow-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "-12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.35 }}
            className={`bg-gradient-to-br bg-white text-white px-5 rounded-lg w-full max-w-lg shadow-xl cursor-default relative h-100 overflow-scroll ${classes}`}
          >
            <div className="relative z-10">
              <div className="bg-skyn w-16 h-16 mb-2 rounded-full text-3xl text-white grid place-items-center mx-auto mt-4">
                <FiAlertCircle />
              </div>
              {children}
              <div className="flex justify-center gap-2 mb-5">
                {buttonText && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="border rounded-lg shadow !bg-skyn text-white hover:bg-white/10 transition-colors font-semibold w-full md:!w-50 py-2"
                  >
                    {buttonText}
                  </button>
                )}
                {antiButtonText && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-coal font-semibold w-full py-2 rounded"
                  >
                    {antiButtonText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
