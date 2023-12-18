import Header from "./components/Header";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import QuizContext from "./store/quiz-context";
function App() {
  const quizCtx = useContext(QuizContext);
  let component;
  if (quizCtx.isStart === false) {
    component = <StartQuiz />;
  } else {
    component = <Quiz />;
  }
  return (
    <>
      <Navbar />
      <Header />
      {component}
    </>
  );
}

export default App;
