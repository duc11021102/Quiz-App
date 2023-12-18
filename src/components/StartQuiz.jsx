import trophy from "../assets/quiz-complete.png";
import style from "./StartQuiz.module.css";
import click from "../function/Click";
import { useContext } from "react";
import QuizContext from "../store/quiz-context";
const StartQuiz = () => {
  const quizCtx = useContext(QuizContext);
  const handlerStart = () => {
    quizCtx.startQuiz();
    click();
  };

  return (
    <div className={style.start}>
      <img src={trophy}></img>
      <button onClick={handlerStart}>START QUIZ</button>
    </div>
  );
};
export default StartQuiz;
