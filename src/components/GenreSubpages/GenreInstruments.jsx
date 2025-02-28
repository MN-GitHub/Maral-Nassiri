import React, { useState } from "react";
import "../../styles/GenreInstruments.css";
import "../../styles/General.css";

function GenreInstruments({ data }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="genre-instruments-page">
      <h2 className="genre-instruments-heading">{data.title}</h2>
      <div className="genre-nstruments-container">
        <div className="text-blocks">
          {data.texts &&
            data.texts.map((block, index) => (
              <div key={index} className={`text-block ${block.className || ""}`}>
                {block.heading && (
                  <h3 className="text-block-heading">{block.heading}</h3>
                )}
                <p>{block.content}</p>
              </div>
            ))}
        </div>
        <div className="photo-box">
          <img src={data.image} alt="Instruments" className="genre-instruments-photo" />
        </div>
      </div>
      <div className="genre-quiz">
        <h3 className="genre-quiz-heading">Musikquiz:</h3>
        <div className="quiz-question">
          <p>{data.quiz.question}</p>
          <ul>
            {data.quiz.options.map((option, index) => (
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
              Die korrekte Antwort ist: [{data.quiz.answer}]
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenreInstruments;
