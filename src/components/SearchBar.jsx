import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  const handleChange = (e) => {
    setLocalSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setLocalSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search blog posts by title..."
            value={localSearchTerm}
            onChange={handleChange}
            className="search-input"
          />
          {localSearchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="clear-search-btn"
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
