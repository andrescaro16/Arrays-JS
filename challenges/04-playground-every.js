/* 
Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una 
función llamada checkArray que recibe un parámetro de entrada:

    numbers: Un array de números

Dentro del cuerpo de la función checkArray debes escribir tu solución.
*/

function checkArray(array) {
  // Tu código aquí 👈
  if (array.length !== 0) {
    return array.every(num => num % 2 === 0);
  }
  else {
    return false;
  }
}
