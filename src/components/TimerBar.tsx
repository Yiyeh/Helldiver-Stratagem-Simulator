interface TimerBarProps {
    timeRemaining: number;
  }
  
  const TimerBar = ({ timeRemaining }: TimerBarProps) => {
    return (
      <div className="w-full max-w-2xl bg-gray-800 rounded-full h-2.5 mb-6">
        <div
          className="bg-yellow-400 h-2.5 rounded-full"
          style={{ width: `${(timeRemaining / 60) * 100}%` }}
        ></div>
      </div>
    );
  };
  
  export default TimerBar;