import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends React.Component{
  render(){
    return(
    <header className='portifolio-header'>
      <h1 className='header-h1'>Portifólio de João Victor França</h1>
      <nav className='header-nav'>
        <Link className='nav-button' to='/'>Home</Link>
        <Link className='nav-button' to='/portfolio'>Portifólio</Link>
        <Link className='nav-button' to='programming'>Programação</Link>
        <Link className='nav-button' to='/metallurgy'>Metalurgia</Link>
        <Link className='nav-button' to='/about'>Quem sou</Link>
        <Link className='nav-button' to='/contact'>Contato</Link>
      </nav>
    </header>
    )
  }
}



export default Header;