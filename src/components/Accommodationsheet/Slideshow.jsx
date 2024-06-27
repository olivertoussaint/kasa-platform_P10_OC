import React from 'react'
import { useState } from 'react'
import previousImg from '../../assets/images/vector-left.svg'
import nextImg from '../../assets/images/vector-right.svg'

function Slideshow({ slides }) {
  const [current, setCurrent] = useState(0) //!le premier slide est défini à 0
  const length = slides.length //*ici on défini la longueur du tableau

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className="slideshow">
      <div className="arrows-container">
        {length > 1 && (
          <img
            src={previousImg}
            alt="flèche directionnelle gauche"
            onClick={prevImage}
            className="left-arrow"
          />
        )}

        {length > 1 && (
          <img
            src={nextImg}
            alt="flèche directionnelle droite"
            onClick={nextImage}
            className="right-arrow"
          />
        )}
      </div>

      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={`slider ${index === current ? 'active' : ''}`}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Slideshow
