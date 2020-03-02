import input from "./chatFunction";
import axios from "axios";

const chatBox = document.getElementsByClassName("popup__chatbox");
const chatInput = document.getElementsByClassName("popup__input");

chatInput[0].addEventListener("keydown", async e => {
  if (13 == e.keycode) {
    chatBox.style.display = await input(e.target.value);
  }
});

// console.log(sum(1,2));

// const main = async () => {
//   const res = await axios.get('https://fizal.me/pokeapi/api/v2/name/bulbasaur.json');
//   console.log(res.data);
// }

// main();
// const chat
