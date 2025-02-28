import React, { useState } from "react";
import "../../styles/GenrePlaylists.css";
import "../../styles/General.css";

function GenrePlaylists({ data }) {
  const [report, setReport] = useState("");
  const [submittedReport, setSubmittedReport] = useState("");

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setSubmittedReport(report);
    setReport("");
  };

  return (
    <div className="genre-playlists-page">
      <h2 className="genre-playlists-heading">{data.title}</h2>
      <div className="playlists-cards-container">
        {data.playlists.map((playlist) => (
          <a key={playlist.id} href={playlist.link} target="_blank" rel="noopener noreferrer" className="playlist-card">
            <img src={playlist.image} alt={playlist.name} className="playlist-card-image" />
            <h3 className="playlist-card-name">{playlist.name}</h3>
          </a>
        ))}
      </div>
      <div className="video-container">
        <h3>Musikvideo</h3>
        <iframe
          width="560"
          height="315"
          src={data.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="report-section">
        <h3>Berichte zu Konzerten und Festivals</h3>
        <form onSubmit={handleReportSubmit}>
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Schreiben Sie hier Ihren Bericht..."
          ></textarea>
          <button type="submit">Bericht absenden</button>
        </form>
        {submittedReport && (
          <div className="submitted-report">
            <h4>Ihr Bericht:</h4>
            <p>{submittedReport}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenrePlaylists;
