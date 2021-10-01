import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { changeLanguage } from '../../../redux/actions';

import languageObj from './languagesObj';

import './HeaderLanguages.css';

class HeaderLanguages extends React.Component {
  render() {
    let { languageStored, changeLanguage } = this.props;
    return (
      <section className='header-language-container'>
        {languageObj.map((language) => (
          <button
            key={language.name}
            className='header-language-button'
            onClick={() => {
              changeLanguage(language.language);
            }}
          >
            <img
              src={language.icon}
              alt={language.name}
              className={
                language.language === languageStored
                  ? 'header-language-image selected'
                  : 'header-language-image'
              }
            />
          </button>
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (payload) => dispatch(changeLanguage(payload)),
});

HeaderLanguages.propTypes = {
  languageStored: propTypes.string.isRequired,
  changeLanguage: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanguages);
