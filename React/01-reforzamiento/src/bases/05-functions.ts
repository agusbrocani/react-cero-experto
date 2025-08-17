function greet(name: string): string {  // saludar
    return `Hola ${name}`;

}

// Arrow function
// Ventaja: no cambia a lo que apunta el objeto this.
// Explicit return
const greet2 = (name: string): string => {
    return `Hola ${name}`;
}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message);
console.log(message2);

interface User {
    uid: string;
    username: string;
};

function getUser (): User {
    return {
        uid: 'ABC-123',
        username: 'El_papi23',
    };
}

const getUser2 = (): User => {
    return {
        uid: 'ABC-123',
        username: 'El_papi23',
    }; 
}

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

// Implicit return: es conveniente usar () en algunos casos.
const greet3 = (name: string): string => `Hola ${name}`;
console.log(greet3);

const getUser3 = (): User => ({
    uid: 'ABC-123',
    username: 'El_papi23',
});

const user3 = getUser3();
console.log(user3);

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach(function (value) {
    console.log(value);
});

// forEach(callback)
//  callback(value, index, array) => console.log(value, index, array);
// myNumbers.forEach((value) => console.log(value));
myNumbers.forEach(console.log);
