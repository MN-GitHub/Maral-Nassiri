import React, { useState } from "react";
import "../../styles/GenreIcons.css";
import "../../styles/General.css";

function GenreIcons({ data }) {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleCardClick = (artist) => {
    if (selectedArtist && selectedArtist.id === artist.id) {
      setSelectedArtist(null);
      setShowAnswer(false);
    } else {
      setSelectedArtist(artist);
      setShowAnswer(false);
    }
  };
 
  return (
    <div className="genre-icons-page">
      <h2 className="genre-icons-heading">Musik-Ikonen</h2>
      <div className="genre-icons-cards-container">
        {data.map((artist) => (
          <div
            key={artist.id}
            className="genre-icon-card"
            onClick={() => handleCardClick(artist)}
          >
            <img src={artist.image} alt={artist.name} className="genre-icon-image" />
            <h3 className="genre-icon-name">{artist.name}</h3>
          </div>
        ))}
      </div>
      {selectedArtist && (
        <div className="genre-icon-detail">
          <h3 className="genre-icon-detail-heading">
            {selectedArtist.name} – Über den Künstler
          </h3>
          <p className="genre-icon-description">{selectedArtist.description}</p>
          <div className="genre-quiz">
            <h3 className="genre-quiz-heading">Musikquiz:</h3>
            <div className="quiz-question">
              <p>{selectedArtist.quiz.question}</p>
              <ul>
                {selectedArtist.quiz.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <button
                className="quiz-answer"
                onClick={() => setShowAnswer(true)}
              >
                Antwort anzeigen
              </button>
              {showAnswer && (
                <p className="quiz-answer-text">
                  {/* Hier kannst du die korrekte Antwort oder weitere Informationen anzeigen */}
                  Die korrekte Antwort ist: [{selectedArtist.quiz.answer}]
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GenreIcons;
