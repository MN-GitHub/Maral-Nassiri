import genres from "../data/genres";
import GenreCard from "./GenreCard";
import "../styles/Genres.css";

function Genres() {
  return (
    <div className="genres">
      <h1>Genres</h1>
      <div className="genre-list">
        {genres.map((genre) => (
          <GenreCard key={genre.id} {...genre} />
        ))}
      </div>
    </div>
  );
}

export default Genres;
