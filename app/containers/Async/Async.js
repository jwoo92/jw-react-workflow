import React, { Component } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line

class Async extends Component {
  constructor() {
    super()
    this.state = {
      AsyncComponent: null,
    }
  }

  componentWillMount() {
    this.cancelUpdate = false
    this.props.load().then((component) => {
      this.setState({ AsyncComponent: component })

      if (!this.cancelUpdate) {
        this.forceUpdate()
      }
    })
  }

  render() {
    const { AsyncComponent } = this.state
    const { placeholder } = this.props

    return AsyncComponent ? (
      AsyncComponent.default ? (
        <AsyncComponent.default {...placeholder} />
      ) : (
        <AsyncComponent {...placeholder} />
      )
    ) : null
  }
}

Async.propTypes = {
  load: PropTypes.func.isRequired,
  placeholder: PropTypes.node,
}

export default Async
