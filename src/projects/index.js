import React, {Component} from 'react';
import './projects.css';
import Terminal from './Terminal';
import TerminalOptions from './Terminal/TerminalOptions';

const Projects = () => {
    return (
        <div id="projects-container">
            <Terminal />
            <TerminalOptions />
        </div>
    )
}

export default Projects