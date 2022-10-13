


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
function makeGrid(nxn = 32){
    let containerLength = container.children.length;
    
    if (containerLength <= 1){
        mGrid(32)
        return
    }

    if (nxn == containerLength || nxn == gridContainer.children.length){  
        return
    }
    if(slider.value === "0"){
        nxn = 16;
    }
    if(slider.value === "100"){
        nxn = 62; 
    }
    if(slider.value === "50"){
        nxn = 32; 
    }
    
    if (nxn == containerLength && nxn == gridContainer.children.length){
        console.log('igual test')
        return
    }
    if (nxn > containerLength && nxn > gridContainer.children.length){
        console.log('TESTE IF ')
        mGrid(nxn)
    }
    if (nxn < containerLength && nxn < gridContainer.children.length){
        console.log('TESTE IF NXN MENOR N')
        mGrid(nxn)
    }
    /* console.log("nxn , containerLen   , gridContainer.len") */
    
  
    
    
}

function mGrid(nxn){
    if (container.children.length > 1){
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
        /* console.log('REMOVE')
        console.log(container.children.length, gridContainer.children.length) */
    }
    for (let i = 1; i <= nxn; i++){
        
        const grid = document.createElement('div');
        grid.classList.add('grid');
        /* grid.textContent = "i" */
        gridContainer.appendChild(grid);
        
    };
    //one number less than the needed here
    for (let i = 1; i <= nxn ; i++){
        if (container.children.length === gridContainer.children.length){
            break
        }
        const clone = gridContainer.cloneNode(true);
        container.appendChild(clone);    
    };
    console.log(container.children.length, gridContainer.children.length)

}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');

const btnStart = document.querySelector('#Start');
const btnReset = document.querySelector('#Reset');
const btnStop = document.querySelector('#Stop');

btnStop.addEventListener('click',toggleSetting)
btnReset.addEventListener('click',toggleSetting)
btnStart.addEventListener('click',toggleSetting)
slider.addEventListener('click',makeGrid);

makeGrid()


