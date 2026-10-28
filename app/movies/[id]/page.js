"use client";

import { useParams } from "next/navigation";
import SelectedMovieCard from "../../../components/SelectedMovieCard";
import { useMovies } from "../../../context/MovieContext";
import { useEffect } from "react";
import { Loading } from "../../../components/Loading";

export default function MoviePage() {
  const { id } = useParams();
  const { movies,getMovieById, movie, loading, error } = useMovies();

  

useEffect(() => {
    if (movies.length >= 1) {
        getMovieById(id);
    }
}, [id, movies]);


  return (
    <main>
          

      {loading && <Loading />}
     
      {movie && !loading && <SelectedMovieCard movie={movie} />}
      
      {error && <p className="error">{error}</p>}
  

    </main>
  );
}