// ----------------[Objeto de frecuencia de número en una lista]-----------------------
const items = [1, 3, 2, 3, 4, 5];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] += 1;
    }
    return obj;
}, {});

console.log(rta);



//------------------[Objeto de frecuencia de level en un objeto]-----------------------

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data
.map(obj => obj.level)
.reduce((obj, level) => {
    if(!obj[level]){
        obj[level] = 1;
    }else{
        obj[level] += 1;
    }
    return obj;
},{});

console.log(rta2);



//--------------------[Objeto de frecuencia de rangos de números en una lista]-----------------------

const items2 = [1, 3, 2, 3, 4, 5, 5, 5, 7, 9, 9, 10, 8];

const rta3 = items2
.reduce((obj, num) => {
    if([1,2,3,4,5].includes(num)){
        obj["1-5"] += 1;
    }else if([6,7,8].includes(num)){
        obj["6-8"] += 1;
    }else if([9,10].includes(num)){
        obj["9-10"] += 1;
    }
    return obj;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
})

console.log(rta3);