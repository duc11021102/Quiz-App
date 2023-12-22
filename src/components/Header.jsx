import logo from "../assets/quiz-logo.png";
import "../styles/Header/Header.css";
const Header = () => {
  return (
    <div className="title">
      <img src={logo} alt="quiz-logo"></img>
      <h1>QUIZ FOR YOU</h1>
    </div>
  );
};
export default Header;
