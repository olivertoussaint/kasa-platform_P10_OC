import React from 'react'
// import { Link } from 'react-router-dom'
import accommodations from "../../Datas/accommodation.json"
//  import Card from '../Card/Card'

const Gallery = () => {
      return (
            <div className="home_gallery">
                  {accommodations.map((accommodation) => {
                        return (
                              console.log(accommodation)
                              
                         )
                  })}
            </div>
      )
}

export default Gallery