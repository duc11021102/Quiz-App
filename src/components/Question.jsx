import classes from "./Question.module.css";
import Answer from "./Answer";
import DUMMY_QUESTION from "../questions";
import { useState, useContext } from "react";
import QuestionTimer from "./QuestionTimer";
import QuizContext from "../store/quiz-context";
const Question = (props) => {
  const quizCtx = useContext(QuizContext);
  const activeQuestionIndex = quizCtx.userAnswer.length;
  const handleSkipAnswer = props.handleSkipAnswer;

  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  // đặt trạng thái mặc định là 10s
  let timer = 10000;
  // sau khi chọn câu sẽ đợi 1s để biết câu đấy đúng hay sai
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  // sau khi biết đúng hay sai thì sẽ đợi 2s để chuyển sang câu khác
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handlerSelectAnswer(userAnswer) {
    // thay đổi màu của answer sau khi click
    setAnswer({
      selectedAnswer: userAnswer,
      isCorrect: null,
    });
    // sau 1 giây sẽ biết câu đấy đúng hay sai
    // kiểm tra xem câu đấy có đúng với đáp án k
    setTimeout(() => {
      setAnswer({
        selectedAnswer: userAnswer,
        isCorrect:
          DUMMY_QUESTION[activeQuestionIndex].correctAnswer === userAnswer,
      });
      // sau hai giây sẽ chuyển sang câu khác
      setTimeout(() => {
        quizCtx.addAnswer(userAnswer);
      }, 2000);
    }, 1000);
  }

  // điều chỉnh answer state
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id={classes.question}>
      <QuestionTimer
        timeout={timer}
        key={timer}
        onTimeout={answer.selectedAnswer === "" ? handleSkipAnswer : null}
        mode={answerState}
      />
      <h2>{DUMMY_QUESTION[activeQuestionIndex].text}</h2>
      <ul id={classes.answers}>
        {DUMMY_QUESTION[activeQuestionIndex].answers.map((a) => {
          return (
            <Answer
              key={a}
              answerState={answerState}
              answer={a}
              selectedAnswer={answer.selectedAnswer}
              onhandlerSelectAnswer={handlerSelectAnswer}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Question;
