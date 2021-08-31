import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'
import AOS from 'aos'
AOS.init()

const About = () => {

    return (
        <div className = "about-wrap">
                <div className = "page-1-bg">
                    <Link to = '/'><div className = "michael-pic-projects about-michael-home-link"></div></Link>
                    <i className = "fas fa-lightbulb bulb"></i>
                    <div className = "thomas-edison-quote-main-container" id = "navbar">
                        <div className = "thomas-edison-quote-inner-container">
                            <q>I've not failed, I've just <span className = "found-blue">found</span> 1,000 ways that don't work.</q>
                            <p className = "thomas-jefferson">Thomas A. Jefferson</p>
                        </div>
                    </div>
                </div>

                
            <div className = "page-2-about" >
                <div className = "page-2-about-skills-container" id = "myAnchor">
                    <div className = "page-2-skills-box1 skills-boxes">
                        <div className = "box1-shape-container shape-containers" data-aos-anchor = "#myAnchor" data-aos = "fade-down" data-aos-offset="350">
                            <span className = "triangle1"></span>
                            <span className = "triangle2"></span>
                            <span className = "triangle3"></span>
                        </div>
                        <div className = "box1-text-container about-text-containers">
                            <h3 className = "box1-title box-titles">Speed</h3>
                            <p className = "box-1-text text-boxes">Providing a fast and reliable website is a necessity in today's day and age.</p>
                        </div>
                    </div>
                    <div className = "page-2-skills-box2 skills-boxes">
                        <div className = "box2-shape-container shape-containers" data-aos-anchor = "#myAnchor" data-aos = "fade-down" data-aos-offset="350">
                            <span className = "square1 squares"></span>
                            <span className = "square2 squares"></span>
                            <span className = "square3 squares"></span>
                        </div>
                        <div className = "box2-text-container about-text-containers">
                            <h3 className = "box2-title box-titles">Design</h3>
                            <p className = "box-2-text text-boxes">I view all of my work as an extension of who I am, I want to look clean and professional.</p>
                        </div>

                    </div>
                    <div className = "page-2-skills-box3 skills-boxes">
                        <div className = "box3-shape-container shape-containers" data-aos-anchor = "#myAnchor" data-aos = "fade-down" data-aos-offset="350">
                            <div className = "box3-inner-box1 inner-boxes-functionality">
                                <div className = "inner-box1-row1 row-1-circle functionality-rows">
                                    <div className = "box-columns-1-circle circles"></div>
                                </div>
                                <div className = "inner-box1-row2 row-2-circles functionality-rows">
                                    <div className = "box-columns-2-circles circles"></div>
                                    <div className = "box-columns-2-circles circles"></div>
                                </div>
                                <div className = "inner-box1-row3 row-1-circle functionality-rows">
                                    <div className = "box-columns-1-circle circles"></div>
                                </div>
                            </div>
                            <div className = "box3-inner-box2 inner-boxes-functionality">
                                <div className = "inner-box2-row1 row-1-circle functionality-rows">
                                    <div className = "box-columns-1-circle circles"></div>
                                </div>
                                <div className = "inner-box2-row2 row-2-circles functionality-rows">
                                    <div className = "box-columns-2-circles circles"></div>
                                    <div className = "box-columns-2-circles circles"></div>
                                </div>
                                <div className = "inner-box2-row3 row-1-circle functionality-rows">
                                    <div className = "box-columns-1-circle circles"></div>
                                </div>
                            </div>
                        </div>
                        <div className = "box3-text-container about-text-containers">
                            <h3 className = "box3-title box-titles">Functionality</h3>
                            <p className = "box-3-text text-boxes">Building a website that does not function properly is the equivalent to building a car without an engine.</p>
                        </div>

                    </div>
                    <div className = "page-2-skills-box4 skills-boxes">
                        <div className = "box4-shape-container shape-containers" data-aos-anchor = "#myAnchor" data-aos = "fade-down" data-aos-offset="350">
                            <div className = "hexagon">
                            <div className = "inner-square-2">
                                <div className = "inner-inner-square-2"></div>
                            </div>

                                <div className = "inner-square">
                                    <div className = "inner-inner-square"></div>
                                </div>
                            </div>
                        </div>
                        <div className = "box4-text-container about-text-containers">
                            <h3 className = "box4-title box-titles" >Creativity</h3>
                            <p className = "box-3-text text-boxes">Not only do I think outside the box, I recreate the box in order to influence others.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className = "page-3-wrap">
                <div className = "empty-space-1"></div>
                <div className = "page-3-about-me">
                    <h4 className = "about-me-title">About Me</h4>
                    <div className = "about-page-3-line"></div>
                    <p>I have been a passionate developer for the past year, and am very excited to have dipped my toes into this field. The endless rabbit hole of learning along with the balance of left and right brain thinking are what stole my heart. After several months of studying on my own, I decided it was time to step up my game. I started searching for schools and programs that would fit my needs, and stumbled upon V School. I was not disappointed with their curriculum, and after only several weeks I was building full stack applications using Node.js, React, Redux, MongoDB... </p>

                    <p>A little about my personal life, I am 22 years old and am originally from Long Beach, California. In my free time you will find me playing an intense game of chess, gasping for breath underneath my MMA trainer, or lifting weights at the gym. I also enjoy starting fun coding projects that really get me eager to learn. I have had the opportunity to travel a lot, mostly within the states, and I also spent a year abroad immersing myself in Thai culture.</p>

                    <p>The quote by Thomas Edison at the top of the page has resonated with me since I started coding, and should be acknowledged by programmers everywhere. It demonstrates a positive way to look at the constant struggles we face on a daily basis, and reminds me that success does not come easy. Persistance has led me to where I am today. Feel free to reach out with any questions you have, thank you for your time!</p>
                </div>
                <div className = "about-bottom-icons-container">
                    <Link to = "/"><i className = "fas fa-home about-icons"></i></Link>
                    <Link to = "/projects"><i className = "fas fa-project-diagram about-icons"></i></Link>
                    <Link to = "/contact"><i className = "fas fa-mobile about-icons"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default About