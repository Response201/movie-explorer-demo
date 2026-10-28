import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <h1>404 – Sidan hittades inte</h1>
            <p>Sidan du söker finns inte.</p>
            <Link href="/">Tillbaka till startsidan</Link>
        </main>
    );
}