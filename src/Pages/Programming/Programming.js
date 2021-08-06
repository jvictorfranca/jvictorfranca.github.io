import React from 'react'
import AbilityList from '../../Components/Ability-components/AbilityList'
import data from '../../Data/programmingAbilities'

class Programming extends React.Component {
  render (){
    return (
      <div>
      <AbilityList abilities={data[0].abilities}/>
      </div>

    )
  }
}

export default Programming