import React from 'react'
import './PortfolioBlock.css'

import ProjectList from './ProjectList'


class PortifolioBlock extends React.Component{
  render(){
    let {group} = this.props
    console.log(group)
    let {name, description, projects} = group
    return(
      <section className = 'portfolio-block'>
        <h1 className='title'>{name}</h1>
        <p>{description}</p>
        <ProjectList projects= {projects} />
      </section>
    )
  }
}


export default PortifolioBlock