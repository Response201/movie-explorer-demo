
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getMovieById, getMovies, toggleFavorite } from "../utils/movieFunctions"


const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    async function fetchMovies() {
      const savedMovies = localStorage.getItem("movies");
      if (savedMovies) {
        setMovies(JSON.parse(savedMovies));
      } else {
        await getMovies(setMovies, setLoading, setError);
      }
    }
    fetchMovies();
  }, []);




  return (
    <MovieContext.Provider
      value={{
        movies, setMovies,
        movie, setMovie,
        loading, setLoading,
        error, setError,
        toggleFavorite: (movie) => toggleFavorite(movie, setMovie, setError),
        getMovieById: (movieId) => getMovieById(movieId, movies, setMovie, setLoading, setError),
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
