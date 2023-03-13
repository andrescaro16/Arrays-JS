const total = [1, 2, 3, 4];

//Ciclo tradicional
let sum = 0;
for (let index = 0; index < total.length; index++) {
    const element = total[index];
    sum += element;
}
console.log(sum);

// Método reduce
const rta = total.reduce((acum, num) => acum + num, 0);
console.log(rta);