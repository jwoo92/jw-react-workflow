import React, { Component } from 'react'
import { HeroContainer, SampleContainer } from 'containers'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HeroContainer />
        <SampleContainer />
      </div>
    )
  }
}

export default HomeContainer
