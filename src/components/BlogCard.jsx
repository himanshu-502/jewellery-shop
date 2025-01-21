import React from 'react';
import "../styles/blogcard.css"

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-date">{blog.date}</p>
        <h3 className="blog-title">{blog.title}</h3>
        <a href={blog.link} className="read-more">
          Read More &rsaquo;
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
