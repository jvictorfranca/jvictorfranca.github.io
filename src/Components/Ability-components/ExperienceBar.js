import React from 'react';
import propTypes from 'prop-types';
import './ExperienceBar.css';

class ExperienceBar extends React.Component {
  render() {
    let { ability } = this.props;
    let width = ability.knowlege;
    return (
      <div className='experience-bar'>
        <div className='experience-container'>
          <div className='experience-background'>
            <div className='experience' style={{ width: width }}></div>
          </div>
        </div>
        <div className='experience-text'>{width}</div>
      </div>
    );
  }
}

ExperienceBar.propTypes = {
  ability: propTypes.shape({
    knowlege: propTypes.string,
  }),
};

export default ExperienceBar;
