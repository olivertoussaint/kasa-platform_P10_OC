import React from 'react'
import BannerAbout from '../../components/Banner/BannerAbout'
import Collapse from '../../components/Collapse/Collapse'
import CollapseData from '../../datas/collapses.json'


function About() {
  return (
    <>
      <main className="main-wrapper">
        <BannerAbout />
  <div className="collapse">
    <div className="collapse_dropdown">
      {CollapseData.map((elt) => {
        return (
          <div key={elt.id}>
            <Collapse content={elt.content} title={elt.title} />
          </div>
        )
      })}
    </div>
  </div>
      </main>
    </>
  )
}

export default About