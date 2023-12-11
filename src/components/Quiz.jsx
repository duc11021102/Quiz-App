import { useState } from "react";
import DUMMY_QUESTION from "../questions";
import trophy from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  //  lưu các đáp án vào array
  const handlerSelectAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
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

  // xáo trộn các đáp án
  const shuffledAnswers = [...DUMMY_QUESTION[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  // key thay doi se chay lai toan bo component
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{DUMMY_QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handlerSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Quiz;
