function renderSquares(pad, squares = 16) {
  for (let i = 0; i < Math.pow(squares, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 600 / squares - 2 + 'px'; // 600 - WIDTH of pad in css
    square.style.height = 600 / squares - 2 + 'px'; // 600 - HEIGHT of pad in css

    square.addEventListener('mouseover', () =>  {
      square.style.backgroundColor = 'black';
    });

    pad.appendChild(square);
  }
}

function main() {
  const pad = document.querySelector(".pad");

  renderSquares(pad); //first render with default 16x16 squares

  const squaresBtn = document.querySelector('.squaresBtn');
  let userSize;

  squaresBtn.addEventListener('click', () => {
    userSize = +prompt('Enter your size(100 max): ');
    pad.innerHTML = ''; // clear pad before rendering new squares
    renderSquares(pad, userSize);
  })

}

main();
