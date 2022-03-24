let container = document.getElementById("container");
for(a=1; a<=16; a++){
    let column = document.createElement('div');
    column.setAttribute("id", `column${a}`);
    container.appendChild(column);
}

for(j=1; j<=16; j++){
    let column = document.getElementById(`column${j}`);
    for(i=1; i<=16; i++){
        let square = document.createElement('div')
        square.classList.add('square');  
        column.appendChild(square);    
    }                               
} 