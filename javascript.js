const container = document.querySelector('#container');
const pixels = document.querySelector('#pixels');


pixels.addEventListener('click', () => {
    alert('How many squares do you want?')
});
for (x=0; x <= 16; x++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (y=0; y<=16; y++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.addEventListener ('mouseenter', () => {
            column.style.cssText = 'background: black;';
        });

        row.appendChild(column);
    }
}




