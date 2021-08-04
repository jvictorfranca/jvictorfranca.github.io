import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubImage from './Images/Github.png'
import linkedinImage from './Images/Linkedin.png'


class Footer extends React.Component{
  render(){
    return(
    <footer className='portfolio-footer'>
      <nav className='footer-nav'>
      <a href="https://github.com/jvictorfranca" target='_blank' rel="noreferrer" >
        <img className='footer-icon' src={githubImage} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-cristino-fran%C3%A7a-0a516b1a4/" target='_blank' rel="noreferrer" >
        <img className='footer-icon' src={linkedinImage} alt="Linkedin" />
      </a>
      </nav>
    </footer>
    )
  }
}



export default Footer;