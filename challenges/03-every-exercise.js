/* 
Tu reto será utilizar el método every para validar que todas las edades del siguiente team (una lista de objetos)
sean menores a 15 años
*/

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// Solución
const check = team.map(player => player.age).every(age => age < 15);

// Test
console.log(check);