"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const typeStyles = {
  success: "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700",
  error: "bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700",
  info: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700",
};

const fadeInBlur = {
  initial: { opacity: 0, filter: "blur(10px)", y: 10, rotate: 0 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    rotate: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message = "This is an alert message.",
  onClick,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "border px-4 py-3 flex gap-x-2 items-center rounded-2xl text-sm",
        typeStyles[type],
        className
      )}
      role="alert"
      variants={fadeInBlur}
      initial="initial"
      animate="animate"
      whileHover={{
        scale: 1.01,
        rotate: 1,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      onClick={onClick}
    >
      <span className="font-bold capitalize">{type}:</span>
      <span>{message}</span>
    </motion.div>
  );
};

export default Alert;
