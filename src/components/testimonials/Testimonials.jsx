import React from 'react'
import Photo from '../../assets/tc_mob_sm.jpeg'
import Photo2 from '../../assets/testimonial.jpg'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const testimonials = () => {
  return (
    <>
     <section className='section-testimonials' >
      <div className="u-center-text u-margin-bottom-big">
        <Fade up>
          <h1 className="heading-secondary--white">
            We Get Results to Improve Your Business
          </h1>
        </Fade>
      </div>
      <div className="story">
        <figure className="story__shape">
          <img src={Photo} alt="" className='story__img'/>
          <figcaption className="story__caption">
            Taylor Covington
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className='heading-tertiary u-margin-bottom-small'>Such a great service</h3>
          <p>Using The Truck Stop has increased my sales by 70%. I'd recommend using them. It really is a one stop shop.</p>
        </div>
      </div>
      <div className="story">
        <figure className="story__shape">
          <img src={Photo2} alt="" className='story__img'/>
          <figcaption className="story__caption">
            Jake Wilson
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className='heading-tertiary u-margin-bottom-small'>Sales Increased</h3>
          <p>The Truck Stop focused on an overall online experience. The site looks great, and sales have increased.</p>
        </div>
      </div>
{/* 
      <div className="u-center-text u-margin-bottom-big">
        <Link to='/' className='btn btn--green'>Read All Reviews</Link>
      </div> */}
     </section> 
    </>
  )
}

export default testimonials;
