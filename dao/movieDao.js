import databasePromise from "../lib/db";

export async function getMovies() {
    try {
        const database = await databasePromise;
        return await database.all("SELECT * FROM movies");

    } catch (error) {
        throw error;
    }
}



export async function updateMovie(id, isFavorite) {
    try {
        const database = await databasePromise;

        await database.run(
            "UPDATE movies SET isFavorite = (?) WHERE id = (?)",
            isFavorite,
            id
        );

        return await database.get(
            "SELECT * FROM movies WHERE id = ?",
            id
        );
    } catch (error) {
        throw error;
    }
}