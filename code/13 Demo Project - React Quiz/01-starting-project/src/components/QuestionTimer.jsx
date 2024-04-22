import {useEffect, useState} from "react";

export const QuestionTimer = ({timeout, onTimeout, mode}) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);

  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const interval = setInterval(() => {
      setRemainingTime(pre => pre - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>
}
