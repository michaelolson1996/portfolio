import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class StarsContainer extends Component {

  componentDidMount() {
    this.updateCanvas();
  };

  updateCanvas = () => {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    canvas.width = innerWidth;
    canvas.height = innerHeight;


    window.addEventListener('resize', event => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });

    const randomColor = (colors) => {
      return colors[Math.floor(Math.random() * colors.length) + 1];
    }

    const randomIntFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // const distance = (x1, y1, x2, y2) => {
    //   const xDist = x2 - x1;
    //   const yDist = y2 - y1;
    //   return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    // };

    // Object Constructor
    function Star(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.gravity = 1;
      this.friction = 0.8;
      this.velocity = {
        x: (Math.random() - 0.5) * 18,
        y: 3
      };
    };

    Star.prototype.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fill();
      c.closePath();
    };

    Star.prototype.update = function() {
      this.draw();

      // When star hits bottom of screen
      if (this.y + this.radius + this.velocity.y > innerHeight) {
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
      } else {
        this.velocity.y += this.gravity;
      };

      if (this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x
        this.shatter()
      }

      this.x += this.velocity.x
      this.y += this.velocity.y;
    };


    Star.prototype.shatter = function() {
      this.radius -= 3;
      for (let i = 0; i < 18; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 2));
      };
    };

    // Mini stars created when star hits bottom/side of screen
    function MiniStar(x, y, radius) {
      Star.call(this, x, y, radius);
      this.gravity = 0.1;
      this.friction = 0.8;
      this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
      };
      // TTL = Time to live
      this.ttl = 100;
      this.opacity = 1;
      this.color = randomColor(['red',`rgb(231, 135, 62, ${this.opacity})`, `rgb(31, 125, 247, ${this.opacity})`, `rgb(219, 56, 50, ${this.opacity})`, `rgb(73, 161, 101, ${this.opacity})`]);
    };

    MiniStar.prototype.draw = function() {
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fill();
      c.closePath();
    };

    MiniStar.prototype.update = function() {
      this.draw();

      // When star hits bottom of screen
      if (this.y + this.radius + this.velocity.y > innerHeight) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      };
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl -= 1;
      // this.opacity -= 1 / this.ttl - 0.1;
    };


    const backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight);
    backgroundGradient.addColorStop(0.9, 'rgb(26, 25, 25)');
    backgroundGradient.addColorStop(1, 'rgb(26, 25, 25)');
    let stars;
    let miniStars;
    let ticker = 0;
    let randomSpawnRate = 35
    // const groundHeight = 80

    const init = () => {
      stars = [];
      miniStars = [];
    };

    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = backgroundGradient
      c.fillRect(0, 0, innerWidth, innerHeight);

      stars.forEach((star, index) => {
        star.update();
        if (star.radius <= 0) {
          stars.splice(index, 1);
        };
      });

      // const groundHeight = 30px;

      // c.fillStyle = 'rgb(26, 25, 25)'

      // c.fillRect(0, innerHeight - groundHeight, innerWidth, groundHeight)

      miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if (miniStar.ttl === 0) {
          miniStars.splice(index, 1);
        };
      });
      ticker++;

      if (ticker % randomSpawnRate <= 0) {
        const radius = 12
        const x = Math.max(radius, Math.random() * innerWidth - radius);
        stars.push(new Star(x, -100, radius, 'rgb(255, 25, 25, 0)'));
        randomSpawnRate = randomIntFromRange(5, 20);
      };

    };
    init();
    animate();
  };


  render() {
    return (
        <div className = "projects-container">
            <Link to = '/'><div className = "michael-pic-projects michael-project-pictures"></div></Link>
            <div className = "projects-wrap">
              <div className = "material-container">
                <i className = "fas fa-angle-double-left arrows" onClick = {this.props.toggleLeft}></i>
                <div className = "flash-stack-container middle-container" onClick = { () => window.open("http://fatstacks.surge.sh", "_blank")}>
                  <h1 className = "project-title">Fat Stacks</h1>
                  <p className = "project-description">Front end application displaying stats of UFC fighters</p>
                  <ul className = "languages-container">
                    <li>Languages: JavaScript, HTML5, CSS3</li>
                    <li>Framework: Express</li>
                    <li>Libraries: React.js, Redux</li>
                    <li>Environment: Node.js</li>
                    <li>Database: ufc-fighters-api</li>
                    <li>Additional: FontAwesome, JQuery, Surge, Git, GitHub, ajax</li>
                  </ul>
                </div>
                <i className = "fas fa-angle-double-right arrows" onClick = {this.props.toggleRight}></i>
              </div>
            </div>
            <canvas id = 'canvas'></canvas>
        </div>
    )
  };
};

export default StarsContainer;