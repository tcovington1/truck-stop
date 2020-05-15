import React, { useState } from 'react'
import Modal from 'react-modal'
import Quote from './quote/Quote';

import '../styles/main.scss'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '95vh',
    width: '50%'
  }
};

const Card = ({heading, price, frontDetails, backDetails, headingColor}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='card'>
      <div className="card__side card__side--front">
        <h4 className={`card__heading card__heading-${headingColor}`}>
          {heading}
        </h4>
        <div className="card__price-box">
          <small>Starting At</small>
          <h5 className="card__price">
            {price}
          </h5>
        </div>
        <div className="card__details">
          <ul>
            <li>
            {frontDetails.map(detail => {
                 return <li>{detail}</li>
              })}
            </li>
          </ul>
        </div>
        <div className="u-center-text">
          {/* <a href="#" className='btn btn--orange'>Details</a> */}
          <h3 className='hide-mob'>More Details ></h3>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <h4 className={`card__heading hide-mob card__heading-${headingColor}`}>
          {heading}
        </h4>
        <div className="card__details">
          <ul>
            
              {backDetails.map(detail => {
                 return <li>{detail}</li>
              })}
            
          </ul>
        <div className="u-center-text">
          <button onClick={() => setIsModalOpen(true)} className='btn btn--orange my1'>Request A Quote</button>
          <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            >

              <Quote 
                modal={isModalOpen} 
                setModal={setIsModalOpen}/>
            </Modal>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
