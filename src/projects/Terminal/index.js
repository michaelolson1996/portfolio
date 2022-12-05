import React, { useState } from 'react';
import projects from './projects.json';
import TerminalOptions from './TerminalOptions';

const focusEndOfLine = (textarea) => {
    if (typeof textarea.selectionStart === "number")
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    else if (typeof textarea.createTextRange !== "undefined") {
        textarea.focus();
        let range = textarea.createTextRange();
        range.collapse(false);
        range.select();
    };
};

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [commands, setCommands] = useState([]);
    const [cmdLocation, setCmdLocation] = useState(-1);

    const getTab = (evt) => {
        let textarea = document.getElementById("terminal-textarea");
        let rowArr = textarea.value.split("\n");
        let currentCmd = rowArr[rowArr.length - 1];
    
        switch (evt.key) {
            case "Tab": {
                evt.preventDefault();
                textarea.value += "\n$ ";
                break;
            }
            case "Enter": {
                evt.preventDefault();
                if (currentCmd === "$ " || currentCmd === "\n$ ") {
                    textarea.value += "\n$ ";
                }
                else {
                    setCommands([...commands, currentCmd]);
                    setCmdLocation(-1);
                };
                if (/^\$ ls$/.test(currentCmd)) {
                    let projectStr = "\n\n";
                    projects.forEach((project, i) => {
                        projectStr += `[${i+1}] ${project.name}\n`
                    });
                    projectStr += "\n$ ";
                    textarea.value += projectStr;
                } else if (/^\$ exit$/.test(currentCmd)) {
                    document.getElementById("home-target").click();
                } else if (/^\$ info [a-zA-Z0-9]+/.test(currentCmd)) {
                    let parsedCmd = currentCmd.substr(7).toLowerCase();
                    let projectInfo = projects.filter(project => project.name.toLowerCase() === parsedCmd);
    
                    if (projectInfo.length === 0) {
                        try {
                            projectInfo = [projects[parseInt(parsedCmd) - 1]];
                        } catch(e) {
                            console.log(e);
                        };
                    };
    
                    if (projectInfo.length === 0 || projectInfo[0] === undefined) {
                        textarea.value += `\n\nNo projects found with name : ${parsedCmd}\n\n$ `;
                    } else {
                        textarea.value += `\n\nName : ${projectInfo[0].name}\n\n` +
                        `URL : ${projectInfo[0].url}\n\n` +
                        `Source : ${projectInfo[0].source}\n\n` +
                        `Description : ${projectInfo[0].description}\n\nStack : `
                        Object.keys(projectInfo[0].stack).forEach((key, i) => {
                            i == Object.keys(projectInfo[0].stack).length - 1 ?
                                textarea.value += `${projectInfo[0].stack[key]}\n\n`
                            :
                                textarea.value += `${projectInfo[0].stack[key]}, `
                        });
                        textarea.value += "$ ";
                    };
                } else if (/^\$ open [a-zA-Z]+/.test(currentCmd)) {
                    let parsedCmd = currentCmd.substr(7).toLowerCase();
                    let projectInfo = projects.filter(project => project.name.toLowerCase() === parsedCmd);
                    if (projectInfo.length > 0) {
                        window.open(projectInfo[0].url, "_blank");
                    }
                    else {
                        textarea.value += `\n\nNo projects found with name : ${parsedCmd}`;
                    };
                    textarea.value += "\n$ ";
                } else if (/^\$ clear$/.test(currentCmd)) {
                    textarea.value = "$ ";
                } else if (/^\$ source [a-zA-Z0-9]+/.test(currentCmd)) {
                    let parsedCmd = currentCmd.substr(9).toLowerCase();
                    let projectInfo = projects.filter(project => project.name.toLowerCase() === parsedCmd);
    
                    if (projectInfo.length === 0) {
                        try {
                            projectInfo = [projects[parseInt(parsedCmd) - 1]];
                        } catch(e) {
                            console.log(e);
                        };
                    };
    
                    if (projectInfo.length === 0 || projectInfo[0] === undefined) {
                        textarea.value += `\n\nNo projects found with name : ${parsedCmd}\n\n$ `;
                    } else {
                        window.open(projectInfo[0].source, "_blank");
                    };
                    textarea.value += "\n$ ";
                } else {
                    textarea.value += `\n\nError : Unrecognized Command -> ${currentCmd}\n\n$ `;
                };
                break;
            }
            case "Backspace": {
                if (currentCmd.length <= 2)
                    evt.preventDefault();
                break;
            }
            case "ArrowUp": {
                evt.preventDefault();
                if (commands.length + cmdLocation > 0) {
                    setCmdLocation(cmdLocation - 1);
                    let lines = textarea.value.split("\n");
                    lines.splice(-1, 1, commands.at(cmdLocation));
                    console.log(lines)
                    textarea.value = lines.join("\n");
                };
                console.log(cmdLocation)
                break;
            }
            case "ArrowDown": {
                evt.preventDefault();
                if (cmdLocation + 1 < 0) {
                    setCmdLocation(cmdLocation + 1);
                    let lines = textarea.value.split("\n");
                    lines.splice(-1, 1, commands.at(cmdLocation));
                    textarea.value = lines.join("\n");
                };
                console.log(cmdLocation)
                break;
            }
            default: {
    
            }
        };
        console.log({ commands })
    };

    return (
        <>
            <div id={"main-wrapper"}>
                <div id={"lineNo"}></div>
                <textarea
                    spellCheck={false}
                    defaultValue={"$ "} 
                    id="terminal-textarea" 
                    onKeyDown={getTab}
                    // onMouseDownCapture={ e => {
                    //     focusEndOfLine(document.getElementById("terminal-textarea"));
                    //     e.preventDefault();
                    // }}
                    onMouseDown={ () => {
                        focusEndOfLine(document.getElementById("terminal-textarea"));
                        window.setTimeout(function() {
                            focusEndOfLine(document.getElementById("terminal-textarea"));
                        }, 1);
                    }}>
                </textarea>
            </div>
            <a id={"home-target"} href={"/"}></a>
            {
                isOpen ?
                    <TerminalOptions setIsOpen={setIsOpen} />
                :
                    <button
                        id={"show-commands-button"}
                        onClick={() => setIsOpen(true)}
                        type={"button"}
                    >
                        Commands
                    </button>
            }
        </>
    );
}

export default Terminal