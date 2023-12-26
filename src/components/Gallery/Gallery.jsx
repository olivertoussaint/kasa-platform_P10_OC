import React from 'react'
import accommodations from '../../datas/accommodation.json'
import Card from '../Card/Card'

function Gallery() {
  return (
    <div className="home_gallery">
      {accommodations.map((accomodation, index) => {
            return (
                  <article key={ index }>
                        <Card picture={accomodation.cover} 
                              title={accomodation.title} 
                        />
                  </article>
            )
      })}

    </div>
  )
}

export default Gallery