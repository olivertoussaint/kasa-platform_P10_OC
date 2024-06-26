import React from 'react'
import { useState } from 'react'
import pictureOne from '../../assets/images/vector-bas.svg'

const Collapse = ({ title, content }) => {
  // Déclare une nouvelle variable d'état
  const [isOpen, setOpen] = useState(false)

  const display = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="collapse_dropdown_container">
      <div className="collapse_dropdown_title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <img
              src={pictureOne}
              alt="vecteur-bas"
              className={isOpen ? 'rotated' : ''}
            />
          ) : (
            <img
              src={pictureOne}
              alt="vecteur-bas"
              className={isOpen ? '' : 'initial-position'}
            />
          )}
        </p>
      </div>
      <div className="collapse_dropdown_content">
        {isOpen ? (
          <div className={'open'}>{content}</div>
        ) : (
          <div className={'close'}>{content}</div>
        )}
      </div>
    </div>
  )
}

export default Collapse
