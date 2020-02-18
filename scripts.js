const container = document.getElementById('container');
let rows = document.getElementsByClassName('innerDivRows');
let cols = document.getElementsByClassName('innerDivCols');

function makeRows(rows, cols) {
  container.style.setProperty('--gridRows', rows);
  container.style.setProperty('--gridCols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "gridItem";
  };
  const gridItem = document.getElementsByClassName('gridItem');
  for (let i = 0; i < gridItem.length; i++) {
      gridItem[i].addEventListener('mouseover', function() {
          gridItem[i].style.backgroundColor = 'black';
      });
  };
};
// Default setting upon page load
  makeRows(16, 16);

const inputContainer = document.getElementById('userInputs');
const button = document.createElement('button'); 
const buttonHeight = button.style.height = '37px';
const buttonWidth = button.style.width = '6em';
const buttonText = button.innerText = 'Submit';
const buttonPadding = button.style.marginLeft = '8px';

button.addEventListener('click', function() {
    if (parseInt(textBar.value) == textBar.value) {
        let clearContainer = document.getElementById('container').innerHTML = '';
        makeRows(textBar.value, textBar.value);
    } else if (!parseInt(textBar.value)) {
        alert('You silly goose! That\'s not a number!');
    }
    textBar.value = '';
});

const clearButton = document.createElement('button');
const clearButtonHeight = clearButton.style.height = '37px';
const clearButtonWidth = clearButton.style.width = '6em';
const clearButtonText = clearButton.innerText = 'Start over';
const clearButtonPadding = clearButton.style.marginLeft = '8px';

clearButton.addEventListener('click', function() {
  const gridItem = document.getElementsByClassName('gridItem');
  for (let i = 0; i < gridItem.length; i++) {
      gridItem[i].style.backgroundColor = 'white';
  }
});

let textBar = document.createElement('input');
const textBarHeight = textBar.style.height = '34px';
const textBarWidth = textBar.style.width = '160px';
const textBarContent = textBar.placeholder = 'Select a grid size!'


inputContainer.appendChild(textBar);
inputContainer.appendChild(button);
inputContainer.appendChild(clearButton);