const age1 = 30;
const age2 = 20;

const buttonUp = document.getElementById('up');
const buttonDown = document.getElementById('down');
const countLabel = document.getElementById('count');
let count = 0;
countLabel.innerText = '0';

buttonUp.addEventListener('click', () => {
  count++;
  countLabel.innerText = count;
});
buttonDown.addEventListener('click', () => {
  --count;
  countLabel.innerText = count;
});
