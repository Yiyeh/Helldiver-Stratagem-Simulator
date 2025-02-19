import { Stratagem } from '../data/stratagems';
import StratagemDisplay from './StratagemDisplay';

interface GameScreenProps {
  currentStratagem: Stratagem | null;
  inputSequence: string[];
  score: number;
  bestScore: number;
}

const GameScreen = ({ currentStratagem, inputSequence, score, bestScore }: GameScreenProps) => {
  return (
    <div className="border-4 border-yellow-400 rounded-lg p-6 text-center bg-gray-800 shadow-lg shadow-yellow-400/30">
      {currentStratagem && (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
            {currentStratagem.name.toUpperCase()}
          </h2>
          <StratagemDisplay sequence={currentStratagem.sequence} inputSequence={inputSequence} />
          <p className="mt-4 text-xl md:text-2xl text-yellow-300 font-bold">
            Score: {score}
          </p>
          <p className="mt-4 text-xl md:text-2xl text-yellow-300 font-bold">
            Best Score: {bestScore}
          </p>
        </>
      )}
    </div>
  );
};

export default GameScreen;