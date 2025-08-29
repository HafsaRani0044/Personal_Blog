import './CategoryFilter.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const handleClick = (e, category) => {
    e.preventDefault();
    e.stopPropagation();
    onCategoryChange(category);
  };

  return (
    <div className="category-filter">
      {categories && categories.map((category) => (
        <button
          key={category}
          type="button"
          data-category={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={(e) => handleClick(e, category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
