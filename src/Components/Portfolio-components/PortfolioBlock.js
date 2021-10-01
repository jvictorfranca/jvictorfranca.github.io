import React from 'react';
import propTypes from 'prop-types';

import './PortfolioBlock.css';

import ProjectList from './ProjectList';

class PortifolioBlock extends React.Component {
  render() {
    let { group } = this.props;
    let { name, description, projects } = group;
    return (
      <section className='portfolio-block'>
        <h1 className='title'>{name}</h1>
        <p>{description}</p>
        <ProjectList projects={projects} />
      </section>
    );
  }
}

PortifolioBlock.propTypes = {
  group: propTypes.shape({
    name: propTypes.string,
    description: propTypes.string,
    projects: propTypes.arrayOf(propTypes.object),
  }),
};

export default PortifolioBlock;
