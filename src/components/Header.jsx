import logo from "../assets/quiz-logo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.title}>
      <img src={logo} alt="quiz-logo"></img>
      <h1>QUIZ FOR YOU</h1>
    </div>
  );
};
export default Header;
