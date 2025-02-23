interface GameOverScreenProps {
  score: number;
  bestScore: number;
  restartGame: () => void;
}

const GameOverScreen = ({ score, bestScore, restartGame }: GameOverScreenProps) => {
  return (
    <div className="flex flex-col border-4 border-yellow-400 rounded-lg p-6 text-center bg-gray-800 shadow-lg shadow-yellow-400/30">
      <h2 className=" text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
        Game Over
      </h2>
      <p className="text-xl md:text-2xl text-yellow-300 font-bold">
        Final Score: {score}
      </p>
      <p className="text-xl md:text-2xl text-yellow-300 font-bold">
        Best Score: {bestScore}
      </p>
      <button
        onClick={restartGame}
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold text-xl rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Restart Game
      </button>
      <button
        onClick={() => window.open('https://buymeacoffee.com/yiyeh', '_blank')}
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold text-xl rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Buy me a Liber-tea ☕ for democratic support
      </button>
    </div>
  );
};

export default GameOverScreen;