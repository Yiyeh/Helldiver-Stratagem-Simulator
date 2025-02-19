interface StartScreenProps {
    startGame: () => void;
  }
  
  const StartScreen = ({ startGame }: StartScreenProps) => {
    return (
      <div className="border-4 border-yellow-400 rounded-lg p-6 text-center bg-gray-800 shadow-lg shadow-yellow-400/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
          Welcome Helldiver
        </h2>
        <p className="text-xl md:text-2xl text-yellow-300 font-bold mb-6">
          Ready to start coding?
        </p>
        <button
          onClick={startGame}
          className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold text-xl rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Start Coding
        </button>
      </div>
    );
  };
  
  export default StartScreen;