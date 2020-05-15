import React from 'react'

const ServicesCard = ({id, title, body, modal, setModal}) => {
  return (
    <>
      {console.log('id:', id)}
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="u-center-text" >
       <button className='btn btn--orange_secondary my2' onClick={() => setModal(!modal)}>Close</button>
      </div>
    </>
  )
}

export default ServicesCard