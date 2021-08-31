import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class CirclesContainer extends Component {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');
        const canvas = document.querySelector('canvas');
        this.colors = [`rgb(231, 135, 62)`, `rgb(31, 125, 247)`, `rgb(219, 56, 50)`, `rgb(73, 161, 101)`]
        let innerWidth = window.innerWidth
        let innerHeight = window.innerHeight
        const mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        }

        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        })

        window.addEventListener('resize', event => {
            canvas.width = innerWidth
            canvas.height = innerHeight
        })

        const randColorGen = colors => {
            return colors[Math.floor(Math.random() * colors.length)]
        }

        const randomIntFromRange = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight);
        backgroundGradient.addColorStop(0.9, 'rgb(26, 25, 25)');
        backgroundGradient.addColorStop(1, 'rgb(26, 25, 25)');

        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.01;
            this.distanceFromCenter = randomIntFromRange(300, 300)
            this.lastMouse = {
                x: x,
                y: y
            }


            this.draw = lastPoint => {
                c.beginPath()
                c.strokeStyle = this.color
                c.lineWidth = this.radius
                c.moveTo(lastPoint.x, lastPoint.y)
                c.lineTo(this.x, this.y)
                c.stroke()
                c.closePath()
            }


            this.update = () => {
                
                // Getting the last point to draw the line in the draw function
                const lastPoint = { x: this.x, y: this.y }
                
                // Move points over time
                this.radians += this.velocity

                // Drag Effect
                // this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.18
                // this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.18

                // Circular Motion
                this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
                this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
                this.draw(lastPoint)
                }
            }


            // Particles Generator
            let particles;
            const init = () => {
                particles = [];
                for (let i = 0; i < 100; i++) {
                    const radius = (Math.random() * 200) + 1
                    particles.push(new Particle(innerWidth / 2, innerHeight / 2, radius, randColorGen(this.colors)))
                }
            }

            const animate = () => {
                requestAnimationFrame(animate)
                c.fillStyle = backgroundGradient
                c.fillRect(0, 0, innerWidth, innerHeight)
                particles.forEach(particle => {
                particle.update()
            })
        }
        init()
        animate()
    }

    render() {
        return (
            // <div>
            // </div>
            <div className = "projects-container">
            <Link to = '/'><div className = "michael-pic-projects michael-project-pictures"></div></Link>
            <div className = "projects-wrap">
              <div className = "material-container">
                <i className = "fas fa-angle-double-left arrows" onClick = {this.props.toggleLeft}></i>

                <div className = "flash-stack-container middle-container" onClick = { () => window.open("http://flashstacks.herokuapp.com", "_blank")}>
                  <h1 className = "project-title">Flash Stacks</h1>
                  <p className = "project-description">Full stack application for managing your flash cards</p>
                  <ul className = "languages-container">
                    <li>Languages: JavaScript, HTML5, CSS3</li>
                    <li>Framework: Express</li>
                    <li>Libraries: React.js, Redux, Mongoose</li>
                    <li>Environment: Node.js</li>
                    <li>Database: MongoDB</li>
                    <li>Additional: FontAwesome, JQuery, AOS, Heroku, jwt, bcrypt, ajax</li>
                  </ul>
                </div>
                <i className = "fas fa-angle-double-right arrows" onClick = {this.props.toggleRight}></i>
              </div>
            </div>
            <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight}/>
        </div>
        );
}
}

export default CirclesContainer