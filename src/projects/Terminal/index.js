import React from 'react';
import './terminal.css';

const myTerminal = document.getElementById("terminal-textarea");

const awaitUserInput = (evt) => {
    console.log(evt.key)
}

const getTab = (evt) => {
    if (evt.key == "Tab") {
        myTerminal.append("\n$ ")
    } else if (evt.key == "Backspace") {
        console.log("back")
    }
}

const Terminal = () => {
    return (
        <div id="main-wrapper">
            <textarea defaultValue={"$ "} id="terminal-textarea" onKeyDown={getTab} onKeyUp={awaitUserInput}>
                
            </textarea>
        </div>
    )
}

export default Terminal