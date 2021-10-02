import React from 'react';
import copy from 'clipboard-copy';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactItemSwitches } from '../../textSwitches';

import './contactItem.css';

function ContactItem({ item, copied, index, setFather, languageStored }) {
  const text = contactItemSwitches(languageStored);

  return (
    <section className='contact-item-container'>
      <img src={item.image} alt={item.title} />
      <h2 className='teste'>{`${item.title}:`}</h2>

      {item.visit ? (
        <a target='_blank' href={item.link} rel='noreferrer'>
          {item.link}
        </a>
      ) : (
        <p>{item.link}</p>
      )}
      {copied !== index ? (
        <button
          type='button'
          onClick={() => {
            copy(item.link);
            setFather(index);
          }}
        >
          {text['text-button']}
        </button>
      ) : (
        <p className='copied-text'>{text['text-after-button']}</p>
      )}
    </section>
  );
}

ContactItem.propTypes = {
  item: propTypes.shape({
    image: propTypes.string,
    visit: propTypes.bool,
    link: propTypes.string,
    title: propTypes.string,
  }).isRequired,
  copied: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  setFather: propTypes.func.isRequired,
  languageStored: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

export default connect(mapStateToProps)(ContactItem);
