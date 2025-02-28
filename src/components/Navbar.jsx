import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isVertical }) {
  return (
    <nav className={`navbar ${isVertical ? "vertical" : "horizontal"}`}>
      <ul>
        <li><Link to="/">Startseite</Link></li>
        <li><Link to="/posts">Beiträge</Link></li>
          <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/about">Über uns</Link></li>
        <li><Link to="/sources">Quellen</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
