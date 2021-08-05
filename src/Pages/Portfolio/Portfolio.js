import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import ProjectList from '../../Components/Portfolio-components/ProjectList';

import data from '../../Data/projects'
import PortifolioBlock from '../../Components/Portfolio-components/PortfolioBlock';


class Portfolio extends React.Component{
  render(){
    let projects = data[0].projects
    console.log(data)
    console.log(data.map(group=> group.name))
    console.log(data[1])

    return(
    <main className='portfolio'>
     <ProjectList projects= {projects} />
     {data.map(group=> <PortifolioBlock group={group}/>)}
 
     
    </main>
    )
  }
}



export default Portfolio;