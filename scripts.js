const container = document.getElementById('container');
let rows = document.getElementsByClassName('innerDivRows');
let cols = document.getElementsByClassName('innerDivCols');

function defaultGrid() {
    createRows(8);
    createCols(8);
}

function createRows(numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
        document.createElement('div');
        container.appendChild(document.createElement('div')).classList.add('innerDivRows');
    }
}

function createCols(numberOfCols) {
    for (let j = 0 ; j < rows.length; j++) {
        for (let k = 0; k < numberOfCols; k++) {
            let col = document.createElement('div');
            container.childNodes[j].appendChild(col).classList.add('innerDivCols');
        }
    } 
}

function makeRows(rows, cols) {
    container.style.setProperty('--gridRows', rows);
    container.style.setProperty('--gridCols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      
      cell.style.border = '1px solid gray';
      container.appendChild(cell).className = "gridItem";
    };
  };
  
  makeRows(16, 16);