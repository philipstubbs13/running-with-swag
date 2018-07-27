// Possible Blog sites to use: Tumblr.
// import React
import React, { Component } from 'react';
// import css
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <div className="main">
          <h1 className="page-title">Blog</h1>
          <div className="blog-header-image">
          </div>
        </div>
        <div className="sidebar">
          <h1>Sidebar</h1>
        </div>
      </div>
    );
  }
}

export default Blog;
