const GRID_SIZE = 64;
const SQUARE_SIZE = 16;

function remakeGrid(size) {
    const body = document.querySelector('body');
    const oldGrid = document.querySelector('#grid');
    if (oldGrid) {
        oldGrid.remove();
    };

    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    grid.style.border = '2px solid blue';
    grid.style.width = SQUARE_SIZE * size + 'px';
    grid.style.height = SQUARE_SIZE * size + 'px';
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');

        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.width = SQUARE_SIZE + 'px';
            square.style.height = SQUARE_SIZE + 'px';
            //square.style.backgroundColor = 'red';
            square.addEventListener('mouseenter', (e) => {
                square.classList.add('hovering');
            });
            square.addEventListener('mouseleave', (e) => {
                square.classList.remove('hovering');
            });
            square.addEventListener('click', (e) => {
                square.classList.toggle('draw');
            })
            row.appendChild(square);
        }
        grid.append(row);
    }
    body.appendChild(grid);
}

remakeGrid(GRID_SIZE);
let size = 1;

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    let size = prompt('Enter new size:');
    if (size > 100) {
        size = 100;
    }
    remakeGrid(size);
})

