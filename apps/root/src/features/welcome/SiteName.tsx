import { motion } from 'framer-motion';

export default function SiteName() {
  return (
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className="from-primary to-accent w-max bg-gradient-to-r bg-clip-text text-8xl font-extrabold text-transparent"
      initial={{ opacity: 0, y: -20 }}
    >
      aikoicu
    </motion.h1>
  );
}
