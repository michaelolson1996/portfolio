import React from 'react';
import projects from './projects.json';
 
const getTab = (evt) => {
    let textarea = document.getElementById("terminal-textarea");
    let rowArr = textarea.value.split("\n");
    let currentCmd = rowArr[rowArr.length - 1];

    if (evt.key === "Tab") {
        evt.preventDefault();
        textarea.value += "\n$ ";
    } else if (evt.key === "Backspace") {
        if (currentCmd.length <= 2)
            evt.preventDefault();
    } else if (evt.key === "Enter") {
        evt.preventDefault();
        if (currentCmd === "$ " || currentCmd === "\n$ ") {
            textarea.value += "\n$ ";
        } else {
            if (/^\$ ls$/.test(currentCmd)) {
                let projectStr = "\n\n"
                projects.forEach(project => {
                    projectStr += `${project.name}\n`
                })
                projectStr += "\n$ "
                textarea.value += projectStr
            } else if (/^\$ exit$/.test(currentCmd)) {
                document.getElementById("home-target").click()
            } else if (/^\$ info [a-zA-Z]+/.test(currentCmd)) {
                let parsedCmd = currentCmd.substr(7).toLowerCase()
                let projectinfo = projects.filter(project => project.name.toLowerCase() === parsedCmd)

                if (projectinfo.length === 0)
                    textarea.value += `\n\nNo projects found with name : ${parsedCmd}\n$ `
                else {
                    textarea.value = `${currentCmd}\n\nName : ${projectinfo[0].name}\n\n` +
                    `URL : ${projectinfo[0].url}\n\n` +
                    `Source : ${projectinfo[0].source}\n\n` +
                    `Description : ${projectinfo[0].description}\n\nStack : `
                    Object.keys(projectinfo[0].stack).forEach((key, i) => {
                        i == Object.keys(projectinfo[0].stack).length - 1 ?
                            textarea.value += `${projectinfo[0].stack[key]}\n\n`
                        :
                            textarea.value += `${projectinfo[0].stack[key]}, `
                    })
                    textarea.value += "$ "
                }
            } else if (/^\$ open [a-zA-Z]+/.test(currentCmd)) {
                let parsedCmd = currentCmd.substr(7).toLowerCase()
                let projectinfo = projects.filter(project => project.name.toLowerCase() === parsedCmd)
                if (projectinfo.length > 0)
                    window.open(projectinfo[0].url, "_blank")
                else
                    textarea.value += `\n\nNo projects found with name : ${parsedCmd}`
                textarea.value += "\n$ "
            } else if (/^\$ clear$/.test(currentCmd)) {
                textarea.value = "$ "
            } else if (/^\$ source [a-zA-Z]+/.test(currentCmd)) {
                let parsedCmd = currentCmd.substr(7).toLowerCase()
                let projectinfo = projects.filter(project => project.name.toLowerCase() === parsedCmd)
                if (projectinfo.length > 0)
                    window.open(projectinfo[0].source, "_blank")
                else
                    textarea.value += `\n\nNo projects found with name : ${parsedCmd}`
                textarea.value += "\n$ "
            } else {
                textarea.value += `\n\nError : Unrecognized Command -> ${currentCmd}\n\n$ `
            }
        }
    }
}

const focusEndOfLine = (textarea) => {
    if (typeof textarea.selectionStart === "number")
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length
    else if (typeof textarea.createTextRange !== "undefined") {
        textarea.focus()
        let range = textarea.createTextRange()
        range.collapse(false)
        range.select()
    }
}

const Terminal = () => {
    return (
        <React.Fragment>
            <div id="main-wrapper">
                <div id="lineNo"></div>
                <textarea
                    spellCheck={false}
                    defaultValue={"$ "} 
                    id="terminal-textarea" 
                    onKeyDown={getTab} 
                    onMouseDown={ () => {
                        focusEndOfLine(document.getElementById("terminal-textarea"));
                        window.setTimeout(function() {
                            focusEndOfLine(document.getElementById("terminal-textarea"));
                        }, 1);
                    } }>
                </textarea>
            </div>
            <a id="home-target" href="/"></a>
        </React.Fragment>
    )
}

export default Terminal