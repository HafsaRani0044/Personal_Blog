import { useState, useMemo } from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import CategoryFilter from './components/CategoryFilter';
import HeroSection from './components/HeroSection';
import Pagination from './components/Pagination';
import BlogPostDetail from './components/BlogPostDetail';
import { blogPosts, categories } from './data/blogData';

const POSTS_PER_PAGE = 9;

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'detail'
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Filter posts by category and search term
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts]; // Create a copy to avoid mutations
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId);
    setCurrentView('detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedPostId(null);
  };

  // Show blog post detail view
  if (currentView === 'detail') {
    return <BlogPostDetail postId={selectedPostId} onBack={handleBackToHome} />;
  }

  return (
    <div className="blog-app">
      <HeroSection onSearch={handleSearch} searchTerm={searchTerm} />
      <main className="main-content">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <section className="blog-posts-grid">
          {paginatedPosts.length === 0 ? (
            <div className="no-posts">No blog posts found.</div>
          ) : (
            paginatedPosts.map((post) => <BlogPost key={post.id} post={post} onReadMore={handlePostSelect} />)
          )}
        </section>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          postsPerPage={POSTS_PER_PAGE}
          totalPosts={filteredPosts.length}
        />
      </main>
    </div>
  );
}

export default App;
