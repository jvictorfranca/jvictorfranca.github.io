import React from 'react';
import { Link } from 'react-router-dom';
import PortifolioTittle from '../../Components/Portfolio-components/PortfolioTitle';
import './Portfolio.css';


class Portfolio extends React.Component{
  render(){
    return(
    <main className='portfolio'>
     <PortifolioTittle />
    </main>
    )
  }
}



export default Portfolio;