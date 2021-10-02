import React from 'react';
import propTypes from 'prop-types';

import './Portfolio.css';

// import data from '../../Data/projects';
import { portfoliotSwitches } from '../../textSwitches';
import PortifolioBlock from '../../Components/Portfolio-components/PortfolioBlock';
import { connect } from 'react-redux';

class Portfolio extends React.Component {
  render() {
    const { languageStored } = this.props;
    const data = portfoliotSwitches(languageStored);
    return (
      <main className='portfolio'>
        {data.map((group) => (
          <PortifolioBlock group={group} key={group.name} />
        ))}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

Portfolio.propTypes = {
  languageStored: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Portfolio);
