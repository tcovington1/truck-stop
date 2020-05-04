import React from 'react'
import Card from '../Card'
import Fade from 'react-reveal/Fade'

const Prices = () => {


  const cardData = [
    {
      id: 1,
      heading: 'Basic',
      price: '$395',
      frontData: [ 'Professional One-Site Page' ],
      backData: [ 'Professional One-Site Page', 'Call To Action Buttons', 'Testimonials', 'Images', 'Contact Form', 'Mobile Responsive'  ],
    },
    {
      id: 2,
      heading: 'Premium',
      price: '$395',
      frontData: [ 'Basic + SEO' ],
      backData: [ 'Professional One-Site Page', 'Call To Action Buttons', 'Testimonials', 'Images', 'Contact Form', 'Mobile Responsive'  ],
    },
    {
      id: 1,
      heading: 'Monthly',
      price: '$350',
      frontData: [ 'Social Media Management', 'SEO' ],
      backData: [ 'Professional One-Site Page', 'Call To Action Buttons', 'Testimonials', 'Images', 'Contact Form', 'Mobile Responsive'  ],
    },
  ]

    const mapCardDataFn = (cardData) => (
      <div className="row__bottom">
        <Card 
          heading={cardData.heading}
          price={cardData.price}
          frontDetails={cardData.frontData}
          backDetails={cardData.backData}
        />
      </div>
    );

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
            {/* <div className="tour-flex"> */}
              {/* <Card heading='basic' price='$375' color='orange' frontDetails={getCardDetailsFn(cardOneFront)} backDetails={getCardDetailsFn(cardOneBack)}/> */}
              {cardData.map(mapCardDataFn)}
            {/* </div> */}
            {/* <div className="tour-flex">
              <Card heading='Advanced' price='$595' color='blue'/>
            </div>
            <div className="tour-flex">
              <Card heading='One-Time' price='$350' color='purple'/>
            </div> */}
          </div>
        </Fade>
      </section> 
    </>
  )
}

export default Prices
