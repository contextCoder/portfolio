import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Card({ title, path, color }) {
  return (
    <motion.div
      whileHover={{ rotate: 8, scale: 1.1 }}
      whileTap={{ scale: 0.95, rotate: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`w-56 h-56 md:w-64 md:h-64 rounded-2xl shadow-2xl 
      cursor-pointer bg-gradient-to-br ${color} 
      transition-transform flex items-center justify-center`}
    >
      <Link to={path} className="text-2xl font-bold text-white drop-shadow-lg text-center">
        {title}
      </Link>
    </motion.div>
  );
}
