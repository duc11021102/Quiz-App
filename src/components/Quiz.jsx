import { useState } from "react";
import DUMMY_QUESTION from "../questions";
import trophy from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";
import Question from "./Question";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  //  lưu các đáp án vào array
  const handlerSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  // lưu đáp án null vào array answers khi users k chọn đáp án
  const handleSkipAnswer = useCallback(
    () => handlerSelectAnswer(null),
    [handlerSelectAnswer]
  );

  // nếu hoàn thành quiz sẽ trả về quiz complete
  const quizComplete = activeQuestionIndex === DUMMY_QUESTION.length;
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={trophy}></img>
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  // key thay doi se chay lai toan bo component
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelectAnswer={handlerSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
};
export default Quiz;
