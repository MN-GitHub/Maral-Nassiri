import { Link } from "react-router-dom";
import "../styles/GenreCard.css";

function GenreCard({ name, image, path }) {
  return (
    <div className="genre-card">
      <Link to={path} className="genre-link">
        <img src={image} alt={name} className="genre-image" />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

export default GenreCard;
