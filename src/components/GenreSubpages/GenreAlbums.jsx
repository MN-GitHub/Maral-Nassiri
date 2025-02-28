import React, { useState } from "react";
import "../../styles/GenreAlbums.css";
import "../../styles/General.css";

function GenreAlbums({ data }) {
  const [favoriteAlbum, setFavoriteAlbum] = useState(null);

  const handleVote = (album) => {
    setFavoriteAlbum(album);
  };

  return (
    <div className="genre-albums-page">
      <h2 className="genre-albums-heading">Berühmte Alben/Songs</h2>
      <div className="genre-albums-cards-container">
        {data.map((album) => (
          <div key={album.id} className="genre-album-card" onClick={() => handleVote(album)}>
            <img src={album.image} alt={album.albumTitle} className="genre-album-image" />
            <h3 className="genre-album-title">{album.albumTitle}</h3>
            <p className="genre-album-artist">{album.artist}</p>
            <p className="genre-album-description">{album.description}</p>
            <button className="genre-album-vote-button">Als Lieblingsalbum wählen</button>
          </div>
        ))}
      </div>
      {favoriteAlbum && (
        <div className="genre-album-vote-result">
          <h3>Lieblingsalbum ausgewählt:</h3>
          <p>
            {favoriteAlbum.albumTitle} von {favoriteAlbum.artist}
          </p>
          <p>Vielen Dank für Ihre Abstimmung!</p>
        </div>
      )}
    </div>
  );
}

export default GenreAlbums;
