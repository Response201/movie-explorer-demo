import { getMovies } from "../../../dao/movieDao";


export async function GET() {
    try {
        const movies = await getMovies()
         if (!movies) {
            return Response.json(
                { message: "Filmer hittades inte." },
                { status: 404 }
            );
        }
        return Response.json(movies);
        
    } catch (error) {
   
        return Response.json(
            { message: "Kunde inte hämta filmer." },
            { status: 500 }
        );
    }
}


