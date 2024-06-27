import React from 'react'
import bannerAboutImage from '../../assets/images/about-background.png'

function BannerAbout() {
  return (
    <div className="banner-about-container">
      <img
        src={bannerAboutImage}
        alt="bannière à propos"
        className="about_banner_img"
      />
      <div className="banner_overlay_about"></div>
    </div>
  )
}

export default BannerAbout
