import { fetchData } from "../services/fetchData";



export async function getMovies(setMovies, setLoading, setError) {

       try {
              setLoading(true);
              const data = await fetchData();
              setMovies(data);
              localStorage.setItem("movies", JSON.stringify(data));
              
       } catch (error) {
              setMovies([]);
              console.log("Kunde inte hämta filmer:", error);
              setError(error);
       } finally {

              setLoading(false);
              

       }
}



export async function getMovieById(id, movies, setMovie, setLoading, setError) {
       try {

              setLoading(true)
              
              const savedMovie = await movies.find(
                     (movie) => movie.id === Number(id)
              );

              if (savedMovie) {
                     setMovie(savedMovie);
              } else {
                     setMovie(undefined);
                     setError("Filmen kunde inte hittas.");
              }
       } catch (error) {
              console.log("Kunde inte hitta filmen:", error);
              setError(error);
       }
       finally {

              setLoading(false)

       }

}




export async function toggleFavorite(movie, setMovie, setError) {

       try {
              setError("")
              const updateThisMovie = await fetchData(`/${movie.id}`, "PUT", { isFavorite: !movie.isFavorite });


              const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];


              const updatedMoviesList = savedMovies.map((savedMovie) =>
                     savedMovie.id === updateThisMovie.id ? updateThisMovie : savedMovie
              );

              localStorage.setItem("movies", JSON.stringify(updatedMoviesList));
              setMovie(updateThisMovie)

       } catch (error) {
              setError(error);
       }


}

