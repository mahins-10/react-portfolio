import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfg9wlf', 'service_mfg9wlf', form.current, 'K6ah1N7dftbOHinop')
      
    e.target.reset()

  };
  return (
    <section className="contact section" id='contact'>
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>
        <div className="contact_container grid">
            <div className="contact_content">
                <h3 className="contact_title"> Talk to me</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className='bx bx contact_card-icon'></i>

                        <h3 className='contact_card-title'>Email</h3>
                        <span className='contact_card-data'>user@gmail.com</span>

                        <a href="" className='contact_button'>Write me 
                        <i className='bx bx-right-arrow-alt contact_button-icon'>
                            </i></a>
                    </div>

                    <div className="contact_card">
                        <i className='bx bx contact_card-icon'></i>

                        <h3 className='contact_card-title'>Whats App </h3>
                        <span className='contact_card-data'>01816606760</span>

                        <a href="" className='contact_button'>Write me 
                        <i className='bx bx-right-arrow-alt contact_button-icon'>
                            </i></a>
                    </div>

                    <div className="contact_card">
                        <i className='bx bx contact_card-icon'></i>

                        <h3 className='contact_card-title'>Instagram</h3>
                        <span className='contact_card-data'>mahins_39</span>

                        <a href="" className='contact_button'> Write me 
                        <i className='bx bx-right-arrow-alt contact_button-icon'>
                            </i></a>
                    </div>
                </div>
            </div>
            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className='contact_form'>
                    <div className="contact_form-div ">
                        <label htmlFor="" className="contact_form-tag">Name</label>
                        <input type="text"  name='name' className='contact_form-input'
                        placeholder='Insert your name'/>
                    </div>

                    <div className="contact_form-div ">
                        <label htmlFor="" className="contact_form-tag">Mail</label>
                        <input type="email"  name='email' className='contact_form-input'
                        placeholder='Insert your email'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label htmlFor="" className="contact_form-tag">Project</label>
                        <textarea name="project" id="" cols="30" rows="10"
                        className='contact_form-input' placeholder= 'Write your project'></textarea>
                    </div>

                    <button className='button button-flex'>
                        Send Message
                    </button>


                </form>
            </div>


        </div>



        </section>
  )
}

export default Contact