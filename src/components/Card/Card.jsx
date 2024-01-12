import React from 'react'
import PropTypes from 'prop-types'
function Card({ picture, title }) {
  return (
    <div className="card">
      <img src={picture} alt={title} className="card_img" />
      <div className="card_overlay"></div>

      <h2 className="card_title">{title}</h2>
    </div>
  )
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  picture: '',
  title: '',
}

export default Card
