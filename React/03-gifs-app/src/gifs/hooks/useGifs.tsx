import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// Solucion 1:
// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // const gifsCache: Record<string, Gif[]> = {};
    //  Si dejo esto acá, no va a funcionar de cache, va a ejecutar top down otra vez y se resetea
    //  Hay 2 soluciones
    //      => saco gifsCache fuera del custom hook
    //      => utilizo el hook useRef

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        // Puedo optimizar, para no volver a hacer request => uso cache

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;
    };

    return ({
        // Properties
        gifs: gifs,

        // Methods
        handleSearch: handleSearch,
        handleTermClicked: handleTermClicked,
        previousTerms: previousTerms,
    });
};

export default useGifs;
