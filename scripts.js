let container = document.getElementById('container');
let innerDivs = document.createElement('div');
container.appendChild(innerDivs);




let innerDivClass = document.getElementById('container').childNodes;

let styleInnerDivs = document.getElementsByClassName('innerDivs');
innerDivs.style.display = 'inline-block';
innerDivs.style.position = 'relative';


function createInnerDivs(amountOfDivs) {
    for (let i = 0; i < amountOfDivs; i++) {
        document.createElement('div');
        container.appendChild(document.createElement('div')).classList.add('innerDivs');
    }
}

for (let i = 0; i <= innerDivClass.length; i++) {
    console.log(document.getElementById('container').childNodes[i]);
     //.classList.add('innerDivs');
}