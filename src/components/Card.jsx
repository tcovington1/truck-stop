import React from 'react'
import '../styles/main.scss'

const Card = ({heading, price, frontDetails, backDetails}) => {

  return (
    <div className='card'>
      <div className="card__side card__side--front">
        <h4 className="card__heading">
          {heading}
        </h4>
        <h5 className="card__price">
          {price}
        </h5>
        <div className="card__details">
          <ul>
            <li>
              {frontDetails}
            </li>
          </ul>
        </div>
        <div className="u-center-text">
          {/* <a href="#" className='btn btn--orange'>Details</a> */}
          <h3>More Details ></h3>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <h4 className="card__heading ">
          {heading}
        </h4>
        <div className="card__details">
          <ul>
            <li>
              {backDetails}
            </li>
          </ul>
        <div className="u-center-text">
          <a href="#" className='btn btn--orange my1'>Book Now</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
