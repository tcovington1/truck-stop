import React from 'react'
import '../../styles/main.scss'

// Images
import nat1 from '../../assets/img/nat-1-large.jpg'
import nat2 from '../../assets/img/nat-2-large.jpg'
import nat3 from '../../assets/img/nat-3-large.jpg'


const about = () => {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h1 className="heading-secondary">
            Providing Adventures for Wanderers
          </h1>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="row_column">
              <h3 className="heading-tertiary u-margin-bottom-small">Fall in love with nature</h3>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, qui? Illum eligendi alias, dolor perferendis modi ea dolore enim quia quibusdam error impedit neque, corporis fugit tempora harum, esse mollitia.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">Live Adventerous</h3>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, qui? Illum eligendi alias dolor perferendis.
              </p>
              
              <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src={nat1} alt="Photo 1" className="composition_photo composition_photo--p1"/>
              <img src={nat2} alt="Photo 2" className="composition_photo composition_photo--p2"/>
              <img src={nat3} alt="Photo 3" className="composition_photo composition_photo--p3"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
