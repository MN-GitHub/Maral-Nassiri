import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Sources from "./pages/Sources";
import GenreList from "./components/GenreList";
import GenrePage from "./pages/GenrePage";

import { rapData } from "./data/rapData";
import { rockData } from "./data/rockData";
import { jazzData } from "./data/jazzData";
import { indieData } from "./data/indieData";

import "./App.css";

function App() {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <Router>
      <Navbar isVertical={isVertical} />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home setIsVertical={setIsVertical} isVertical={isVertical} />}
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/genres" element={<GenreList />} />
          <Route path="/genres/rap/*" element={<GenrePage data={rapData} />} />
          <Route path="/genres/rock/*" element={<GenrePage data={rockData} />} />
          <Route path="/genres/jazz/*" element={<GenrePage data={jazzData} />} />
          <Route path="/genres/indie/*" element={<GenrePage data={indieData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
