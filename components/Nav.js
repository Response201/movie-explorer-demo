"use client";

import Link from "next/link";
import { useMovies } from "../context/MovieContext";


export default function Nav() {
   const { setError } = useMovies()
  return (
    <nav className="navbar">
      <Link href="/">Hem</Link> 
      <Link href="/movies" onClick={()=> setError("")}>Filmer</Link>
    </nav>
  );
}