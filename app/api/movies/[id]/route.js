import {  updateMovie } from "../../../../dao/movieDao";


export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const {isFavorite } = await request.json();
       
        
        const movie = await updateMovie(id,isFavorite)
         if (!movie) {
            return Response.json(
                { message: "Filmen hittades inte." },
                { status: 404 }
            );
        }
        return Response.json(movie);

    } catch (error) {
     
        return Response.json(
            { message: "Kunde inte uppdatera filmen." },
            { status: 500 }
        );
    }
}
