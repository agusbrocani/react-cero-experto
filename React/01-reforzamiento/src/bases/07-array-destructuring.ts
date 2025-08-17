const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [p1,, p3] = characterNames; // no ocupo un espacio en memoria
const [,,trunks] = characterNames;

console.log({p1, p3});
console.log({trunks});

const returnsArrayFn = () => {
    // retorna una tupla
    return ['ABC', 123] as const;    // SIEMPRE 1° string y 2° number con el as const
};

const [letters, numbers] = returnsArrayFn();

// con el as const => me permite hacerlo
console.log(letters + 100);
console.log(numbers + 100);

// Tarea: https://gist.github.com/Klerith/6db6ce73a652e3a5639673adc9be7895
// Implementar useState

const useState = (state: string) => {
    const setState = (state: string): void => console.log(state);
    return [state, setState] as const;
};

const [name, setName] = useState('Goku');
console.log('Name: ', name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
