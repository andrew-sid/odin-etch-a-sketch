function renderSquares(pad, squares = 16) {
  for (let i = 0; i < Math.pow(squares, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 600 / squares - 2 + "px"; // 600 - WIDTH of pad in css
    square.style.height = 600 / squares - 2 + "px"; // 600 - HEIGHT of pad in css

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    pad.appendChild(square);
  }
}

function getUserSize() {
  let userSize;
  while (true) {
    userSize = prompt("Enter your size(100 max): ");

    if (userSize === null) return null;

    if (userSize > 0 && userSize <= 100) {
      return userSize;
    } else {
      alert("Please, enter number between 1 and 100");
    }
  }
}

function main() {
  const pad = document.querySelector(".pad");

  renderSquares(pad); //first render with default 16x16 squares

  const squaresBtn = document.querySelector(".squaresBtn");
  let userSize;

  squaresBtn.addEventListener("click", () => {
    userSize = getUserSize();

    if (userSize) {
      // if user cancel input, not rendering
      pad.innerHTML = ""; // clear pad before rendering new squares
      renderSquares(pad, userSize);
    }
  });
}

main();
