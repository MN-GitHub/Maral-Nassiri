import React from "react";
import { Link } from "react-router-dom";
import { rapData } from "../data/rapData";
import { rockData } from "../data/rockData";
import { jazzData } from "../data/jazzData";
import { indieData } from "../data/indieData";
import GenreCard from "./GenreCard"; // Passe den Pfad an, falls nötig
import "../styles/GenreList.css";

const genres = [rapData, rockData, jazzData, indieData];

function GenreList() {
  return (
    <div className="genre-list">
      <h1>Genres</h1>
      <div className="genre-cards">
        {genres.map((genre) => (
          <GenreCard 
            key={genre.genre} 
            name={genre.genre} 
            image={genre.image} // Falls du ein Bild im Datenobjekt hast; sonst kannst du einen Platzhalter setzen
            path={`/genres/${genre.genre.toLowerCase()}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default GenreList;
