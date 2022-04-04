
//elemento griglia 
const gridElement = document.querySelector('.grid');

//elemento form
const elementForm = document.querySelector('form');

//funzione al click
elementForm.addEventListener('submit', function (event) {
    // Stop page reloading
    event.preventDefault()

    const inputChoice = parseInt(document.querySelector('select').value);

    if (inputChoice === 1) {
        createGrid('easy');
    } else if (inputChoice === 2) {
        createGrid('medium');
    } else if (inputChoice === 3) {
        createGrid('difficult');
    }

    selectElements('.cell');
})




//funzione crea griglia
function createGrid(difficultyChoice) {
    //pulisco eventuale griglia già esistente
    gridElement.innerHTML = "";

    let cellsNumber = 100;

    let classToAdd;

    if (difficultyChoice === 'easy') {
        classToAdd = 'width_10';
        cellsNumber = 100;
    } else if (difficultyChoice === 'medium') {
        classToAdd = 'width_9';
        cellsNumber = 81;
    } else if (difficultyChoice === 'difficult') {
        classToAdd = 'width_7';
        cellsNumber = 49;
    } else {
        //prova
        cellElement.classList.add('width_7');
        cellsNumber = 7;
    }
    
/* 
    console.log(cellsNumber);
    console.log(difficultyChoice);
    console.log(cellElement);

    cellElement.innerHTML = 3;

    gridElement.append(cellElement);
    gridElement.append(cellElement);
    gridElement.append(cellElement);
    gridElement.append(cellElement);
    gridElement.append(cellElement); */

    //stampo in grid i miei elementi
    for (let i = 1; i <= cellsNumber; i++) {

    //elemento cella
    const cellElement = document.createElement('div');
    
    //aggiungo classe css
    cellElement.classList.add('cell');
    cellElement.classList.add(classToAdd);


    //aggiungo numero celle
    cellElement.innerHTML = i;

    //inserisco elemento cella in griglia
    gridElement.append(cellElement);
    }
    
}


function selectElements(divClass) {

    const cells = document.querySelectorAll(divClass);

    //console.log(cells.length);
    //console.log(cells);

    for (let i = 0; i <= cells.length; i++) {
        const cell = cells[i];

        cell.addEventListener('click', function () {
            console.log(this, i);
            console.log(this.innerText);
            this.classList.toggle('clicked');
      
          })
        

    }

}


//createGrid('difficult');

