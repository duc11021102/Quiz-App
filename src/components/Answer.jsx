import click from "../function/Click";
import "../styles/Answers/Answers.css";
const Answer = (props) => {
  const answer = props.answer;
  const answerState = props.answerState;
  const selectedAnswer = props.selectedAnswer;

  const isSelected = selectedAnswer === answer;
  let cssClass = "btn";
  if (answerState === "answered" && isSelected) {
    cssClass = "selected";
  }
  if ((answerState === "correct" || answerState === "wrong") && isSelected) {
    if (answerState === "correct") {
      cssClass = "correctAns";
    } else {
      cssClass = "wrongAns";
    }
  }

  return (
    <li key={answer} className="answer">
      <button
        disabled={answerState !== ""}
        className={cssClass}
        onClick={() => {
          props.onhandlerSelectAnswer(answer);
          click();
        }}
      >
        {answer}
      </button>
    </li>
  );
};
export default Answer;
