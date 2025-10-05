// components/Loader.js
"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-16 h-16 border-4 border-[#AA7021] border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}
