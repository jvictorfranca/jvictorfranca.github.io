import React from 'react'

import ProjectList from './ProjectList'

import data from '../../Data/projects'

class PortifolioBlock extends React.Component{
  render(){
    let {group} = this.props
    console.log(group)
    let {name, description, projects} = group
    return(
      <section>
        <h1 className='title'>{name}</h1>
        <p>{description}</p>
        <ProjectList projects= {projects} />
      </section>
    )
  }
}


export default PortifolioBlock