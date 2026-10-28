
import FavoriteButton from "./FavoriteButton";

export default function SelectedMovieCard({ movie }) {
  return (

    <article className="selected-movie">
      <section className="movie-card">
        <img src={movie.image} alt={movie.title} />
        <section className="like-button">
          <FavoriteButton movie={movie} />
        </section>
        <h2>{movie.title}</h2>
        <p>{movie.year} · {movie.genre}</p>
        <p>{movie.description}</p>
      </section>
      <section> 
      </section>
 
    </article>
     
  );
}
