import clickSound from "../assets/click.mp3";
const audio = new Audio(clickSound);
const click = () => {
  console.log("click");
  audio.play();
};
export default click;
