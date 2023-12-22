import DUMMY_QUESTION from "../questions";
import { useCallback, useContext } from "react";
import Question from "./Question";
import Summary from "./Summary";
import QuizContext from "../store/quiz-context";
import "../styles/Quiz/Quiz.css";
const Quiz = () => {
  const quizCtx = useContext(QuizContext);
  let userAnswers = quizCtx.userAnswer;
  const activeQuestionIndex = userAnswers.length;

  //  lưu các đáp án vào array
  const handlerSelectAnswer = useCallback((selectedAnswer) => {
    quizCtx.addAnswer(selectedAnswer);
  }, []);

  // lưu đáp án null vào array answers khi users k chọn đáp án
  const handleSkipAnswer = useCallback(
    () => handlerSelectAnswer(null),
    [handlerSelectAnswer]
  );

  // nếu hoàn thành quiz sẽ trả về quiz complete
  const quizComplete = activeQuestionIndex === DUMMY_QUESTION.length;
  if (quizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // key thay doi se chay lai toan bo component
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelectAnswer={handlerSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
};
export default Quiz;
