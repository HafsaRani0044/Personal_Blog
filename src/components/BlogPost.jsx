import './BlogPost.css';

const BlogPost = ({ post, onReadMore }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const handleReadMore = () => {
    onReadMore(post.id);
  };

  return (
    <div className="blog-post-card">
      <div className="blog-post-image">
        <img src={post.image} alt={post.title} />
        <div className={`category-badge ${post.category.toLowerCase()}`}>{post.category}</div>
      </div>
      <div className="blog-post-content">
        <h3 className="blog-post-title">{post.title}</h3>
        <p className="blog-post-date">{formatDate(post.date)}</p>
        <p className="blog-post-description">{post.description}</p>
        <button className="read-more-btn" onClick={handleReadMore}>Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
