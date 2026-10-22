import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import type { Movie } from '../../types/movie';
import { fetchMovies } from '../../services/movieService';
import MovieGrid from '../MovieGrid/MovieGrid';

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async (query: string) => {
        setMovies([]);

        try {
            const results = await fetchMovies(query);

            if (results.length === 0) {
                toast.error('no movies found for your request.');
                return;
            }

            setMovies(results);
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : 'Failed to load movies.'
            );
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false}/>
            <SearchBar onSearch={handleSearch} />
            <MovieGrid movies={movies} />
        </>
    )
}