import { motion } from 'framer-motion';

interface StratagemDisplayProps {
  sequence: string[];
  inputSequence: string[];
}

const StratagemDisplay = ({ sequence, inputSequence }: StratagemDisplayProps) => {
  return (
    <div className="flex space-x-4 justify-center items-center">
      {sequence.map((step, index) => (
        <motion.div
          key={index}
          className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-2 font-bold text-3xl bg-gray-700 shadow-lg rounded-md ${
            inputSequence[index] === step ? 'border-green-500' : 'border-red-500'
          }`}
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
};

export default StratagemDisplay;