import React from 'react'
import './AbilityButton.css'
import ExperienceBar from './ExperienceBar'

class AbilityButton extends React.Component{
  render(){
    return(
      <button className='ability-button'>
        <img src="https://static.thenounproject.com/png/1951910-200.png" alt="" className='ability-button-icon' />
        <div className='ability-button-exp-container'>
          <p className='ability-button-text'>title</p>
          <ExperienceBar />
        </div>
      </button>
    )
  }
}

export default AbilityButton