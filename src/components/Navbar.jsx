import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import classes from "./Navbar.module.css";
import intro from "../assets/intro.mp3";
const Navbar = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  return (
    <header>
      {isSoundOn ? (
        <FaVolumeUp
          className={classes.sound}
          onClick={() => {
            setIsSoundOn(!isSoundOn);
          }}
        />
      ) : (
        <FaVolumeMute
          className={classes.sound}
          onClick={() => {
            setIsSoundOn(!isSoundOn);
          }}
        />
      )}
      <audio src={intro} autoPlay muted={!isSoundOn}></audio>
    </header>
  );
};
export default Navbar;
