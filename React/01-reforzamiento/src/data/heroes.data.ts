export interface Hero {    // va arriba porque es de mayor jerarquía
    id: number,
    name: string,
    owner: Owner
};
// Regla
// type Owner = 'DC' | 'Marvel';

// Enum: crea un objeto
export enum Owner {
    DC = 'DC',          // 0 si no defino valor
    Marvel = 'Marvel'  // 1 si no defino valor
};

const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel
    },
];

export default heroes;