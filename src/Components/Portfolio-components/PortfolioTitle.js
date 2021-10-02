import React from 'react';
import propTypes from 'prop-types';

import './PortfolioTitle.css';
import utility from './title-functions';

//Aqui usa uma função que traduz o objeto de imagens, e faz uma imagem para cada uma na array
class PortifolioTittle extends React.Component {
  render() {
    const { project } = this.props;
    let array = project.used;
    let title = project.name;
    return (
      <div className='title-container'>
        <h1 className='portfolio-title'>{title}</h1>
        <div className='images-container'>
          {array.map((icon) => (
            <img
              className='portfolio-title-img'
              src={utility(icon)}
              alt='Icon'
              key={icon}
            />
          ))}
        </div>
      </div>
    );
  }
}

PortifolioTittle.propTypes = {
  project: propTypes.shape({
    used: propTypes.arrayOf(propTypes.string),
    name: propTypes.string,
  }),
};

export default PortifolioTittle;
