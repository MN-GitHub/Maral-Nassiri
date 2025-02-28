import { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Suche nach Bands oder Beiträgen..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
