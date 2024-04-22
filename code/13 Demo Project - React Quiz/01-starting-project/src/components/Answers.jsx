import {useRef} from "react";

export const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
      <ul id="answers">
        {shuffledAnswers.current.map((ans) => {
              const isSelected = selectedAnswer === ans;
              let cssClass = "";

              if (answerState === "answered" && isSelected) {
                cssClass = "selected";
              }

              if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                cssClass = answerState;
              }

              return (
                  <li key={ans} className="answer">
                    <button onClick={() => onSelect(ans)} className={cssClass} disabled={answerState !== ""}>{ans}</button>
                  </li>);
            }
        )}
      </ul>
  )
}
