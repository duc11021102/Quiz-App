import trophy from "../assets/quiz-complete.png";
import click from "../function/Click";
import { useContext } from "react";
import QuizContext from "../store/quiz-context";
import "../styles/StartQuiz/StartQuiz.css";
const StartQuiz = () => {
  const quizCtx = useContext(QuizContext);
  const handlerStart = () => {
    quizCtx.startQuiz();
    click();
  };

  return (
    <div className="start">
      <img src={trophy}></img>
      <button onClick={handlerStart}>START QUIZ</button>
    </div>
  );
};
export default StartQuiz;
