import React, { Component } from 'react'
import mailIcon from '../assets/mail-icon.svg'
import whatsappIcon from '../assets/whatsapp-icon.svg'

export default class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          projectDescription: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

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
                
                <div className="contact-us-form">
                    <form onSubmit={this.handleSubmit} className="contact-us-form-main">
                        <label className="contact-us-form-text">
                            Name :<br/>
                            <input
                                style={{ paddingLeft: '1rem', backgroundColor: '#f2f2f2' }}
                                className="input-text"
                                name="name"
                                placeholder="Farid Zam"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label className="contact-us-form-text">
                            Email :<br/>
                            <input
                                style={{ paddingLeft: '1rem', backgroundColor: '#f2f2f2' }}
                                className="input-text"
                                name="email"
                                placeholder="faridzam@mail.com"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </label>

                        <div className="flex-break-contact-us"></div>

                        <label className="contact-us-form-textarea">
                            What kind of projects in your mind?<br/>
                            <textarea
                                style={{ paddingLeft: '1rem', paddingTop: '1rem', backgroundColor: '#f2f2f2' }}
                                className="input-textarea"
                                name="projectDescription"
                                placeholder="I want a web application with..."
                                value={this.state.projectDescription}
                                onChange={this.handleInputChange}
                            />
                        </label>

                        <div className="flex-break-contact-us"></div>

                        <input className="submit-button" type="submit" value="Let's make it!" />
                    </form>
                </div>

            </div>
        )
    }
}
