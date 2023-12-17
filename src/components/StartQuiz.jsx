import trophy from "../assets/quiz-complete.png";
import style from "./StartQuiz.module.css";
import click from "../function/Click";
const StartQuiz = (props) => {
  const handlerStart = () => {
    props.startQuiz(true);
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
