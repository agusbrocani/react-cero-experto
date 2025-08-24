import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    // NO utilizar esta forma, usar axios
    // fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=ALGO&q=${query}&limit=25&lang=en`
    // );

    const response = await giphyApi<GiphyResponse>(
        '/search',
        {
            params: {
                q: query,
                limit: 10,
            }
        });

    // Mapeando dato a formato que me sirve
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));
};
