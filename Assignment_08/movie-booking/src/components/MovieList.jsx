import movies from "../data/movies";
import MovieCard from "./MovieCard";
import Header from "./Header";

function MovieList() {
  return (
    <>
      <Header />

      <div className="movie-page">
        <h2 className="page-title">Now Showing</h2>

        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
