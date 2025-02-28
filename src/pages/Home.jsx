import "../styles/Home.css";
import React from "react";
import musicImage from "../assets/images/home.jpg";

function Home({ setIsVertical, isVertical }) {
  return (
    <div className="home">
      <h1>Willkommen bei unserem Musik Blog!</h1>
      <p>Entdecke spannende neue Musik vier verschiedener Genres.</p>

      <br />
      <br />

      {/* Bild */}
      <img src={musicImage} alt="Musik" className="home-image" />

      {/* View-Section mit Button zum Umschalten */}
      <div className="view-section">
        <h2>View</h2>
        <button className="toggle-btn" onClick={() => setIsVertical(prev => !prev)}>
          {isVertical ? "Navbar horizontal anzeigen" : "Navbar vertikal anzeigen"}
        </button>
      </div>
    </div>
  );
}

export default Home;
