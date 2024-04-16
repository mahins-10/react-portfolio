import React from 'react';
import '../../components/About/about.css';
import AboutImg from '../../img/me1.jpg';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt=""  className='about_img'/>

            <div className="about_data">
                <Info />
                <p className='about_description'>Frontend Developer, I create web pages with UX/UI user Interface, 
                I have years of experience and many clients are happy with the projects carried out</p>
            </div>
        </div>

    </section>   
  )
}

export default About