import PropTypes from "prop-types"
import React from 'react'

export const ReviewsList = ({reviews}) => {
  return (
    <div>
          <ul>
            {reviews.map(review => {
                return (
                    <li key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p>{review.content}</p>
                    </li>
                );    
            })}
          </ul>      
    </div>
  )
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}
