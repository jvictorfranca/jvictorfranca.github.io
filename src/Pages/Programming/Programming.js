import React from 'react'
import AbilityBlock from '../../Components/Ability-components/AbilityBlock'

import data from '../../Data/programmingAbilities'




class Programming extends React.Component {
  render (){
    return (
      <main className='programming'>
        {data.map(group=> <AbilityBlock group={group} key={group.name}/>)}
      </main>

    )
  }
}

export default Programming