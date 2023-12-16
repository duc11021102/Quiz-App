import { useEffect, useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";
import intro from "./assets/intro.mp3";

function App() {
  const audio = new Audio(intro);
  const [started, setStarted] = useState(false);
  const handlerStartQuiz = (type) => {
    audio.pause();
    audio.load();
    setStarted(type);
  };

  const Playit = () => {
    audio.play();
    audio.volume = 0.1;
  };
  useEffect(() => {
    Playit();
  }, []);

  let component;
  if (started === true) {
    component = <Quiz />;
  } else {
    component = <StartQuiz startQuiz={handlerStartQuiz} />;
  }
  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default App;
