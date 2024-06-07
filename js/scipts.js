function renderSquares(pad, squares = 16) {
  const PAD_HEIGHT = 600; // 600 - HEIGHT of pad in css
  const PAD_WIDTH = 600; // 600 - WIDTH of pad in css
  const BORDER_WIDTH = 2; // border width in css

  for (let i = 0; i < Math.pow(squares, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = PAD_WIDTH / squares - BORDER_WIDTH + "px";
    square.style.height = PAD_HEIGHT / squares - BORDER_WIDTH + "px";

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
  const randClrBtn = document.querySelector(".randClrBtn");
  const blackClrBtn = document.querySelector(".blackClrBtn");

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

  randClrBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    });
  });

  blackClrBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
  });
}

main();
