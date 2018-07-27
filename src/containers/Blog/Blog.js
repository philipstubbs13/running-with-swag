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
          <h1 className="page-title">Blog</h1>
          <div className="blog-header-image">
          </div>
          <div className="entries">
            <Card title="Blog title" className="blog-post">
              <div className="blog-image">
                <img src={blogImage} alt="blog image" />
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
            </Card>

            <Card title="Blog title2" className="blog-post">
              <div className="blog-image">
                <img src={blogImage} alt="blog image" />
              </div>
              <div className="blog-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </div>
              <a href="#">
                <Button label="Continue reading" className="btn read-more-btn" />
              </a>
            </Card>

            <Card title="Blog title3" className="blog-post">
              <div className="blog-image">
                <img src={blogImage} alt="blog image" />
              </div>
              <div className="blog-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </div>
              <a href="#">
                <Button label="Continue reading" className="btn read-more-btn" />
              </a>
            </Card>
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
