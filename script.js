//get a reference of the parent div and body
const container = document.querySelector('.wrapper');
const body = document.querySelector('body');

//create the buttons
const buttons = document.createElement('div');
buttons.id = "buttons";
body.appendChild(buttons);
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
button1.id = "button1";
button2.id = "red";
button3.id = "multi";
button4.id = "button4";
button1.textContent = "Clear Drawing";
button2.textContent = "Red";
button3.textContent = "Multi color";
button4.textContent = "New Grid";
buttons.appendChild(button1);
buttons.appendChild(button2);
buttons.appendChild(button3);
buttons.appendChild(button4);

//call at start the function to create the drawing pad
createGrid();
draw("multi");
clearDrawing();

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
function draw(i){
  //get a reference of the freshly created squares
  let squares = document.querySelectorAll('.square');
  
  if(i==="red"){
   for (square of squares){
      square.addEventListener("mouseenter",e=>{   
      e.target.style.backgroundColor="red";    
      });
   }  
  }else if(i==="multi"){
    for(square of squares){
      square.addEventListener("mouseenter",e=>{   
      let a = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let c = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor=`rgb(${a}, ${b},${c})`;
      });
    }
  }
} 


function clearDrawing(){
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
button4.addEventListener("click",changeGrid);
//button to change teh
button2.addEventListener("click",function(e){
draw("red")
});
button3.addEventListener("click", function(e){
  draw("multi")
});

//function to change the number of squares per side
function changeGrid(e){
    
    let squaresPerSide=0;
    while (squaresPerSide<1 || squaresPerSide>100){  
        squaresPerSide = prompt("Squares per side-max 100");
        
        if(squaresPerSide!==null && squaresPerSide!==undefined){
          for(item of wrappers){     
            removeAllChildNodes(item); //clear the existing grid
          }
        }else {
          return;
        }
    }
    
  createGrid(squaresPerSide); // make new grid 
  clearDrawing();//make the button1 work
  draw("multi");
  }

//function to clear existing grid
function removeAllChildNodes(parent) {
    while (parent.firstElementChild) {
       parent.removeChild(parent.firstElementChild);
     }
 }
  
//create the footer
const footer = document.createElement('footer');
footer.innerHTML = `Created by <a href=https://github.com/chrysa100> Chrysa100</a>`;
body.appendChild(footer);
    
