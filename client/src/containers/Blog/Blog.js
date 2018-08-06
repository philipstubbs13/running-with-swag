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
      likes: '',
      totalposts: '',
      url: '',
    };
  }

  componentDidMount() {
    const {
      posts, likes, totalposts, updated, url,
    } = this.state;
    api.getPosts()
      .then((res) => {
        // console.log(res.data);
        this.setState({ posts: res.data.response.posts });
        // console.log('Posts retrieved from API and stored in state:', posts);
      });
    api.getInfo()
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.response.blog.likes);
        this.setState({
          likes: res.data.response.blog.likes,
          totalposts: res.data.response.blog.posts,
          updated: res.data.response.blog.updated,
          url: res.data.response.blog.url,
        });
        // console.log(likes);
        // console.log(totalposts);
        // console.log(updated);
        // console.log(url);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-container">
        <div className="main">
          <div className="entries">
            {posts.map(post => (
              <div className="blog-post" key={post.id}>
                <ul className="tags">
                  {post.tags.map(tag => (
                    <li className="blog-tag" key={post.tags.indexOf(tag)}>#{tag}</li>
                  ))}
                </ul>
                <div className="blog-summary">
                  <h1>{post.summary}</h1>
                </div>
                <div className="blog-content">
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <a href={post.post_url} target="_blank" rel="noopener noreferrer">
                  <Button label="like and leave a comment" className="btn read-more-btn" />
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
