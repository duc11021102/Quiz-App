import { useState } from "react";
import React from "react";
const QuizContext = React.createContext({
  userAnswer: [],
  isStart: false,
  addAnswer: (answer) => {},
  startQuiz: () => {},
  resetQuiz: () => {},
});

export const QuizContextProvider = (props) => {
  const [isStart, setIsStart] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const addAnswerHandler = (answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  };
  const resetQuizHandler = () => {
    setIsStart(false);
    setUserAnswers([]);
  };

  const startQuizHandler = () => {
    console.log("start");
    setIsStart(true);
  };

  return (
    <QuizContext.Provider
      value={{
        isStart: isStart,
        userAnswer: userAnswers,
        addAnswer: addAnswerHandler,
        resetQuiz: resetQuizHandler,
        startQuiz: startQuizHandler,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
