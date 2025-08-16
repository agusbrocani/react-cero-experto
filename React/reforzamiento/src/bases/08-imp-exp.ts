import heroes, { Owner, type Hero } from '../data/heroes.data'

const getHeroById = (id: number): Hero | undefined => {
    return heroes.find((hero) => id === hero?.id);
};

const heroById = getHeroById(1);

console.log({heroById});

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter((heroe) => heroe?.owner === owner);
};
