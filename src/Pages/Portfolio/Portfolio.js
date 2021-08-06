import React from 'react';
import './Portfolio.css';

import data from '../../Data/projects'
import PortifolioBlock from '../../Components/Portfolio-components/PortfolioBlock';


class Portfolio extends React.Component{
  render(){
 


    return(
    <main className='portfolio'>
     {data.map(group=> <PortifolioBlock group={group} key={group.name}/>)}
 
     
    </main>
    )
  }
}



export default Portfolio;