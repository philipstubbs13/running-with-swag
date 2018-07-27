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

class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <div className="main">
          <div className="entries">
            <div className="blog-post">
              <div className="blog-image-div">
                <img src={blogImage} alt="blog image" className="blog-image" />
              </div>
              <div className="blog-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                sed consequuntur error repudiandae numquam deserunt quisquam repellat
                libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate neque quas!
              </div>
              <a href="#">
                <Button label="Continue reading" className="btn read-more-btn" />
              </a>
            </div>

            <div className="blog-post">
              <div className="blog-image-div">
                <img src={blogImage} alt="blog image" className="blog-image" />
              </div>
              <div className="blog-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                sed consequuntur error repudiandae numquam deserunt quisquam repellat
                libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate neque quas!
              </div>
              <a href="#">
                <Button label="Continue reading" className="btn read-more-btn" />
              </a>
            </div>

            <div className="blog-post">
              <div className="blog-image-div">
                <img src={blogImage} alt="blog image" className="blog-image"/>
              </div>
              <div className="blog-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                sed consequuntur error repudiandae numquam deserunt quisquam repellat
                libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate neque quas!
              </div>
              <a href="#">
                <Button label="Continue reading" className="btn read-more-btn" />
              </a>
            </div>
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
