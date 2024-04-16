import React from 'react'
import Frontend from './Frontend'
import '../../components/Skills/skills.css';
import Css from '../../img/css3.png';
import Html from '../../img/html5.png';
import Js from '../../img/js.png';
import Reactj from '../../img/reactjs.png';
import Git from '../../img/git.png';

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical level</span>

        <div className="skills_container container grid">
            
        </div>
          
        <div className='skill'>
        <div className="skill_container container grid">
            <img src={Html} alt="" />
            
            
            
            <img src={Css} alt=""  />
            
            <div className="skill_container container grid">
            <img src={Js} alt=""  />
            </div>
            <div className="skill_container container grid">
            <img src={Git} alt=""  />
            </div>
            <div className="skill_container container grid">
            <img src={Reactj} alt=""  />
            </div>
            </div>
        </div>
          


        </section>

  )
}

export default Skills