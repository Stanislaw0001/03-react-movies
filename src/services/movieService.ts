import axios, { type AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

interface MovieApiResponse {
    results: Movie[];
}

const API_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query: string): Promise<Movie[]> {
    const response: AxiosResponse<MovieApiResponse> = await axios.get<MovieApiResponse>(API_URL, {
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            query,
        },
    });

    return response.data.results;
}