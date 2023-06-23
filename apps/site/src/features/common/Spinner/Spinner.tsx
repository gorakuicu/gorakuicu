import { AnimatePresence, motion } from 'framer-motion';

const spinnerKey = 'spinner';
const initialOpacity = { opacity: 0 };
const animateOpacity = { opacity: 1 };
const exitOpacity = { opacity: 0 };
const transitionDuration = { duration: 0.5 };
const spinnerClass = 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform';
const spinnerStyle =
  'from-primary-400 via-accent to-accent shadow-2x h-12 w-12 animate-spin rounded-full bg-gradient-to-r shadow-2xl';
const spinnerInnerStyle =
  'absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black';

export default function Spinner() {
  return (
    <AnimatePresence>
      <motion.div
        key={spinnerKey}
        animate={animateOpacity}
        className={spinnerClass}
        exit={exitOpacity}
        initial={initialOpacity}
        transition={transitionDuration}
      >
        <div className="relative">
          <div className="absolute blur-md">
            <div className={spinnerStyle} />
          </div>
          <div className={spinnerStyle}>
            <div className={spinnerInnerStyle} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
