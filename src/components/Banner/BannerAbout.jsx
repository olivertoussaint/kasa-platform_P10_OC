import React from 'react'
import bannerAboutImage from '../../assets/images/about-background.png'

function BannerAbout() {
  return (
    <div className="banner-about-container">
      <img src={bannerAboutImage} alt="bannière à propos" />
    </div>
  )
}

export default BannerAbout
