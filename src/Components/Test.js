import React from 'react'
import data from '../Data/projects'

class Test extends React.Component {
  render () {
    let texts = data
    console.log(texts[0].projects)
    return(
      <div>
{texts[0].projects[0].url}

      aeggeageaegaeageaggea


      </div>
    )
  }
}

export default Test