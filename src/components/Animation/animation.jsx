import { motion } from "framer-motion";

function Animation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    ></motion.div>
  );
}

export default Animation;
