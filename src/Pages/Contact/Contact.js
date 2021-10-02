import React from 'react';
import propTypes from 'prop-types';

import ContactItem from '../../Components/ContactItem/ContactItem';

import { connect } from 'react-redux';
import { contactSwitches } from '../../textSwitches';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: undefined,
    };
    this.setThisState = this.setThisState.bind(this);
  }

  setThisState(index) {
    this.setState({
      copied: index,
    });
  }
  render() {
    const { copied } = this.state;
    const { languageStored } = this.props;
    console.log(languageStored);
    const contacts = contactSwitches(languageStored);
    console.log(contacts);

    return (
      <main>
        <h1 className='title'>{contacts.title}</h1>
        <p>{contacts.text}</p>
        {contacts.contactItens.map((item, index) => (
          <ContactItem
            key={index}
            item={item}
            index={index}
            copied={copied}
            setFather={this.setThisState}
          />
        ))}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  languageStored: state.languageReducer.language,
});

Contact.propTypes = {
  languageStored: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Contact);
