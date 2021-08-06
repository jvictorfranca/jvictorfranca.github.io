import React from 'react'
import AbilityList from './AbilityList'
import './AbilityBlock.css'



class AbilityBlock extends React.Component{
  render(){
    let {group} = this.props
    let {name, description, abilities} = group
    return(
      <section className = 'ability-block'>
        <h1 className='title'>{name}</h1>
        <p>{description}</p>
        <AbilityList abilities = {abilities} />
      </section>
    )
  }
}


export default AbilityBlock