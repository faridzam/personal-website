import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactUsForm = () => {

  const form = useRef();
  const history = useHistory();

  //emailjs submit function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5kh6yro', 'template_evt6asf', form.current, 'user_68LxAhrosqzsy4RHaP7jp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      //redirect
      history.push('/personal-website/contact-us');
      //clear input field
      e.target.reset();
      //alert
      alert('Your projects has been sent. We will reply to your email quickly');
  };

  return (
    <div className="contact-us-form">
        <form onSubmit={sendEmail} className="contact-us-form-main" ref={form}>
            <label className="contact-us-form-text">
                Name :<br/>
                <input
                    style={{ paddingLeft: '1rem', backgroundColor: '#f2f2f2' }}
                    className="input-text"
                    name="name"
                    placeholder="Farid Zam"
                    type="text"
                    required
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
                    required
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
                    required
                />
            </label>
            <div className="flex-break-contact-us"></div>
            <input className="submit-button" type="submit" value="Let's make it!" />
        </form>
    </div>
  );
};

export default ContactUsForm;