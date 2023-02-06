const container = document.querySelector('#container');
const pixels = document.querySelector('.pixels');
const eraser = document.querySelector('.eraser');
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
            column.classList.add('color')
        });
        
        row.appendChild(column);
    }
  }
}

grid();

function reset () {
    const reset = document.querySelector('div');
    reset.textContent = '';

    let size = prompt("What number of squares per side do you want? (Between 1 and 100)", "16");
    length = Number(size);

    if (length > 100) {
        alert('Invalid number')
        length = 16;
        grid();
    }

    else {
    grid();
    }
}

function erase () {
    const erasing = document.querySelector('div');
    erasing.addEventListener('mouseenter', () => {
        erasing.classList.remove('color');
    });
}


pixels.addEventListener('click', reset);
eraser.addEventListener('click', erase);



