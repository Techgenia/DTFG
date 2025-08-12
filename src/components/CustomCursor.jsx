import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-7 h-7 border-2 border-blue-800 rounded-full z-[9999] pointer-events-none flex items-center justify-center shadow-[0_0_20px_4px_rgba(59,130,246,0.5)]"
      animate={{
        x: cursorPosition.x - 20,
        y: cursorPosition.y - 20,
      }}
      transition={{ ease: "linear", duration: 0.1 }}
    >
      <div className="w-2 h-2 bg-blue-900 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
    </motion.div>
  );
};

export default CustomCursor;
