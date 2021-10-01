import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { headerSwitches } from '../../textSwitches/';
// import ptbrTexts from './Header-text-PT-BR.json';
// import engTexts from './Header-text-ENG.json';

import HeaderLanguages from './HeaderLanguages/HeaderLanguages';

import './Header.css';

class Header extends React.Component {
  render() {
    const { languageStored } = this.props;
    let text = headerSwitches(languageStored);
    return (
      <header className='portifolio-header'>
        <HeaderLanguages />
        <h1 className='header-h1'>{text.title}</h1>
        <nav className='header-nav'>
          <Link className='nav-button' to='/'>
            {text.button1}
          </Link>
          <Link className='nav-button' to='/portfolio'>
            {text.button2}
          </Link>
          <Link className='nav-button' to='programming'>
            {text.button3}
          </Link>
          <Link className='nav-button' to='/metallurgy'>
            {text.button4}
          </Link>
          <Link className='nav-button' to='/about'>
            {text.button5}
          </Link>
          <Link className='nav-button' to='/contact'>
            {text.button6}
          </Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

Header.propTypes = {
  languageStored: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
