import React from 'react'
import CTA from './CTA-button'
import logoTrans from '../assets/logo_trans.svg'

class Banner extends React.Component{
    render(){
        return(
            <div className="banner-main">
                <img className="transparent-logo" src={logoTrans} alt="logo" />
                <div className="banner-text1">
                    <h1 className="banner-h1">DE</h1>
                    <h2 className="banner-h2">veloper<br/>signer</h2>
                </div>
                <div className="cta-button-banner">
                    <CTA/>
                </div>
                <div className="banner-text2">
                    <ul className="banner-text2-list">
                        <li>Brand Design</li>
                        <li>Product Design</li>
                        <li>Web Development</li>
                        <li>Display Advertising</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Banner;