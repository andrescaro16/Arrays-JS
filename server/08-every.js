const numbers = [1, 30, 49, 29, 10, 13];

//Traditional
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        rta = false;
    }
}
console.log("for", rta);

//Every method
let rta2 = numbers.every(num => num <= 40);
console.log("every", rta2);