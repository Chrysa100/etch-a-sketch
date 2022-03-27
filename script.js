const container = document.querySelector('.wrapper');

  for(i=1; i<=16; i++){
      let wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      for(j=1; j<=16; j++){
        const square = document.createElement('div')
        square.textContent=`${i},${j}`;
        square.classList.add('square');
        wrapper.appendChild(square); 
      }
      container.appendChild(wrapper); 
}

