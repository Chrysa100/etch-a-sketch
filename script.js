//get a reference of the only existing div
const container = document.querySelector('.wrapper');

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
//button to change the number of squares per side  
const button2 = document.querySelector('#button2');
//get a reference of all wrappers(columns and container)
let wrappers = document.querySelectorAll('.wrapper');

button2.addEventListener("click",function(e){
     for(item of wrappers){
     removeAllChildNodes(item); //clear the existing grid
    }
    let squaresPerSide = prompt("How many squares per side?","max 100 squares");
    createGrid(squaresPerSide); // make new grid
    draw();
    unPaint();
  });

//function that clears the grid
function removeAllChildNodes(parent) {
    while (parent.firstElementChild) {
       parent.removeChild(parent.firstElementChild);
     }
 }
  

    
