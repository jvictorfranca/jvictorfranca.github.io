import React from 'react';
import { title1, text1 } from '../Data/Texts/homeEng.json';

class Test extends React.Component {
  render() {
    return (
      <div>
        <p>{title1}</p>
        <p>{text1}</p>
      </div>
    );
  }
}

export default Test;
