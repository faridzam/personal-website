import React, { Component } from 'react'
import Logo from '../assets/logo.svg'
import CTA from '../components/CTA-button'


export default class About extends Component {
    render() {
        return (
            <div className="about-main">
                <div className="about-logo">
                    <span>
                        <img src={Logo} alt="logo" width="200px"/>
                    </span>
                </div>

                <div className="flex-break-about"></div>

                <div className="about-text">
                    <div className="about-text-1">
                        <h2>
                        I'm Zam a professional graphic designer and software developer.
                        </h2>
                    </div>

                    <div className="about-text-2">
                        <h5>
                        I have a solid background in graphic design and software development. 
                        I can work independently and respect a deadline indefinitely. 
                        I feel comfortable working with a good team of designers or developer. 
                        I am passionate about the creative industry and I take pride in my dependable experience in the field.
                        </h5>
                    </div>
                </div>

                <div className="flex-break-about"></div>
                <div className="cta-button-about">
                    <CTA/>
                </div>
            </div>
        );
    }
}