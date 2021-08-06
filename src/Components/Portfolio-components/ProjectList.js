import React from 'react'
import PortfolioButton from './PortfolioButton'
import PortifolioTittle from './PortfolioTitle'
import './ProjectList.css'

import data from '../../Data/projects'



class ProjectList extends React.Component{
  constructor(props){
    super(props)
    let {projects} = this.props
    let projectSelected = projects[0].linkName 


    this.state = {
      selected: projectSelected
    }
    this.handleClick=this.handleClick.bind(this)
  }
  
  handleClick(event){
    let {name} = event.target

    console.log(event.target.classList)
    this.setState({
      selected: name
    })
  }
  render(){
    let {projects} = this.props
    let {selected} = this.state
    let project = projects.find(project => project.linkName === selected)
    let {icon, url, description} = project
    return (
    <section className='projectlist'>
      <div className='projectlist-buttons-container'>
        {projects.map(project=> <PortfolioButton project={project} action={this.handleClick} isSelected={selected} key={project.name} />)}
      </div>
      <div className='selected-project-show'>
        <PortifolioTittle project={project}/>
        <p className='project-text'>{description}
        <a href={url} target='_blank' rel="noreferrer" >
          <img src={icon} alt="link" className='img-link'/>
          Teste aqui
        </a>
        </p>
        
      </div>
    </section>
    )
  }
}

export default ProjectList