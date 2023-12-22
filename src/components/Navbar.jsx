import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import "../styles/Navbar/Navbar.css";
import intro from "../assets/intro.mp3";
const Navbar = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  return (
    <header>
      {isSoundOn ? (
        <FaVolumeUp
          className="sound"
          onClick={() => {
            setIsSoundOn(!isSoundOn);
          }}
        />
      ) : (
        <FaVolumeMute
          className="sound"
          onClick={() => {
            setIsSoundOn(!isSoundOn);
          }}
        />
      )}
      <audio src={intro} loop autoPlay muted={!isSoundOn}></audio>
    </header>
  );
};
export default Navbar;
