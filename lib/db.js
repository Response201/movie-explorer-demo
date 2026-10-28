
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { movieData } from "./data/movieData";

// Ansluter till databasen och skapar den om den inte finns
async function connectDatabase() {
    try {
        const database = await open({
            filename: "./database/movies.db",
            driver: sqlite3.Database
        });

    

        // Skapar tabellen om den inte finns
        await database.run(`
            CREATE TABLE IF NOT EXISTS movies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                year INTEGER NOT NULL,
                genre TEXT NOT NULL,
                description TEXT NOT NULL,
                image TEXT NOT NULL,
                isFavorite INTEGER DEFAULT 0
            )
        `);

      
        const movies = await database.all("SELECT * FROM movies");

        // Lägger till filmer om movies är tom
        if (movies.length === 0) {
            for (const movie of movieData) {
                await database.run(
                    `INSERT INTO movies
                        (title, year, genre, description, image)
                     VALUES (?, ?, ?, ?, ?)`,
                    [
                        movie.title,
                        movie.year,
                        movie.genre,
                        movie.description,
                        movie.image
                    ]
                );
            }

            console.log("filmerna har lagts till");
        }

      

        return database;
    } catch (error) {
        console.log("Fel vid skapande eller anslutning till databasen:", error);
        throw error;
    }
}

const database = connectDatabase();

export default database;
