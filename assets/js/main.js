
const gridElement = document.querySelector('.grid');

function createGrid(difficultyChoice) {

    gridElement.innerHTML = "";

    const cellElement = document.createElement('div');
    
    cellElement.classList.add('cell');

    if (difficultyChoice == 'easy') {
        cellElement.classList.add('width_10');
        const cellsNumber = 100;
    } else if (difficultyChoice == 'medium') {
        cellElement.classList.add('width_9');
        const cellsNumber = 81;
    } else if (difficultyChoice == 'difficult') {
        cellElement.classList.add('width_7');
        const cellsNumber = 49;
    } else {
        //prova
        cellElement.classList.add('width_7');
        const cellsNumber = 7;
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

    for (let i = 1; i <= cellsNumber; i++) {

        gridElement.append(cellElement);
    }
    
}

createGrid('easy');
