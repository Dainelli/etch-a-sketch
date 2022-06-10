// Create a webpage with a 16x16 grid of square divs
const container = document.getElementById("container");
console.log("container, motherf*cker");

makeRows(16, 16);
console.log("call function, motherf*cker");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

// put them in another div (container)

// When the user clicks on a square, change its color to a random color
