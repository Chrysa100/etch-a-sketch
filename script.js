//get a reference of the parent div and body
const container = document.querySelector('.wrapper');
const body = document.querySelector('body');
//console.log(body);
//create the buttons
const buttons = document.createElement('div');
buttons.id = "buttons";
body.appendChild(buttons);
const button1 = document.createElement('button');
button1.id = "button1";
button1.textContent = "Clear Drawing";
buttons.appendChild(button1);
const button2 = document.createElement('button');
button2.id = "button2";
button2.textContent = "New Grid";
buttons.appendChild(button2);

//call at start the function to create the drawing pad
createGrid();
draw();
unPaint();

//the function that creates the grid
function createGrid(number=16){
  for(i=1; i<=number; i++){
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      for(j=1; j<=number; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        wrapper.appendChild(square); 
      }
      container.appendChild(wrapper);   
  }      
}
//function to do the drawing 
function draw(){
  //get a reference of the freshly created squares
  let squares = document.querySelectorAll('.square');
  for (square of squares){
      square.addEventListener("mouseenter",e=>{   
      e.target.style.backgroundColor="red";    
      });
  }
} 

function unPaint(){
let squares = document.querySelectorAll('.square');
//button to clear the drawing   
const button1= document.querySelector('#button1');

button1.addEventListener("click",function(e){
  for (item of squares){
      item.style.backgroundColor="rgb(141, 185, 243)";    
      }
  });
}

//get a reference of all wrappers(columns and container)
let wrappers = document.querySelectorAll('.wrapper');

//button to change the number of squares per side  
//const button2 = document.querySelector('#button2');
button2.addEventListener("click",changeGrid);

//function to clear existing grid and create new grid
function changeGrid(e){
    for(item of wrappers){
        
      
      removeAllChildNodes(item); //clear the existing grid
    }
    let squaresPerSide=0;
    while (squaresPerSide<1 || squaresPerSide>100){  
        squaresPerSide = prompt("Squares per side-max 100");
        if(squaresPerSide==null){
          return;
        }
    }
  createGrid(squaresPerSide); // make new grid
  draw();
  unPaint();
}

//function that clears the grid
function removeAllChildNodes(parent) {
    while (parent.firstElementChild) {
       parent.removeChild(parent.firstElementChild);
     }
 }
  

    
