import React from 'react'

function Tag({ name }) {
  return (
    <div className="tag-container">
      <span className="tag-container__button">{name}</span>
    </div>
  )
}

export default Tag
