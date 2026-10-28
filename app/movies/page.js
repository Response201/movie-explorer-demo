
"use client";

import { Loading } from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import { useMovies } from "../../context/MovieContext";


export default function Home() {
    const { movies, loading, error } = useMovies();

    return (
        <main>

            {loading && <Loading />}

            {movies && !loading &&
                <>
                    <h2>Alla filmer</h2>
                    <div className="movie-list">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div></>}

            {error && <p>{error}</p>}


        </main>
    );
}
