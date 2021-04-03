const number = document.getElementById('number');

const buttonsSection = document.querySelector('.buttons');
const start = document.querySelector('.start');
const restart = document.createElement('button');

const operatorsSection = document.createElement('div');
const addOne = document.createElement('button');
const minusOne = document.createElement('button');

start.addEventListener('click', () =>{
  buttonsSection.removeChild(start);

  buttonsSection.appendChild(restart);
  restart.textContent = 'Restart';
  restart.classList.add('restart');
  
  buttonsSection.appendChild(operatorsSection);
  operatorsSection.classList.add('flex-operators');

  operatorsSection.appendChild(minusOne);
  minusOne.textContent = '- 1';
  minusOne.classList.add('operator');
  
  operatorsSection.appendChild(addOne);
  addOne.textContent = '+ 1';
  addOne.classList.add('operator');
})

restart.addEventListener('click', () =>{
 location.reload();
})

addOne.addEventListener('click', () => {
  number.innerHTML = Number(number.innerHTML) + 1;
})

minusOne.addEventListener('click', () => {
  number.innerHTML = Number(number.innerHTML) - 1;
})