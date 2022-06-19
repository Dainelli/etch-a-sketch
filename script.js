// Create a webpage with a 16x16 grid of square divs and put it in another div (container)
const container = document.getElementById("container");
console.log("container, motherf*cker");

// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
let numberSquares;

makeRows(16, 16);



let rows = cols = askUser();

console.log("after askUSer " + rows)


makeRows(rows, cols);
console.log("call function, motherf*cker");

function askUser () {
  let numberSquares = window.prompt("How many squares per side?");
  console.log("asked first time " + numberSquares)
  
  while (numberSquares > 100) {
    alert ("Pick a number lower than 100!")
    let numberSquares = window.prompt("How many squares per side?");
    console.log("asked again");
    console.log("return above 100");
    return numberSquares;
  }
  console.log("return " + numberSquares);
  return numberSquares;
};

function makeRows(rows, cols) {
  console.log("in function " + rows)
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1; // cell counter
    container.appendChild(cell).className = "grid-item";
    }
  }
};




//Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.


// When the user clicks on a square, change its color to a random color
