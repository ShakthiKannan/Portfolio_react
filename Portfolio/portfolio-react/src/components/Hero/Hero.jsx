import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.svg'
export const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" className='imgs-h'/>
        <h1><span>I'm Devasri K,</span> FullStack Developer</h1>
        <p>I am a FullStack developer from Tamil Nadu,with 2 year of experience in multiple project </p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
export default Hero
