import React from 'react';
import './terminal.css';
import projects from './projects.json';

const awaitUserInput = (textarea) => {
    // document.getElementById("lineNo").innerHTML = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
    
}

const getTab = (evt) => {
    // console.log(evt.key)
    if (evt.key === "Tab") {
        document.getElementById("terminal-textarea").value += "\n$ ";
    } else if (evt.key === "Backspace") {
        console.log("back")
    } else if (evt.key === "Enter") {
        let rowArr = document
            .getElementById("terminal-textarea")
            .value.split("\n$ ")
        
        let currentCmd = rowArr[rowArr.length - 1]
        console.log(currentCmd)
        // let commandCheck = /^$ ls/
        // if ()
        if (currentCmd === "$ " || currentCmd === "\n$ ") {
            document.getElementById("terminal-textarea").value += "\n$ ";
        }
    }
}

const Terminal = () => {
    return (
        <div id="main-wrapper">
            <div id="lineNo"></div>
            <textarea autoFocus={true} defaultValue={"$ "} id="terminal-textarea" onKeyDown={getTab} onKeyUp={() => awaitUserInput(document.getElementById("terminal-textarea"))}>
                
            </textarea>
        </div>
    )
}

export default Terminal