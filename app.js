let compteur = 0;

const increment = document.querySelector('.incrementer');
const decrementer = document.querySelector('.decrementer');
const reset = document.querySelector('.reset');
const result = document.querySelector('#value');

const choiseColor = (compteur) => {
  if (compteur < 0) {
    return 'red';
  } else if (compteur > 0) {
    return 'green';
  } else {
    return 'black';
  }
};

increment.addEventListener('click', function () {
  compteur++;
  result.textContent = compteur;
  result.style.color = choiseColor(compteur);
  console.log(compteur);
});
decrementer.addEventListener('click', function () {
  compteur--;
  result.textContent = compteur;
  result.style.color = choiseColor(compteur);
  console.log(compteur);
});
reset.addEventListener('click', function () {
  compteur = 0;
  result.textContent = compteur;
  result.style.color = choiseColor(compteur);
  console.log(compteur);
});
