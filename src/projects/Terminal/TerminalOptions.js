import React from 'react';

const TerminalOptions = () => {
    return (
        <div id="terminal-options-container">
            <div id="terminal-options-title-wrap">
                <h1 id="terminal-options-title">Commands</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">ls </span>- list my projects</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">
                        info <span className="terminal-options-text-var">[project name]</span>
                    </span> - get information about a project</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">
                        open <span className="terminal-options-text-var">[project name]</span>
                    </span> - open project in new tab</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">
                        source <span className="terminal-options-text-var">[project name]</span>
                    </span> - view project source code</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">clear</span> - clear terminal screen</h1>
            </div>
            <div className="terminal-option-text-container">
                <h1 className="terminal-options-text">
                    <span className="terminal-options-text-commands">exit</span> - return to home page</h1>
            </div>
        </div>
    )
}

export default TerminalOptions; 