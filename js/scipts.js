function main() {
  const pad = document.querySelector(".pad");

  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseover', () =>  {
      square.style.backgroundColor = 'black';
    });

    pad.appendChild(square);
  }
}

main();
