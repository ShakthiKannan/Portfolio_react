import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
function About() {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} className="imgs-a" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating eith prestigious organizations,cotributing to their success and growth. </p>
                    <p>My passion for Frontend development is not only but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>JAVA</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achiev">
            <div className="about-achivement">
                <h1>2+</h1>
                <p>YEARS OF EXPRIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>7+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>10+</h1>
                <p>Happy Clients</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About