import React from 'react';
import propTypes from 'prop-types';

import AbilityList from './AbilityList';

import './AbilityBlock.css';

class AbilityBlock extends React.Component {
  render() {
    let { group } = this.props;
    let { name, description, abilities } = group;
    return (
      <section className='ability-block'>
        <h1 className='title'>{name}</h1>
        <p>{description}</p>
        <AbilityList abilities={abilities} />
      </section>
    );
  }
}

AbilityBlock.propTypes = {
  group: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    abilities: propTypes.arrayOf(propTypes.object).isRequired,
  }),
};

export default AbilityBlock;
