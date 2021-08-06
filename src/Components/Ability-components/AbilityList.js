import React from 'react'
import './AbilityList.css'

import AbilityButton from './AbilityButton'

class AbilityList extends React.Component {
  constructor(props){
    super(props)
    let {abilities} = this.props
    this.state = {
      selected: abilities[0].linkName
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(name){
    this.setState({
      selected:name
    })
  }
  render () {
    let {abilities} = this.props
    let {selected} = this.state
    let ability = abilities.find(ability => ability.linkName === selected)
    return (
      <section className='ability-list'>
        <div className='ability-buttons-container'>
          {abilities.map(ability=><AbilityButton ability={ability} action={this.handleClick } key= {ability.name} isSelected={selected}/> )}
        </div>
        <div className='show-selected-ability'>
          <div className='title-container'>
          <h1 className='ability-title'>{ability.name}</h1>
          <img src={ability.icon} alt="title-icon" className='title-image'/>
          </div>
          
          <p className='ability-description'>{ability.description}</p>
        </div>
      </section>
    )
  }
}

export default AbilityList