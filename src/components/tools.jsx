import React from 'react';

//images
import GithubLogo from '../images/tools/github-logo.svg';
import GitlabLogo from '../images/tools/gitlab.svg';
import CodepenLogo from '../images/tools/codepen-icon.svg';
import Terminal from '../images/tools/terminal.svg';
import WindLogo from '../images/tools/wind.svg';
import LinuxLogo from '../images/tools/linux.svg'

function Tools() {
    return (
        <div>
            <div className="tools" id="tools">
                <h1>TOOLS</h1>
                <div className="tools-wrapper">
                    <div className="dev-tools">
                        <h4>Dev tools</h4>
                        <div className="tools-items">
                            <img src={GithubLogo} alt="github"/>
                            <img src={GitlabLogo} alt="gitlab"/>
                            <img src={CodepenLogo} alt="codepen"/>
                            <img src={Terminal} alt="terminal"/>
                        </div>

                    </div>
                    <div className="OS">
                        <h4>OS</h4>
                        <div className="tools-items">
                            <img src={WindLogo} alt="windows"/>
                            <img src={LinuxLogo} alt="linux"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
            
export default Tools
