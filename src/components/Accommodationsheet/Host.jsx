import React from 'react'
import PropTypes from 'prop-types'

function Host(props) {
  return (
    <>
    <span className="owner-name">{props.name}</span>
    <img 
    src={props.picture} 
    alt="propriétaire" 
    className="owner-picture" 
    />
    </>
  )
}

Host.propTypes = {
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }
  
    Host.defaultProps = {
      picture: '',
      title: '',
    }

export default Host