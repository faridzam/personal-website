import React from 'react'
import designIcon from '../assets/design-icon.svg'
import developmentIcon from '../assets/development-icon.svg'
import onProcessIcon from '../assets/on-process-icon.svg'

class MainContent extends React.Component{
    render(){
        return(
            <div className="main-content">
                <div className="main-content-skills">
                    <div className="main-content-title">
                        <h1>Skills.</h1>
                    </div>
                    <div className="main-content-table">
                        <div className="skills-section">
                            <span>
                                <img src={designIcon} alt="designIcon" />
                            </span>
                            <table className="skills-table">
                                <thead className="skills-thead">
                                    <tr>
                                        <td>
                                            Design
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="skills-tbody">
                                    <tr><td>Brand Design</td></tr>
                                    <tr><td>Print Design</td></tr>
                                    <tr><td>Product Design</td></tr>
                                    <tr><td>UI/UX Design</td></tr>
                                    <tr><td>3D Model Design</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="skills-section">
                            <span>
                                <img src={developmentIcon} alt="designIcon" />
                            </span>
                            <table className="skills-table">
                                <thead className="skills-thead">
                                    <tr>
                                        <td>
                                            Development
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="skills-tbody">
                                    <tr><td>Node JS</td></tr>
                                    <tr><td>React JS</td></tr>
                                    <tr><td>React Native</td></tr>
                                    <tr><td>Express JS</td></tr>
                                    <tr><td>Laravel</td></tr>
                                    <tr><td>PostgreSQL</td></tr>
                                    <tr><td>MongoDB</td></tr>
                                    <tr><td>MySQL</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="skills-section">
                            <span>
                                <img src={onProcessIcon} alt="designIcon" />
                            </span>
                            <table className="skills-table">
                                <thead className="skills-thead">
                                    <tr>
                                        <td>
                                            On Process
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="skills-tbody">
                                    <tr><td>Firebase</td></tr>
                                    <tr><td>Swift</td></tr>
                                    <tr><td>2D Animation</td></tr>
                                    <tr><td>3D Animation</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;