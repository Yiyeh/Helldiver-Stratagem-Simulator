import { motion } from 'framer-motion';

interface FeedbackMessageProps {
  message: string;
}

const FeedbackMessage = ({ message }: FeedbackMessageProps) => {
  if (!message) return null;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-gray-900 px-4 py-2 rounded-lg ${
        message === 'Code Accepted' ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {message}
    </motion.p>
  );
};

export default FeedbackMessage;