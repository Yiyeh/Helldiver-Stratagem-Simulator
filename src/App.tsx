import { useState, useEffect } from 'react';
import Header from './components/Header';
import TimerBar from './components/TimerBar';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import FeedbackMessage from './components/FeedbackMessage';
import { stratagems, Stratagem } from './data/stratagems';

const App = () => {
  const [currentStratagem, setCurrentStratagem] = useState<Stratagem | null>(null);
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [canPlay, setCanPlay] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Cargar el mejor puntaje desde localStorage al iniciar
  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore');
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore, 10));
    }
  }, []);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      startNewStratagem();
    }
  }, [gameStarted, gameOver]);

  useEffect(() => {
    let intervalId: number;
    if (gameStarted && !gameOver) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) return prevTime - 1;
          clearInterval(intervalId);
          setMessage('Time out!');
          setCanPlay(false);
          setGameOver(true);
          updateBestScore();
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted, gameOver]);

  const updateBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('bestScore', score.toString());
    }
  };

  const startNewStratagem = () => {
    const randomIndex = Math.floor(Math.random() * stratagems.length);
    setCurrentStratagem(stratagems[randomIndex]);
    setInputSequence([]);
    setMessage('');
    setCanPlay(true);
    setIsTransitioning(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!canPlay || isTransitioning || gameOver || !gameStarted) return;

    let key = event.key.toUpperCase();
    const arrowKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT'];
    const wasdKeys = ['W', 'A', 'S', 'D'];

    if (arrowKeys.includes(key) || wasdKeys.includes(key)) {
      switch (key) {
        case 'ARROWUP':
        case 'W':
          key = '↑';
          break;
        case 'ARROWDOWN':
        case 'S':
          key = '↓';
          break;
        case 'ARROWLEFT':
        case 'A':
          key = '←';
          break;
        case 'ARROWRIGHT':
        case 'D':
          key = '→';
          break;
      }

      const audioBeep = new Audio('/sounds/beep.mp3');
      audioBeep.volume = 0.5;
      audioBeep.play();

      const newSequence = [...inputSequence, key];
      setInputSequence(newSequence);

      if (currentStratagem) {
        const correctSequence = currentStratagem.sequence;

        if (newSequence.join('') === correctSequence.join('')) {
          setMessage('Code Accepted');
          setScore((prevScore) => prevScore + 1);
          updateBestScore();
          const audioLevelUp = new Audio('/sounds/level-up.mp3');
          audioLevelUp.volume = 1;
          audioLevelUp.play();
          setIsTransitioning(true);
          setTimeout(() => {
            setMessage('');
            startNewStratagem();
          }, 1000);
        } else if (!correctSequence.join('').startsWith(newSequence.join(''))) {
          setMessage('Code Denied.');
          setIsTransitioning(true);
          setTimeout(() => {
            setInputSequence([]);
            startNewStratagem();
          }, 1000);
        }
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeRemaining(60);
    setCanPlay(true);
  };

  const restartGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeRemaining(60);
    setCanPlay(true);
    setIsTransitioning(false);
    startNewStratagem();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputSequence, canPlay, isTransitioning, gameOver, gameStarted]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 font-mono px-6 relative overflow-hidden border-4 border-yellow-400">
      <Header />
      {gameStarted ? (
        <>
          <TimerBar timeRemaining={timeRemaining} />
          {!gameOver ? (
            <GameScreen
              currentStratagem={currentStratagem}
              inputSequence={inputSequence}
              score={score}
              bestScore={bestScore}
            />
          ) : (
            <GameOverScreen
              score={score}
              bestScore={bestScore}
              restartGame={restartGame}
            />
          )}
          <FeedbackMessage message={message} />
        </>
      ) : (
        <StartScreen startGame={startGame} />
      )}
    </div>
  );
};

export default App;