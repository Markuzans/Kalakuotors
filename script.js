// const kaķis = 'neko'
// console.log(kaķis)

const mīnuss = document.querySelector('.js-minus');
const plusinš = document.querySelector('.js-pluss');
const reizina = document.querySelector('.js-multiply');
const dalīšana = document.querySelector('.js-divide');
console.log(dalīšana);
console.log(reizina);
console.log(plusinš);
console.log(mīnuss);

const input1 = document.querySelector(".js-input1")
const input2 = document.querySelector(".js-input2")

const atbilde = document.querySelector('.js-result')

const Add = (pirmais, otrais) => {return pirmais + otrais}
const minus = (pirmais, otrais) => {return pirmais - otrais}
const divide = (pirmais, otrais) => {return pirmais / otrais}
const multiply = (pirmais, otrais) => {return pirmais * otrais}
//console.log(multiply(4, 8))
//console.log(divide(4, 8))
//console.log(minus(4, 8))
//console.log(Add(4, 8))

plusinš.addEventListener('click', () => { answer.textContext = Add(parseInt(input1.value), parseInt(input2.value))

})
mīnuss.addEventListener('click', () => {console.log(minus(parseInt(input1.value), parseInt(input2.value)))})
reizina.addEventListener('click', () => {console.log(multiply(parseInt(input1.value), parseInt(input2.value)))})
dalīšana.addEventListener('click', () => {console.log(divide(parseInt(input1.value), parseInt(input2.value)))})