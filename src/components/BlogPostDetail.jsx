import { blogPosts } from '../data/blogData';
import './BlogPostDetail.css';

const BlogPostDetail = ({ postId, onBack }) => {
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post not found</h2>
        <button onClick={onBack} className="back-btn">
          Back to Home
        </button>
      </div>
    );
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="blog-post-detail-page">
      <div className="blog-post-detail">
        <div className="post-header">
          <button onClick={onBack} className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Blog
          </button>
        </div>
      
      <article className="post-content">
        <div className="post-image-container">
          <img src={post.image} alt={post.title} className="post-image" />
        </div>
        
        <div className="post-text-content">
          <header className="post-meta">
            <div className="post-info">
              <span className="post-date">{formatDate(post.date)}</span>
              <span className="reading-time">5 min read</span>
            </div>
          </header>
          
          <div className="post-description">
            <p className="post-excerpt">{post.description}</p>
          </div>
          
          <div className="post-body">
            <p>{post.excerpt}</p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h3>Key Points</h3>
            <ul>
              <li>Comprehensive coverage of the topic</li>
              <li>Practical tips and insights</li>
              <li>Real-world examples and case studies</li>
              <li>Expert recommendations</li>
            </ul>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <h3>Conclusion</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          
          <div className="post-tags">
            <span className="tag">Featured</span>
            <span className="tag">Popular</span>
          </div>
          
          <div className="post-actions">
            <button className="share-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16,6 12,2 8,6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              Share
            </button>
            <button className="bookmark-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
              Bookmark
            </button>
          </div>
        </div>
      </article>
    </div>
    </div>
  );
};

export default BlogPostDetail;
