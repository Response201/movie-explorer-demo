"use client";

import { useMovies } from "../context/MovieContext";
import { useState } from "react";

export default function FavoriteButton({ movie }) {
    const { toggleFavorite } = useMovies();
    const [localLoading, setLocalLoading] = useState(false);

    async function handleClick(e) {
    
        try {
            setLocalLoading(true);
            await toggleFavorite(movie);
        } catch (error) {
          console.log("något gick fel")
        } finally {
          
            setTimeout(() => {
                setLocalLoading(false);
            }, 1000);
        }
    }

    return (
        <button
         type="button"
            onClick={handleClick}
            className={movie.isFavorite ? "active" : ""}
            disabled={localLoading}
        >
            {localLoading ? <div id="loading"></div> : "♥"}
        </button>
    );
}