import React from 'react'

const ServicesCard = ({id, title, p1, p2, p3, modal, setModal}) => {
  return (
    <>
      {console.log('id:', id)}
      <h1>{title}</h1>
      <ul style={{padding: '2rem'}}>
        <li style={{marginBottom: '1rem'}}><p>{p1}</p></li>
        <li style={{marginBottom: '1rem'}}><p>{p2}</p></li>
        <li><p>{p3}</p></li>
      </ul>
      
      <div className="u-center-text" >
       <button className='btn btn--orange_secondary my2' onClick={() => setModal(!modal)}>Close</button>
      </div>
    </>
  )
}

export default ServicesCard