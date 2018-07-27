// Possible Blog sites to use: Tumblr.
// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import css
import './Blog.css';
// import blog image
import blogImage from '../../images/blog-img.jpg';
// import API
import api from '../../utils/API';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    api.getPosts()
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data.response.posts });
        console.log('Posts retrieved from API and stored in state:', this.state.posts);
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
                {/* <div className="blog-image-div">
                  <img src={blogImage} alt="blog image" className="blog-image" />
                </div> */}
                <div className="blog-content">
                  <h1>{post.summary}</h1>
                  <div dangerouslySetInnerHTML={ {__html: post.body} } />
                </div>
                <a href={post.post_url}>
                  <Button label="Continue reading" className="btn read-more-btn" />
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
