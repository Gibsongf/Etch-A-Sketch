const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= 32; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    /* grid.textContent = "i" */
    gridContainer.appendChild(grid);
    
};
//one number less than the needed here
for (let i = 1; i <= 31; i++){
    const clone = gridContainer.cloneNode(true);
    container.appendChild(clone);    
};


function changeColor(){
    this.setAttribute('style','background: red;');
    
}
function toggleSetting(){
    const grids = document.querySelectorAll('.grid');

    if (this.textContent == 'Start'){
        grids.forEach(grid => grid.addEventListener("mouseover",changeColor));
        this.setAttribute('style','border-color: Blue;')
        btnStop.setAttribute('style','border-color: None;')
        btnReset.setAttribute('style','border-color: None;')

    }
    if (this.textContent == 'Reset'){
        grids.forEach(grid => grid.addEventListener("mouseover",
            grid.setAttribute('style','background: white;')));
        grids.forEach(grid => grid.removeEventListener("mouseover",changeColor));      
        
        this.setAttribute('style','border-color: Blue;')
        btnStart.setAttribute('style','border-color: None;')
        btnStop.setAttribute('style','border-color: None;')


    }

    if (this.textContent == 'Stop'){
        grids.forEach(grid => grid.removeEventListener("mouseover",changeColor));
        btnStart.setAttribute('style','border-color: None;')
        btnReset.setAttribute('style','border-color: None;')
        this.setAttribute('style','border-color: Blue;')
    }
    
}


const btnStart = document.querySelector('#Start');
btnStart.addEventListener('click',toggleSetting)
const btnReset = document.querySelector('#Reset');
btnReset.addEventListener('click',toggleSetting)
const btnStop = document.querySelector('#Stop');
btnStop.addEventListener('click',toggleSetting)


