import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div className="page-center">
      <div className="details-card">
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>

        <button onClick={() => navigate("/book")}>
          Book Seat
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
