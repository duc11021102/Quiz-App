import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";
import Navbar from "./components/Navbar";

function App() {
  const [started, setStarted] = useState(false);
  const handlerStartQuiz = (type) => {
    setStarted(type);
  };

  let component;
  if (started === true) {
    component = <Quiz />;
  } else {
    component = <StartQuiz startQuiz={handlerStartQuiz} />;
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
