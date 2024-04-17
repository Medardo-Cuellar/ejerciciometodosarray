const personas = [
    ["Juan", "García", 25],
    ["María", "López", 30],
    ["Carlos", "Martínez", 35],
    ["Ana", "Rodríguez", 28],
    ["Pedro", "Hernández", 40],
    ["Laura", "Pérez", 33],
    ["José", "Gómez", 27],
    ["Sofía", "Díaz", 45],
    ["Luis", "Sánchez", 31],
    ["Marta", "Fernández", 38],
    ["David", "Torres", 29],
    ["Elena", "Ruiz", 42],
    ["Pablo", "Jiménez", 36],
    ["Lucía", "Gutiérrez", 32],
    ["Andrés", "Alvarez", 39]
];

/*
    1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
    2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
    3.- Necesitamos reestructurar la data para que quede de la siguiente forma:

    let restructuredData = [
        {
            name:
            lastname:
            age
        }
    ]
*/


// 1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
/* 
Entrada
Arreglo de arreglos
Salida
Arreglo de cadenas de texto
Proceso
1.	Tomo el primer elemento
a.	Combino el elemento 1 y el elemento 2 de este arreglo en una cadena
2.	Repito hasta terminar

Se escoge map porque nos devuelve un arreglo con la misma cantidad de elementos que el original

*/

const getFullNames = (data) => data.map((person) => {
    return `${person[0]} ${person[1]}`;
  });
  
  //2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
  /* 
  
  Entrada
  Array de arrays
  Salida
  edad mayor
  edad menor
  Proceso
  1.	Tomo el primer elemento del arreglo
  2.	Del primer elemento tomo el tercer elemento dentro del mismo[2]
  3.	Establezco este elemento como la edad mayor y la edad menor
  4.	Repito con siguiente elemento
  a.	Es mayor que el mayor?
  i.	Se convierte en el mayor
  b.	Es menor que el menor?
  i.	Se convierte en el menor
  5.	Vuelvo a repetir hasta terminar el arreglo
  6.	Devuelvo el mayor y el menor
  
  */
  
  const getOldestAndYoungest = (data) => {
    let mayor = data[0][2];
    let menor = data[0][2];
    data.forEach((currentValue) => {
      if (currentValue[2] > mayor) {
        mayor = currentValue[2];
      }
      if (currentValue[2] < menor) {
        menor = currentValue[2];
      }
    });
    return { mayor, menor }; // devuelve un objeto con dos propiedades para poder imprimirlo mas bonito
  };
  
  
  const getOldestAndYoungestReduce = (data) => {
    return data.reduce((acc, currentValue) => {
      if (currentValue[2] > acc.mayor) {
        acc.mayor = currentValue[2];
      }
      if (currentValue[2] < acc.menor) {
        acc.menor = currentValue[2];
      }
      return acc;
      }, { mayor: data[0][2], menor: data[0][2] }
      );
  };
  
  /* 
  Entrada
  Arreglo de arreglos
  Salida
  Arreglo de objetos
  Proceso
  1.	Tomo primer arreglo
  2.	Creo un objeto
  a.	asigno la propiedad name al primer elemento del arreglo
  b.	asigno la propiedad lastname al segundo elemento del arreglo
  c.	asigno la propiedad age al tercer elemento del arreglo
  3.	Repito hasta terminar todos los arreglos
  4.	Devuelvo el arreglo de objetos
  
  */
  
  const restructureData = (data) => {
    return data.map((person) => {
      return {
        name: person[0],
        lastname: person[1],
        age: person[2],
      };
    });
  };
  
  console.log(getFullNames(personas));
  console.log(getOldestAndYoungest(personas));
  console.log(getOldestAndYoungestReduce(personas));
  console.log(restructureData(personas));
  
  