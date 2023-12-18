import trophy from "../assets/quiz-complete.png";
import DUMMY_QUESTION from "../questions";
import { useContext } from "react";
import QuizContext from "../store/quiz-context";
import classes from "./Summary.module.css";
import click from "../function/Click";
const Summary = ({ userAnswers }) => {
  const quizCtx = useContext(QuizContext);
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === DUMMY_QUESTION[index].correctAnswer
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const inCorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  const resetQuiz = () => {
    quizCtx.resetQuiz();
    click();
  };
  return (
    <div id={classes.summary}>
      <img src={trophy}></img>
      <h2>Quiz Complete</h2>
      <div id={`${classes["summary-stats"]}`}>
        <p>
          <span className={`${classes["summary-stats"]} ${classes.number}`}>
            {skippedAnswersShare}%
          </span>
          <span className={`${classes["summary-stats"]} ${classes.text}`}>
            Skipped
          </span>
        </p>
        <p>
          <span className={`${classes["summary-stats"]} ${classes.number}`}>
            {correctAnswersShare}%
          </span>
          <span className={`${classes["summary-stats"]} ${classes.text}`}>
            answered correctly
          </span>
        </p>
        <p>
          <span className={`${classes["summary-stats"]} ${classes.number}`}>
            {inCorrectAnswersShare}%
          </span>
          <span className={`${classes["summary-stats"]} ${classes.text}`}>
            answered incorrectly
          </span>
        </p>
      </div>
      <button onClick={resetQuiz}>RESTART QUIZ</button>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = `${classes["user-answer"]}`;
          if (answer === null) {
            cssClass += ` ${classes.skipped}`;
          } else if (answer === DUMMY_QUESTION[index].correctAnswer) {
            cssClass += ` ${classes.correct}`;
          } else {
            cssClass += ` ${classes.wrong}`;
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className={classes.question}>{DUMMY_QUESTION[index].text}</p>
              <p className={`${classes["your-answer"]}`}>Your answer</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
              <p className={`${classes["your-answer"]}`}>Correct answer</p>
              <p className={`${classes["answer-correct"]}`}>
                {DUMMY_QUESTION[index].correctAnswer}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Summary;
