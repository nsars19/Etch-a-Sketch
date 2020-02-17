function createRows(numberOfRows) {
    const container = document.getElementById('container');

    for (let i = 0; i < numberOfRows; i++) {
        document.createElement('div');
        container.appendChild(document.createElement('div')).classList.add('innerDivRows');
    }
}

function divideRows(numberOfCols) {
    const container = document.getElementById('container');

    for (let j = 0 ; j < numberOfCols; j++) {
        for (let k = 0; k < numberOfCols; k++) {
            document.createElement('div');
            container.childNodes[j].appendChild(document.createElement('div')).classList.add('innerDivCols');
        }
    }
}

createRows(8);
divideRows(8);