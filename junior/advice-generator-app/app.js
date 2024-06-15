//********** imports **********//

const buttonDice = document.getElementById("button-dice");

const adviceID = document.getElementById("advice-number");
const adviceQuote = document.getElementById("quote");

//********** functions **********/

buttonDice.addEventListener("click", () => {
  getAdvice();
});

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const { id, advice } = data.slip;
  updateAdvice({ id, advice });
};

const updateAdvice = ({ id, advice }) => {
  adviceID.innerText = id;
  adviceQuote.innerText = '"' + advice + '"';
};
