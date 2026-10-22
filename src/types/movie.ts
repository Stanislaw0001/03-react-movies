export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

export interface SearchBarProps {
    onSearch: (topic: string) => void;
}

export interface MovieGridProps {
    movies: movies[];
}