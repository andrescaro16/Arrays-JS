const elements = ["Fire", "Air", "Water"];

// Traditional
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

// Join
const rta = elements.join('--')
console.log('join', rta);

//Example using split
const title = 'Curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);