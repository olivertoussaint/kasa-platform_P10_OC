import React from 'react'
import { useState } from 'react'

function Slideshow({slides}) {
  const [current, setCurrent] = useState(0) //!le premier slide est défini à 0
  const length = slides.length //*ici on défini la longueur du tableau


  return (
    <>
    {slides.map((slide, index)=> (
      <div
        key={index}
      >
        {index === current && <img src={slide} alt='appartement à louer' className='rounded' />}

      </div>
    ))}
    </>
  )
}

export default Slideshow