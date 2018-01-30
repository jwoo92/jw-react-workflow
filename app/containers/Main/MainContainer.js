import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import { withRouter } from 'react-router-dom'
import { NavigationContainer, FooterContainer } from 'containers'
import styles from './styles.scss'

const MainContainer = (props) => (
  <div className={styles.container}>
    <NavigationContainer />
    <div className={styles.innerContainer}>{props.children}</div>
    <FooterContainer />
  </div>
)

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

MainContainer.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(MainContainer)
