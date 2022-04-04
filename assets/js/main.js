//elemento griglia 
const gridElement = document.querySelector('.grid');


//funzione crea griglia
function createGrid(difficultyChoice) {
    //pulisco eventuale griglia già esistente
    gridElement.innerHTML = "";

    //elemento cella
    const cellElement = document.createElement('div');
    
    //aggiungo classe css
    cellElement.classList.add('cell');

    //aggiungo altre classi css e numero celle in un condizionale
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

    //stampo in grid i miei elementi
    for (let i = 1; i <= cellsNumber; i++) {

        gridElement.append(cellElement);
    }
    
}

createGrid('easy');
