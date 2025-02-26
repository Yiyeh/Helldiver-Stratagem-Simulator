import { motion } from "framer-motion";
import { Stratagem } from "../data/stratagems";
import StratagemDisplay from "./StratagemDisplay";

interface GameScreenProps {
  currentStratagem: Stratagem | null;
  inputSequence: string[];
  score: number;
  bestScore: number;
}

const GameScreen = ({ currentStratagem, inputSequence, score, bestScore }: GameScreenProps) => {
  return (
    < div
      className="border-8 border-yellow-400 rounded-lg p-6 text-center bg-gray-800 shadow-lg shadow-yellow-400/30"
    >
      {currentStratagem ? (
        <div className="flex flex-col items-center space-y-4">
          {/* Icono y nombre */}
          <div className="flex items-center space-x-4">
            <motion.img
              src={`/Helldivers/icons/${currentStratagem.icon}.webp`}
              alt={`${currentStratagem.name} icon`}
              className="w-12 h-12 border-4 border-yellow-400 object-contain"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />

           

            <div
              className="text-2xl md:text-3xl font-bold text-yellow-300"
              >
              {currentStratagem.name.toUpperCase()}
            </div>
          </div>

          {/* Secuencia de entrada */}
          <motion.div
            key={currentStratagem?.name} // Clave única para animar cambios de estratagema
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}>
            <StratagemDisplay sequence={currentStratagem.sequence} inputSequence={inputSequence} />

          </motion.div>

          {/* Información adicional */}
          <div className="grid grid-cols-2 gap-4 text-left w-full">
            <InfoRow label="Cooldown" value={currentStratagem.cooldown} />
            <InfoRow label="Uses" value={currentStratagem.uses} />
            <InfoRow label="Activation" value={currentStratagem.activation} />
          </div>
          <p>{`Score: ${score}`}</p>
          <p>{`Best Score: ${bestScore}`}</p>
        </div>
      ) : (
        <p className="text-xl text-yellow-300">No stratagem selected</p>
      )}
    </div>
  );
};

// Componente auxiliar para mostrar filas de información
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-yellow-300">
    <span className="font-bold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default GameScreen;
