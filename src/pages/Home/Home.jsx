import React, { useEffect } from 'react'
import Banner from '../../components/Banner/BannerHome'
import Gallery from '../../components/Gallery/Gallery'

function Home() {
  useEffect(() => {
    document.title = `Kasa-Platform - Accueil`
  }, [])

  return (
    <main className="main-wrapper">
      <Banner />
      <Gallery />
    </main>
  )
}

export default Home
