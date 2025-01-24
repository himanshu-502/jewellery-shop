import React from 'react';
import "../styles/blogcard.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const BlogCard = ({ blog }) => {
  const navigate=useNavigate()
  const blogread=()=>{
    navigate(`/blogread/${blog.id}`)
  }
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-date">{blog.date}</p>
        <h3 className="blog-title">{blog.title}</h3>
        <button onClick={blogread} className="read-more">
          Read More &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
