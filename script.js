// const kaķis = 'neko'
// console.log(kaķis)

const mīnuss = document.querySelector('.js-minus');
console.log(mīnuss);
const plusins = document.querySelector('.js-pluss');
console.log(plusins);
const reizina = document.querySelector('.js-multiply');
console.log(reizina);
const dalīšana = document.querySelector('.js-divide');
console.log(dalīšana);

const input = document.querySelector('.js-input');

const Add = (pirmais, otrais) => {return pirmais + otrais}
const minus = (pirmais, otrais) => {return pirmais - otrais}
const divide = (pirmais, otrais) => {return pirmais / otrais}
const multiply = (pirmais, otrais) => {return pirmais * otrais}
console.log(multiply(4, 8))
console.log(divide(4, 8))
console.log(minus(4, 8))
console.log(Add(4, 8))

plusins.addEventListener('click', () => {console.log("Mani nospieda")})
