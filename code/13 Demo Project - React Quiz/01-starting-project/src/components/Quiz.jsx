import {useCallback, useState} from "react";
import Questions from "../questions.js";
import {Question} from "./Question.jsx";
import {Summary} from "./Summary.jsx";

export const Quiz = () => {

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback((ans) => {

    setUserAnswers((pre) => {
      return [...pre, ans];
    });

  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (isQuizComplete) {
    return (<Summary userAnswers={userAnswers}/>)
  }

  return <>
    <div id="quiz">
      <Question key={activeQuestionIndex} index={activeQuestionIndex}
                onSkipAnswer={handleSkipAnswer} onSelectAnswer={handleSelectAnswer}
      />
    </div>
  </>
}
