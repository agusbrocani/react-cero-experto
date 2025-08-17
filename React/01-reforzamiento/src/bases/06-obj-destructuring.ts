const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// Sin object destructuring
// const name = person.name;
// const age = person.age;
// const key = person.key;

// Con object destructuring
// const {key, age, name} = person;

// console.log({name, age, key});

interface Hero {
    name: string,
    age: number,
    key: string,
    // rank: string | undefined,    // cada forma tiene su beneficio
    rank?: string,
};

const useContext = (hero: Hero) => {
    const {age, key, name, rank = 'Sin rango'} = hero;
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank,
    };
};

const context = useContext(person);
const {keyName: key, user: {name, age}, rank} = useContext(person);

console.log(context);
console.log({key, name, age, rank});
