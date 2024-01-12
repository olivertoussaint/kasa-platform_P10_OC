import React from 'react'
import bannerImage from '../../assets/images/background-banner.png'

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <img src={bannerImage} alt="bannière" className="banner_img" />
        <div className="banner_overlay"></div>
        <div className="banner-text">
          <p>Chez vous, partout et ailleurs</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
