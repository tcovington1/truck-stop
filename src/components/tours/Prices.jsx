import React from 'react'
import Card from '../Card'
import Fade from 'react-reveal/Fade'

const Prices = () => {
  return (
    <>
      <section className="section-prices">
        <Fade up>
          <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">
              Our Prices
            </h1>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="row">
            <div className="tour-flex">
              <Card heading='basic' price='$375' color='orange'/>
            </div>
            <div className="tour-flex">
              <Card heading='Advanced' price='$595' color='blue'/>
            </div>
            <div className="tour-flex">
              <Card heading='One-Time' price='$350' color='purple'/>
            </div>
          </div>
        </Fade>
      </section> 
    </>
  )
}

export default Prices
