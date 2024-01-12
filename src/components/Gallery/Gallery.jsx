import React from 'react'
import accommodations from '../../datas/accommodation.json'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div className="home_gallery">
      {accommodations.map((accommodation, id) => {
        return (
          <article key={id}>
            <Link to={`/chambers/${accommodation.id}`}>
              <Card picture={accommodation.cover} title={accommodation.title} />
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default Gallery
