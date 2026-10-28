
import { MovieProvider } from "../context/MovieContext";
import Nav from "../components/Nav"
import "./globals.css";

export const metadata = {
    title: "Movie Explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <MovieProvider>
          <header>
            <Nav />
          </header>
          {children}
        </MovieProvider>
      </body>
    </html>
  );
}
