import React from 'react';
import ContactItem from '../../Components/ContactItem/ContactItem';

import contacts from '../../Data/contacts';

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

export default Contact;
