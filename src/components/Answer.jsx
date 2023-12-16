import classes from "./Answer.module.css";

const Answer = (props) => {
  const answer = props.answer;
  const answerState = props.answerState;
  const selectedAnswer = props.selectedAnswer;

  const isSelected = selectedAnswer === answer;
  let cssClass = `${classes.btn}`;

  if (answerState === "answered" && isSelected) {
    console.log(isSelected);
    console.log(answerState);
    cssClass = `${classes.selected}`;
  }
  if ((answerState === "correct" || answerState === "wrong") && isSelected) {
    cssClass = `${classes[answerState]}`;
  }
  return (
    <li key={answer} className={classes.answer}>
      <button
        disabled={answerState !== ""}
        className={cssClass}
        onClick={() => props.onhandlerSelectAnswer(answer)}
      >
        {answer}
      </button>
    </li>
  );
};
export default Answer;
