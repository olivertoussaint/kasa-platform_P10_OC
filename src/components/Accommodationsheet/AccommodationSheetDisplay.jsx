import React from 'react'
import { useParams } from 'react-router-dom'
import ChambersSheetDatas from '../../datas/accommodation.json'
import Collapse from '../Collapse/Collapse'
import Tag from './Tag'
import Host from './Host'
import Slideshow from './Slideshow'
import Star from './Star'

const AccommodationSheetDisplay = () => {
  // Le useParams hook renvoie un objet de paires clé/valeur des paramètres dynamiques de l'URL actuelle
  const { id } = useParams()

  const chambersSheet = ChambersSheetDatas.find(
    (accommodation) => accommodation.id === id
  )

  const ChambersTags = chambersSheet.tags.map((tags, el) => {
    return <Tag key={el} name={tags} />
  })

  const equipments = chambersSheet.equipments.map((equipment, el) => {
    return (
      <ul key={el}>
        <li>{equipment}</li>
      </ul>
    )
  })

  return (
    <>
      <div className="chambers-sheet-container">
        <Slideshow slides={chambersSheet.pictures} />
        <section className="chambers-sheet">
          <div className="description-info">
            <div className="description-info__tags">
              <div className="description-info__tags__title">
                <span className="accommodation-title">
                  {chambersSheet.title}
                </span>
                <span className="accommodation-location">
                  {chambersSheet.location}
                </span>
              </div>
              <div className="description-info__tags__tags">{ChambersTags}</div>
            </div>

            <div className="description-info__owner">
              <div className="description-info__owner__name">
                <Host
                  name={chambersSheet.host.name}
                  picture={chambersSheet.host.picture}
                />
              </div>
              <div className="description-info__owner__rate">
                <Star score={chambersSheet.rating} />
              </div>
            </div>
          </div>
        </section>

        <div className="description-content">
          <div className="description-content__description">
            <Collapse title="Description" content={chambersSheet.description} />
          </div>
          <div className="description-content__equipment">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AccommodationSheetDisplay
