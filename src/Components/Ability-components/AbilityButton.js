import React from 'react';
import propTypes from 'prop-types';

import './AbilityButton.css';
import ExperienceBar from './ExperienceBar';

class AbilityButton extends React.Component {
  render() {
    let { ability, isSelected, action } = this.props;
    let { name, icon, linkName } = ability;
    return (
      <button
        className={`ability-button ${
          linkName === isSelected ? 'selected' : ''
        }`}
        onClick={() => {
          action(linkName);
        }}
        name={linkName}
      >
        <img
          src={icon}
          alt=''
          className='ability-button-icon'
          name={linkName}
        />
        <div className='ability-button-exp-container' name={linkName}>
          <p className='ability-button-text' name={linkName}>
            {name}
          </p>
          <ExperienceBar ability={ability} name={linkName} />
        </div>
      </button>
    );
  }
}

AbilityButton.propTypes = {
  ability: propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    linkName: propTypes.string,
  }).isRequired,
  isSelected: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
};

export default AbilityButton;
