import React from "react";
import { motion } from "framer-motion";

const LogoLoader = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{
        type: "tween",
        duration: 0.6,
        ease: "easeInOut"
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-solar-gold"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Agri-Sun Ethiopia Logo"
            className="w-24 h-24 mx-auto bg-white rounded-full p-3 shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoLoader;
