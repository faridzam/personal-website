import React from 'react'
import designIcon from '../assets/design-icon.svg'
import developmentIcon from '../assets/development-icon.svg'
import onProcessIcon from '../assets/on-process-icon.svg'
import PortfolioKiri from '../assets/portfolio-kiri.png'
import PortfolioKiriKopi from '../assets/portfolio-kiri-kopi.png'
import PortfolioSaloka from '../assets/portfolio-saloka.png'

class MainContent extends React.Component{

    render(){
        const {changeProject, choosenProject} = this.props;
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

                        <div className="flex-break-skills"></div>

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

                        <div className="flex-break-skills"></div>

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

                <div className="main-content-portfolio">
                    <div className="main-content-title">
                        <h1>Portfolios.</h1>
                    </div>

                    <div className="flex-break-portfolio"></div>

                    <div className="container-portfolio">
                        <div className="portfolio-projects-list">
                            <table className="projects-list-table">
                                <tbody className="projects-list-tbody">
                                    <tr className={this.props.choosenProject === PortfolioKiri && "active-project"} onClick={() => changeProject(PortfolioKiri)}>
                                        <td>
                                            <h1>Kiri</h1>
                                            <p>brand identity design</p>
                                        </td>
                                    </tr>
                                    <tr className={this.props.choosenProject === PortfolioKiriKopi && "active-project"} onClick={() => changeProject(PortfolioKiriKopi)}>
                                        <td>
                                            <h1>Kiri_Kopi</h1>
                                            <p>Web App Development</p>
                                        </td>
                                    </tr>
                                    <tr className={this.props.choosenProject === PortfolioSaloka && "active-project"} onClick={() => changeProject(PortfolioSaloka)}>
                                        <td>
                                            <h1>Saloka</h1>
                                            <p>Web App Development</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex-break-projects"></div>
                        
                        <div className="project-display">
                            <img src={this.props.choosenProject} alt={this.props.choosenProject}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;