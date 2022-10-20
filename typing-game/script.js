const quote = document.getElementById("quote");
const input = document.getElementById("typed-value");
const start = document.getElementById("start");

let wordQueue;
let quoteText;

function startGame() {
  console.log("Game Started!", "good luck");

  quoteText = "Improve a mechical";
  wordQueue = quoteText.split(" ");

  quote.innerHTML = wordQueue.map((word) => `<span>${word}</span>`).join(" ");
}

function checkInput() {
  const currentWorld = targetWord;
  const typedValue = input.value;
  // console.log("no trim:", input.value, "with trim:", typedValue);
  if (currentWorld !== typedValue) {
    input.className = currentWorld.startsWith(typedValue) ? "" : "error";
    return;
  }
  wordQueue.shift();
  input.value = "";
}

/* element.addEventListeners(even, function); */
input.addEventListener("input", checkInput);
start.addEventListener("click", startGame);
