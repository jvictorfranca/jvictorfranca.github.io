import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import Test from '../../Components/Test';
// import { Link } from 'react-router-dom';
import { homePageSwitches } from '../../textSwitches';

import './Home.css';
import fotoMinha from './HomeImages/JoaoELo.png';
import keyboard from './HomeImages/keyboard-icon.png';

class Home extends React.Component {
  render() {
    const { languageStored } = this.props;
    const text = homePageSwitches(languageStored);
    return (
      <main className='home'>
        <section className='text-block'>
          <div className='text-container'>
            <h1 className='home title'>{text.title1}</h1>
            <p>{text['text1-1']}</p>
            <p>{text['text1-2']}</p>
            <p>{text['text1-3']}</p>
          </div>
          <img src={keyboard} alt='Icone de teclado' className='keyboard' />
        </section>

        <section className='text-block'>
          <img
            src={fotoMinha}
            alt='Minha foto com Lorena'
            className='minha-foto'
          />
          <div className='text-container'>
            <h1 className='home title'>{text.title2}</h1>
            <p>{text['text2-1']}</p>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

Home.propTypes = {
  languageStored: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);
