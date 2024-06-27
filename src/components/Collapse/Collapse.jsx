import React from 'react'
import { useState } from 'react'
import arrowImg from '../../assets/images/vector-bas.svg'

const Collapse = ({ title, content }) => {
  // Déclare une nouvelle variable d'état
  const [isOpen, setOpen] = useState(false)

  const toggleCollapse = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse_dropdown">
        <div className="collapse_dropdown_title" onClick={toggleCollapse}>
          <h2>{title}</h2>
          <img
            src={arrowImg}
            alt="Toggle Collapse"
            className={isOpen ? 'rotated' : 'initial-position'}
          />
        </div>
        <div
          className={`collapse_dropdown_content ${isOpen ? 'open' : 'close'}`}
        >
          <div className="collapse_dropdown_content_inner">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
