// Motivo por el cual debo crear como const los objetos.

// let person = {
//     name: 'Tony',
//     lastName: 'Stark',
//     age: 45
// };

// person = {
//     name: 'Tony2',
//     lastName: 'Stark2',
//     age: 54
// };
//  ES VALIDO

interface Address {
    postalCode: string,
    city: string,
}

interface Person {
    name: string,
    lastName: string,
    age: number,
    address: Address
};
// Equivalente a lo de arriba. NO USAR, hacer una composición de interfaces
// interface Person {
//     name: string,
//     lastName: string,
//     age: number,
//     address: {
//         postalCode: string,
//         city: string
//     }
// };

const ironman: Person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
};

const spiderman: Person = {
    name: "",
    lastName: "",
    age: 0,
    address: {
        postalCode: "",
        city: ""
    }
}

// // const spiderman = ironman;
// // Shallow copy
// // const spiderman = {...ironman};
// // Deep copy
// const spiderman = structuredClone(ironman);


// ironman.name = 'Peter';
// ironman.lastName = 'Parker';
// ironman.age = 22;
// ironman.address.city = 'San Jose';

// console.log(ironman);
// console.log(spiderman);

// Interfaces - TypeScript
console.log(ironman);
console.log(spiderman);
