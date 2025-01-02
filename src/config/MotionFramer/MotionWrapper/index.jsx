import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 35, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
