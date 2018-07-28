// Possible Blog sites to use: Tumblr.
// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { Button } from 'primereact/button';
// import css
import './Blog.css';
// import API
import api from '../../utils/API';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      likes: null,
      totalposts: null,
      updated: null,
      url: null,
    };
  }

  componentDidMount() {
    const { posts, likes, totalposts, updated, url } = this.state;
    api.getPosts()
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data.response.posts });
        console.log('Posts retrieved from API and stored in state:', posts);
      });
    api.getInfo()
      .then((res) => {
        console.log(res.data);
        this.setState({ 
          likes: res.data.response.blog.likes,
          totalposts: res.data.response.blog.posts,
          updated: res.data.response.blog.updated,
          url: res.data.response.blog.url,
        });
        console.log('Blog info/stats:', likes, totalposts, updated, url);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-container">
        <div className="main">
          <div className="entries">
            {posts.map(post => (
              <div className="blog-post">
                  <span>
                    {post.tags.map(tag => (
                      <div className="blog-tag">#{tag}</div>
                    ))}
                  </span>
                <div className="blog-content">
                  <h1>{post.summary}</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <a href={post.post_url} target="_blank" rel="noopener noreferrer">
                  <Button label="Go to blog" className="btn read-more-btn" />
                </a>
              </div>
            ))};

          </div>
        </div>
        <div className="sidebar">
          <div className="about-blog">
            <h1>About this blog</h1>
            <div className="blog-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              sed consequuntur error repudiandae numquam deserunt quisquam repellat
              libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
              cupiditate neque quas!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
