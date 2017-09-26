import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Sample = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}

Sample.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Sample
