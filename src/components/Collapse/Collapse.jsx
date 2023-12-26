import React from 'react'
import { useState } from 'react'
import pictureOne from '../../assets/images/vector-bas.svg'
import pictureTwo from '../../assets/images/vector-haut.svg'

const Collapse = ({title, content}) => {

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
           <img src={pictureOne}  alt="vecteur-bas" />
          ) : (
            < img src={pictureTwo} alt="vecteur-haut" />
          )}
        </p>
      </div>
            <div className="collapse_dropdown_content">
              {isOpen && <p>{content}</p>}
            </div>
            </div>
    
  )
}

export default Collapse