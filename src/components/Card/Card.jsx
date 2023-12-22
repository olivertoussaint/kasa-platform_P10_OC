import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
width: 340px;
height: 340px;
background-image: linear-gradient(rgb(255, 98, 98), rgb(248, 108, 108), rgb(229, 106, 106), rgb(133, 51, 51));
border-radius: 10px;

`

function Card({image, title}) {
  return (
     <CardWrapper>
      <img src={image} alt={title} className="card_img" />
        <div className="card_overlay"></div>

        <h2 className="card_title">{title}</h2>
     </CardWrapper>
   

    
  )
}

export default Card