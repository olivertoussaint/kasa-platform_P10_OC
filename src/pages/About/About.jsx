import React, { useEffect } from 'react'
import BannerAbout from '../../components/Banner/BannerAbout'
import Collapse from '../../components/Collapse/Collapse'
import CollapseData from '../../datas/collapses.json'

function About() {
  useEffect(() => {
    document.title = `Kasa-Platform - A propos`
  }, [])

  return (
    <>
      <main className="card-container">
        <BannerAbout />
        <div className="collapse_about">
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
