import {useRef, useState} from "react";
import {ResultDialog} from "./ResultDialog.jsx";

export const TimeChallenger = ({title, targetTime}) => {

  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;


  if (timeRemaining <= 0) {
    clearTimeout(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(pre => pre - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (<>
    <ResultDialog targetTime={targetTime} ref={dialog} timeRemaining={timeRemaining} onReset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} seconds {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} challenge</button>
      </p>
      <p>
        {timerIsActive ? "Time is running" : "Time is inactive"}
      </p>
    </section>
  </>);
}
