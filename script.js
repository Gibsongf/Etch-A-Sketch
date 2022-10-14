


function changeColor(){
    
    let r = String(Math.floor(Math.random() * 255));
    let g = String(Math.floor(Math.random() * 255));
    let b = String(Math.floor(Math.random() * 255));
    if (randomColor=== true){
        console.log('random')
        this.setAttribute('style',`background-color:rgb(${r},${g},${b});`);
    }
    else{
        
        console.log(selectColorPicker.value)
        this.setAttribute('style',`background-color:${selectColorPicker.value};`);

    }
    
}
function toggleSetting(){
    const grids = document.querySelectorAll('.grid');
    
    if (this.textContent == 'Start'){
        grids.forEach(grid => grid.addEventListener("mouseover",changeColor));
        this.setAttribute('style','border-color: Blue;');
        btnStop.setAttribute('style','border-color: None;');
        btnReset.setAttribute('style','border-color: None;');
        return;

    }
    if (this.textContent == 'Reset'){
        grids.forEach(grid => grid.addEventListener("mouseover",
            grid.setAttribute('style','background: white;')));
        grids.forEach(grid => grid.removeEventListener("mouseover",changeColor));      
        
        this.setAttribute('style','border-color: Blue;');
        btnStart.setAttribute('style','border-color: None;');
        btnStop.setAttribute('style','border-color: None;');
        return;

    }

    if (this.textContent == 'Stop'){
        grids.forEach(grid => grid.removeEventListener("mouseover",changeColor));
        btnStart.setAttribute('style','border-color: None;');
        btnReset.setAttribute('style','border-color: None;');
        this.setAttribute('style','border-color: Blue;');
        return;
    }
    
}
function makeGrid(nxn = 32){
    btnStart.setAttribute('style','border-color: None;');  
    let containerLength = container.children.length;
   
    
    if (containerLength <= 1){
        mGridSpace(32);      
        return;
    }

    if (nxn == containerLength || nxn == gridContainer.children.length){  
        return;
    }
    if(slider.value === "0"){
        nxn = 16;
        output.innerHTML = `16 x 16`;
    }

    if(slider.value === "50"){
        nxn = 32;    
        output.innerHTML = `32 x 32`;
    }
    
    if(slider.value === "100"){
        nxn = 64; 
        output.innerHTML = `64 x 64`;
    }
    
    if (nxn == containerLength && nxn == gridContainer.children.length){
      
        return;
    }

    if (nxn > containerLength && nxn > gridContainer.children.length){

        mGridSpace(nxn);    
    }
    if (nxn < containerLength && nxn < gridContainer.children.length){

        mGridSpace(nxn);
        
    }
    
    
  
    
    
}

function mGridSpace(nxn){
    if (container.children.length > 1){
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
 
    }
    for (let i = 1; i <= nxn; i++){
        
        const grid = document.createElement('div');
        grid.classList.add('grid');

        gridContainer.appendChild(grid);
        
    };
    for (let i = 1; i <= nxn ; i++){
        if (container.children.length === gridContainer.children.length){
            break;
        }
        const clone = gridContainer.cloneNode(true);
        container.appendChild(clone);    
    };


}



var slider = document.getElementById("Slider");
var output = document.getElementById("grid-item-size");
output.innerHTML = `32 x 32`;

const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');

const btnStart = document.querySelector('#Start');
const btnRandomColors = document.querySelector('#Random-Colors')
const selectColorPicker = document.querySelector('#colorpicker')
const btnReset = document.querySelector('#Reset');
const btnStop = document.querySelector('#Stop');
const body = document.querySelector('body');
let randomColor = false;
btnStop.addEventListener('click',toggleSetting);
body.addEventListener('keydown',function(event) {
    if (event.keyCode == 32) {
        btnStop.click();
        
  
}})

let selectedColor = selectColorPicker.value;

btnReset.addEventListener('click',toggleSetting);
btnStart.addEventListener('click',toggleSetting);
btnRandomColors.addEventListener('click',function(){
    if(randomColor=== false){
        this.setAttribute('style','border-color: Blue;');
        randomColor = true;
        return;
    }
    if(randomColor=== true){
        this.setAttribute('style','border-color: none;');
        randomColor = false;
        return;
    }
    });

slider.addEventListener('input',makeGrid);
slider.addEventListener('click',makeGrid);


makeGrid();

