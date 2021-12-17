import React, { Component } from 'react'
import Logo from '../assets/logo.svg'

export default class About extends Component {
    render() {
        return (
            <div className="about-main">
                <div className="about-logo">
                    <span>
                        <img src={Logo} alt="logo" width="200px"/>
                    </span>
                </div>

                <div className="flex-break"></div>

                <div className="about-text">
                    <div className="about-text-1">
                        <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam sodales, sapien consectetur iaculis condimentum,
                        ipsum lacus malesuada diam, eget fermentum lorem ex in dolor.
                        Sed quis dolor non turpis fermentum tristique in ac est.
                        Suspendisse tempus nisl sit amet tellus tempus,
                        at porttitor neque euismod. Pellentesque enim quam,
                        semper id vulputate nec, tempus at mauris.
                        </h3>
                    </div>

                    <div className="about-text-2">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam sodales, sapien consectetur iaculis condimentum,
                            ipsum lacus malesuada diam, eget fermentum lorem ex in dolor.
                            Sed quis dolor non turpis fermentum tristique in ac est.
                            Suspendisse tempus nisl sit amet tellus tempus,
                            at porttitor neque euismod. Pellentesque enim quam,
                            semper id vulputate nec, tempus at mauris.
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}