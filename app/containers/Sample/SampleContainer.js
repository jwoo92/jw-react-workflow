import React, { Component } from 'react'
import { Sample } from 'components'

class SampleContainer extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Sample title using state',
    }
  }

  render() {
    return <Sample title={this.state.title} />
  }
}

export default SampleContainer
