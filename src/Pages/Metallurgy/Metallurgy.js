import React from 'react'
import AbilityBlock from '../../Components/Ability-components/AbilityBlock'

import data from '../../Data/metallurgyAbilities'




class Metallurgy extends React.Component {
  render (){
    return (
      <main className='metallurgy'>
        {data.map(group=> <AbilityBlock group={group} key={group.name}/>)}
      </main>

    )
  }
}

export default Metallurgy