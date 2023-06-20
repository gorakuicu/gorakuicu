import { AnimatePresence, motion } from 'framer-motion';

export default function Spinner() {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute blur-md">
            <div className="from-primary-400 via-accent to-accent shadow-2x h-12 w-12 animate-spin rounded-full bg-gradient-to-r shadow-2xl" />
          </div>
          <div className="from-primary-400 via-accent to-accent shadow-2x h-12 w-12 animate-spin rounded-full bg-gradient-to-r shadow-2xl">
            <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
