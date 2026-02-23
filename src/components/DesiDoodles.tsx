import { motion } from "framer-motion";

// SVG doodle illustrations for the Desi Maximalism aesthetic
export const DoodleStar = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    initial={{ rotate: 0, scale: 0.8 }}
    animate={{ rotate: 360, scale: [0.8, 1, 0.8] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <path
      d="M30 2L36 22L56 22L40 34L46 54L30 42L14 54L20 34L4 22L24 22Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      strokeDasharray="4 3"
    />
  </motion.svg>
);

export const DoodleCircle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    <circle cx="30" cy="30" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.5" />
  </motion.svg>
);

export const DoodleZigzag = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 120 30"
    fill="none"
    className={className}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
  >
    <motion.path
      d="M2 15L15 5L30 25L45 5L60 25L75 5L90 25L105 5L118 15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </motion.svg>
);

export const DoodleArrow = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 80 40"
    fill="none"
    className={className}
    animate={{ x: [0, 5, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M5 20C15 20 25 10 40 10C55 10 60 20 75 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M65 14L75 20L65 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </motion.svg>
);

export const DoodleSparkle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M20 2L23 17L38 20L23 23L20 38L17 23L2 20L17 17Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
  </motion.svg>
);

export const DoodleHanger = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 60 50"
    fill="none"
    className={className}
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <circle cx="30" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M30 13V18L8 35H52L30 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="8" y1="35" x2="52" y2="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </motion.svg>
);

export const DoodleScissors = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 50 50"
    fill="none"
    className={className}
    animate={{ rotate: [0, -5, 5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <circle cx="14" cy="38" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="36" cy="38" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M18 34L36 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 34L14 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </motion.svg>
);

// Floating doodle wrapper for easy placement
export const FloatingDoodle = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
