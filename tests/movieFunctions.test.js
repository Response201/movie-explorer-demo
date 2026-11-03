import { describe, test, expect } from "vitest";
import { getFavoriteMovies } from "../utils/movieFunctions";

/* 
  Du behöver köra npm i men
  Jag gjort för att kunna köra test: 

  installerat: 
  npm install -D vitest

  lagt till:
  package.json > 
  "scripts": {
    "test": "vitest"
  },

  sedan för att starta test, terminalen: 
  npm run test

*/

/*  Vi ska bygga ett test för funktionen:

     export function getFavoriteMovies(movies) {
         return movies.filter(movie => movie.isFavorite === true);
        }
*/

describe("getFavoriteMovies", () => {
	const movies = [
		{ id: 1, title: "The Matrix", isFavorite: true },
		{ id: 2, title: "Jurassic Park", isFavorite: false },
		{ id: 3, title: "Pulp Fiction", isFavorite: true }
	];

	const result = getFavoriteMovies(movies);

	//should return two favorite movies

	test("should return two favorite movies", () => {
		expect(result).toHaveLength(2);
	});

	//should return The Matrix as the first movie

	test("should return The Matrix as the first movie", () => {
		expect(result[0].title).toBe("The Matrix");
	});

	//should return Pulp Fiction as the second movie
	test("should return Pulp Fiction as the second movie", () => {
		expect(result[1].title).toBe("Pulp Fiction");
	});
});
