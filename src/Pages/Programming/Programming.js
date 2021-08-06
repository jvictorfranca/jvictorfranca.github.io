import React from 'react'
import AbilityBlock from '../../Components/Ability-components/AbilityBlock'
import AbilityList from '../../Components/Ability-components/AbilityList'
import data from '../../Data/programmingAbilities'




class Programming extends React.Component {
  render (){
    return (
      <main className='programming'>
        {data.map(group=> <AbilityBlock group={group} />)}
      </main>

    )
  }
}

export default Programming