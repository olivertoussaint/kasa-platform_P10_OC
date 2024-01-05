import React from 'react'
import { useState } from 'react'
import previousImg from '../../assets/images/vector-left.svg'
import nextImg from '../../assets/images/vector-right.svg'

function Slideshow({slides}) {
  const [current, setCurrent] = useState(0) //!le premier slide est défini à 0
  const length = slides.length //*ici on défini la longueur du tableau

// TODO finir le slideShow

const nextImage = () => {
  setCurrent(current === length - 1 ? 0 : current + 1 )
}

const prevImage = () => {
  setCurrent(current === 0 ? length - 1 : current - 1 )
}

if (!Array.isArray(slides) || slides.length <= 0) {
  return null
}


  return (
    <section className='slide'>
      {length > 1 && (
        <p className="left-arrow" onClick={nextImage}>
           <img src={previousImg} alt="flèche directionnelle gauche" />
        </p>
      )}
      {length > 1 && (
        <p className="right-arrow" onClick={prevImage}>
          <img src={nextImg} alt="flèche directionnelle droite" />
        </p>
      )}
    {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
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
        );
      })}
    </section>
  );
}

export default Slideshow