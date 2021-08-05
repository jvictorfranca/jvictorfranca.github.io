import './PortfolioButton.css'
import React from 'react'
import data from '../../Data/projects'

class PortfolioButton extends React.Component{
  render(){
    let {project, action, isSelected} = this.props
   let {icon, linkName} = project

    return(
      <div>
      
      <button className={`portfolio-button ${ isSelected === linkName ? 'selected' : ''}`} onClick={action}  name={linkName}>
      <img className={`portfolio-button-icon`} src={icon} alt="aaa" name={linkName}/>
      {project.linkName}
          </button>
      </div>

    )
  }
}

export default PortfolioButton
