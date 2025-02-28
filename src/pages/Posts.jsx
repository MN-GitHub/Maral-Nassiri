import { useState } from "react";
import postsData from "../data/posts";
import "../styles/Posts.css";
import addPostImage from "../assets/images/add-post-2.jpg"; // Bild importieren

function Posts() {
  const [posts, setPosts] = useState(postsData); // Statische Beiträge laden
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return; // Leere Einträge verhindern

    const newPost = {
      id: posts.length + 1,
      title,
      description,
    };

    setPosts([...posts, newPost]); // Neuen Beitrag zur Liste hinzufügen
    setTitle(""); // Eingabefelder leeren
    setDescription("");
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="posts">
      <h1>Beiträge</h1>

      {/* Suchfeld für Beiträge */}
      <input
        type="text"
        className="search-bar"
        placeholder="Suche nach Beiträgen..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Formular zum Hinzufügen eines Beitrags */}
      <div className="add-post-section">
        <h2>Neuen Beitrag hinzufügen</h2>
        <img src={addPostImage} alt="Beitrag hinzufügen" className="add-post-image" />
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            placeholder="Titel des Beitrags"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Beschreibung"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" className="add-post-btn">Beitrag hinzufügen</button>
        </form>
      </div>

      {/* Liste der Beiträge */}
      <div className="posts-list">
        <h2>Alle Beiträge</h2>
        {filteredPosts.length === 0 ? (
          <p>Keine passenden Beiträge gefunden.</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
