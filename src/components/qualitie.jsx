import React from 'react'
import propTypes from 'prop-types'

const Qualitie = ({ ...props }) => {
  return (<span className = {'badge m-1 bg-' + props.color}> {props.name} </span>)
}

Qualitie.propTypes = {
  color: propTypes.string,
  name: propTypes.string
}

export default Qualitie
