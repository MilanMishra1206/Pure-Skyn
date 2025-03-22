import { AnimatePresence, motion } from "framer-motion";

function CustomPackageTermsAndConditions({
  isOpenTandCModal,
  setIsOpenTandCModal,
  buttonText,
  antiButtonText,
  packageName,
  tandCContent,
}) {
  return (
    <AnimatePresence>
      {isOpenTandCModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "-12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.35 }}
            className={`bg-gradient-to-br bg-white text-white px-5 rounded-lg w-full max-w-lg shadow-xl cursor-default h-100 overflow-scroll`}
          >
            <div className="p-3 flex flex-col justify-between">
              <div className="text-xl text-center text-coal font-bold">
                {packageName}
              </div>
              <div className="text-coal">{tandCContent}</div>
              <div className="flex justify-center gap-2 mb-5">
                {buttonText && (
                  <button
                    onClick={() => setIsOpenTandCModal(false)}
                    className="border rounded-lg shadow !bg-skyn text-white hover:bg-white/10 transition-colors font-semibold w-full md:!w-50 py-2 hover:!opacity-80"
                  >
                    {buttonText}
                  </button>
                )}
                {antiButtonText && (
                  <button
                    onClick={() => setIsOpenTandCModal(false)}
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

export default CustomPackageTermsAndConditions;
