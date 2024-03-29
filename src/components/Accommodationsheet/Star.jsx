import React from 'react'
import emptyStar from '../../assets/images/star-empty.svg'
import fullStar from '../../assets/images/star-solid.svg'

function Star(props) {
  const score = props.score

  const grades = Array(5)
    .fill(1)
    .map((_, i) => i + 1)

  return (
    <div className="rate-container">
      {grades.map((grade) =>
        score >= grade ? (
          <img
            key={grade.toString()}
            className="star"
            src={fullStar}
            alt="étoile"
          />
        ) : (
          <img
            key={grade.toString()}
            className="star"
            src={emptyStar}
            alt="étoile"
          />
        )
      )}
    </div>
  )
}

export default Star
