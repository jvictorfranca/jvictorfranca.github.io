import React from 'react'
import './PortfolioTitle.css'
import utility from './title-functions'


//Aqui usa uma função que traduz o objeto de imagens, e faz uma imagem para cada uma na array
class PortifolioTittle extends React.Component{
  
  render(){
    let array = ['html', 'react']
    let title = 'hello'
    let img = utility('html')
    console.log(img)
    return(
      <div className='title-container'>
        <h1 className='portfolio-title'>{title}</h1>
        <div className='images-container'>
          {array.map((icon)=> <img className='portfolio-title-img' src={utility(icon)} alt='Icon' key={icon}/>)}
        </div>
      </div>
    )
  }
}

export default PortifolioTittle