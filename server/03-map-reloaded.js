const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("original", orders);


// Extraer valores
const rta = orders.map((item) => item.total);
console.log("rta", rta);


// Forma incorrecta de añadir un atributo a otro objeto!!! Estamos copiando la referencia 
// y por ende mutando el objeto original al hacer uso del item sin el spread operator
/*const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});
console.log("rta2", rta2);
console.log("original", orders);*/


// Forma correcta. Creamos un nuevo objeto y usamos el spread operator para expandir los valores de item
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);