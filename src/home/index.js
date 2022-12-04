import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
      <div className = "portfolio-content-wrap">
        <div className = "fixed-background-picture"></div>
        <div className = "icon-container-main">
          <i class="fab fa-github-alt" onClick = {() => window.open("https://github.com/michaelolson1996", "_blank")}>
            <span className = "tooltips"><p>GitHub</p></span>
          </i>
          <i class="fab fa-linkedin" onClick = {() => window.open("https://www.linkedin.com/in/michael-olson-sre", "_none")}>
            <span className = "tooltips"><p>Linkedin</p></span>
          </i>
            <i onClick = { () => window.open(require('./MichaelOlson_Resume.pdf'), '_blank')} class="fas fa-clipboard-list">
              <span className = "tooltips"><p>Resume</p></span>
            </i>
        </div>
        <div className = "page1">
          <div className = "main-title-container">
            <h1 className = "main-title">Michael Olson</h1>
            <p className = "main-full-stack-title">Site Reliability Engineer</p>
          </div>
          <div className = "michael-image-container">
            <div className = "michael-image"></div>
          </div>
          <div className = "main-buttons-outer-container">
            <div className = "main-buttons-inner-container">
              <div className = "main-buttons-inner-container-column-1 main-columns">
                <Link to = "/projects" className = "links portfolio-link">My Projects</Link>
              </div>
              <div className = "main-buttons-inner-container-column-2 main-columns">
                <Link to = "/about" className = "links about-link" >About Me</Link>
              </div>
              <div className = "main-buttons-inner-container-column-3 main-columns">
                <Link to = "/contact" className = "links contact-link">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home