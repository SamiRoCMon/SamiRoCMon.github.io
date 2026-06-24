let cells = document.querySelectorAll(".cell");

let currentPlayer = "X";
let scoreX = 0;
let scoreO = 0;
let draws = 0;

const scoreDisplay = document.querySelector("h2");

const Board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});




