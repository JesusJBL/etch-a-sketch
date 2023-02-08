const container = document.querySelector('#container');
const pixels = document.querySelector('.pixels');
const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const clear = document.querySelector('.clear');

let length = 16;
let DIMENSIONS = 500;

function grid () {
for (x=0; x < length; x++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (y=0; y < length; y++) {
        const column = document.createElement('div');
        column.classList.add('column');
        
        column.style.height = (DIMENSIONS / length) + 'px'
        column.style.width = (DIMENSIONS / length) + 'px'

        column.addEventListener ('mouseenter', () => {
            column.style.backgroundColor = 'black';
        });
        
        row.appendChild(column);
    }
  }
}

grid();

function reset () {
    const resetTwo = document.querySelectorAll('.row')
    resetTwo.forEach((row) => {
        container.removeChild(row);
    });

    const reset = document.querySelectorAll('.column');
    reset.forEach((column) => {
        column.removeAttribute('class')
    });


    let size = prompt("What number of squares per side do you want? (Between 1 and 100)", "16");
    length = Number(size);

    if (length > 100 || length < 1) {
        alert('Invalid number')
        length = 16;
        grid();
    }

    else {
    grid();
    }
}

function erase () {
    const erase = document.querySelectorAll('.column')
    erase.forEach((column) => {
        column.addEventListener('mouseenter', () => {
            column.style.backgroundColor = 'white';
        });
    });
}

function randomized () {
    const random = [];
    for (i=0; i < 4; i++) {
    random[i]= (Math.floor(Math.random() * 256));
    }

    return ("rgb(" + random[0] + "," + random[1] + "," + random[2]+ ")")
}

function colors () {
    const colors = document.querySelectorAll('.column')
    colors.forEach((column) => {
        column.addEventListener('mouseenter', () => {
            column.style.backgroundColor = randomized();
        });
    });
}

function blackColor () {
    const black = document.querySelectorAll('.column')
    black.forEach((column) => {
        column.addEventListener('mouseenter', () => {
            column.style.backgroundColor = 'black';
        });
    });
}

function cleared () {
    const resetTwo = document.querySelectorAll('.row')
    resetTwo.forEach((row) => {
        container.removeChild(row);
    });

    const reset = document.querySelectorAll('.column');
    reset.forEach((column) => {
        column.removeAttribute('class')
    });

    grid();
}

pixels.addEventListener('click', reset);
eraser.addEventListener('click', erase);
rainbow.addEventListener('click', colors);
black.addEventListener('click', blackColor);
clear.addEventListener('click', cleared);


