import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export function AnimatedButton({ children }: PropsWithChildren) {
  return (
    <motion.button whileTap={{ scale: 0.97 }} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      {children}
    </motion.button>
  );
}
