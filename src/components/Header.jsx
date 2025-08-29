import './Header.css';

const Header = () => {
  return (
    <header className="blog-header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="blog-title">
            <span className="category-word food">Food</span>
            <span className="separator">||</span>
            <span className="category-word travel">Travel</span>
            <span className="separator">||</span>
            <span className="category-word tech">Tech</span>
          </h1>
        </div>
        <div className="header-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
