import React from 'react';
import copy from 'clipboard-copy';
import propTypes from 'prop-types';

import './contactItem.css';

function ContactItem({ item, copied, index, setFather }) {
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
          Copiar
        </button>
      ) : (
        <p className='copied-text'>Copiado para a clip-board</p>
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
};

export default ContactItem;
