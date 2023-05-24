let counter = 0;

const increment = document.querySelector('.incrementer');
const decrementer = document.querySelector('.decrementer');
const reset = document.querySelector('.reset');
const result = document.querySelector('#value');

const Color = (counter) => {
  if (counter < 0) {
    return 'red';
  } else if (counter > 0) {
    return 'green';
  } else {
    return 'black';
  }
};

increment.addEventListener('click', function () {
  counter++;
  result.textContent = counter;
  result.style.color = Color(counter);
});
decrementer.addEventListener('click', function () {
  counter--;
  result.textContent = counter;
  result.style.color = Color(counter);
});
reset.addEventListener('click', function () {
  counter = 0;
  result.textContent = counter;
  result.style.color = Color(counter);
});
