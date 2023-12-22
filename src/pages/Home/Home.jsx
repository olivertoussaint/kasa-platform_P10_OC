import React from 'react'
import Banner from '../../components/Banner/BannerHome'
import Gallery from '../../components/Gallery/Gallery'
// import Card from '../../components/Card/Card'

function Home() {
  return (
  
    <main className="main-wrapper">
    <Banner />
   
      <div className="cards-container">
        <Gallery />
       {/* <Card /> */}
    </div>
    </main>
   
  )
}

export default Home