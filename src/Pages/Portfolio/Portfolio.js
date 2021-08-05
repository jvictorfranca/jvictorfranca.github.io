import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import ProjectList from '../../Components/Portfolio-components/ProjectList';

import data from '../../Data/projects'


class Portfolio extends React.Component{
  render(){
    let projects = data[0].projects
    return(
    <main className='portfolio'>
     <ProjectList projects= {projects} />
    </main>
    )
  }
}



export default Portfolio;