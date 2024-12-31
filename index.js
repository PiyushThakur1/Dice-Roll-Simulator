const button = document.getElementById("roll-button");

const dice1 = document.getElementById("dice");

const rollHistory = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDieFace(rollResult);
  dice1.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span> ${getDieFace(
      historyList[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
}

function getDieFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

button.addEventListener("click", () => {
  dice1.classList.add("roll-animation");
  setTimeout(() => {
    dice1.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
