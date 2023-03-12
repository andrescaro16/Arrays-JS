const letters = ["a", "b", "c"];


//Before
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + "++");
}
console.log(`Original: ${letters}`);
console.log(`New: ${newArray}`);


//After (with map method - inmutable)
const newArray2 = letters.map(letter => letter+"++");
console.log(`Original: ${letters}`);
console.log(`New: ${newArray2}`);