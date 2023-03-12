// Calcula y agrega una propiedad a un array

/* 
Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]
*/



function addNewAttr(array) {
    // Tu código aquí 👈
    const newArray = array.map(obj => {
        return {
            ...obj,
            taxes: Math.floor(obj.price*0.19),
        }
    })

    return newArray;
}