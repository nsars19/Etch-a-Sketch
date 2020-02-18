const container = document.getElementById('container');
let rows = document.getElementsByClassName('innerDivRows');
let cols = document.getElementsByClassName('innerDivCols');

function makeRows(rows, cols) {
    container.style.setProperty('--gridRows', rows);
    container.style.setProperty('--gridCols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      
      cell.style.border = '1px solid gray';
      container.appendChild(cell).className = "gridItem";
    };
  };
  // Default setting upon page load
  makeRows(16, 16);