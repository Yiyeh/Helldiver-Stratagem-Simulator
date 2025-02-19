import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 tracking-widest text-center"
    >
      HELLDIVERS STRATAGEM SIMULATOR
    </motion.h1>
  );
};

export default Header;