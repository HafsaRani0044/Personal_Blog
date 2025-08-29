import './HeroSection.css';
import SearchBar from './SearchBar';

const HeroSection = ({ onSearch, searchTerm }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">
            <span className="hero-category-word food">Food</span>
            <span className="hero-separator">||</span>
            <span className="hero-category-word travel">Travel</span>
            <span className="hero-separator">||</span>
            <span className="hero-category-word tech">Tech</span>
          </h2>
          <p className="hero-subtitle">
            Sharing insights on technology, travel adventures, and culinary discoveries
          </p>
        </div>
        <div className="hero-search">
          <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
