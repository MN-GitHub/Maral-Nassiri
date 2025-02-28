import { NavLink, Routes, Route } from "react-router-dom";
import GenreHistory from "../components/GenreSubpages/GenreHistory";
import GenreIcons from "../components/GenreSubpages/GenreIcons";
import GenreAlbums from "../components/GenreSubpages/GenreAlbums";
import GenreInstruments from "../components/GenreSubpages/GenreInstruments";
import GenrePlaylists from "../components/GenreSubpages/GenrePlaylists";
import "../styles/GenrePage.css";

function GenrePage({ data }) {
  return (
    <div className="genre-page">
      <h1>{data.genre}</h1>
      <nav className="genre-navbar">
        <NavLink to="history" className="genre-nav-item">Geschichte</NavLink>
        <NavLink to="icons" className="genre-nav-item">Musik-Ikonen</NavLink>
        <NavLink to="albums" className="genre-nav-item">Berühmte Alben/Songs</NavLink>
        <NavLink to="instruments" className="genre-nav-item">Instrumente</NavLink>
        <NavLink to="playlists" className="genre-nav-item">Playlists</NavLink>
      </nav>
      <div className="genre-content">
        <Routes>
          {/* Index-Route, falls keine Unterroute ausgewählt wurde */}
          <Route index element={<GenreHistory data={data.history} />} />
          <Route path="history" element={<GenreHistory data={data.history} />} />
          <Route path="icons" element={<GenreIcons data={data.icons} />} />
          <Route path="albums" element={<GenreAlbums data={data.albums} />} />
          <Route path="instruments" element={<GenreInstruments data={data.instruments} />} />
          <Route path="playlists" element={<GenrePlaylists data={data.playlists} />} />
        </Routes>
      </div>
    </div>
  );
}

export default GenrePage;
