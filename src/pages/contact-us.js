import React, { Component } from 'react'
import { ContactUsForm } from '../components'
import mailIcon from '../assets/mail-icon.svg'
import whatsappIcon from '../assets/whatsapp-icon.svg'

export default class ContactUs extends Component {

    render() {
        return (
            <div className="contact-us-main">
                <div className="contact-card">
                    <div className="contact-card-text">
                        <h2>you can contact me via email:</h2>
                        <br/>
                        <h3>zamtechcorp@gmail.com</h3>
                    </div>
                    <div className="contact-card-icon">
                        <span>
                            <img src={mailIcon} alt="mail-icon"></img>
                        </span>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-card-text">
                        <h2>you can contact me via whatsapp:</h2>
                        <br/>
                        <h3>+62 899 3011 870</h3>
                    </div>
                    <div className="contact-card-icon">
                        <span>
                            <img src={whatsappIcon} alt="whatsapp-icon"></img>
                        </span>
                    </div>
                </div>

                <div className="flex-break-contact-us"></div>
                
                <ContactUsForm/>
            </div>
        )
    }
}
