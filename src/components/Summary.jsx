import trophy from "../assets/quiz-complete.png";
import DUMMY_QUESTION from "../questions";
import { useContext } from "react";
import QuizContext from "../store/quiz-context";
import click from "../function/Click";
import "../styles/Summary/Summary.css";
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

  const array = [
    { parameter: skippedAnswersShare, type: "Skipped" },
    { parameter: correctAnswersShare, type: "answered correctly" },
    { parameter: inCorrectAnswersShare, type: "answered incorrectly" },
  ];
  return (
    <div id="summary">
      <img src={trophy}></img>
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        {array.map((type) => (
          <p key={type}>
            <span className="summary-stats number">{type.parameter}%</span>
            <span className="summary-stats text">{type.type}</span>
          </p>
        ))}
      </div>
      <button onClick={resetQuiz}>RESTART QUIZ</button>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === DUMMY_QUESTION[index].correctAnswer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{DUMMY_QUESTION[index].text}</p>
              <p className="text">Your answer</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
              <p className="text">Correct answer</p>
              <p className="answer-correct">
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
