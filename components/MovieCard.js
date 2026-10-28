"use client";

import Link from "next/link";
import { useMovies } from "../context/MovieContext";

export default function MovieCard({ movie }) {
  const { setMovie, setError } = useMovies()
  return (
    <article className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.year} · {movie.genre}</p>
      <Link href={`/movies/${movie.id}`} onClick={() => {setMovie(undefined), setError("")}}>
        Läs mer
      </Link>

    </article>
  );
}
