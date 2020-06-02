import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import blog1 from '../../../assets/blog1.jpg'


const HomeBlog = () => {
  return (
    <>
     <section className='section-testimonials' >
      <div className="u-center-text u-margin-bottom-big">
        <Fade up>
          <h1 className="heading-secondary--white">
            Learn
          </h1>
        </Fade>
      </div>
      <div className='row' style={{backgroundColor: 'white'}}>
        <div className="col-1-of-2">
          <div className="home-blog">
            <img className='blog-img_home' src={blog1} alt="blog-image"/>
            <h2>5 Ways To Grow Your Mobile Business Online</h2>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="button-container" style={{position: 'relative'}}>
            <div className="button-center">
              <Fade bottom>
                <button className='btn btn--orange'><a  style={{textDecoration: 'none', color: 'white'}}>Send my Free Analysis</a></button>
              </Fade>
            </div>
          </div>
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

export default HomeBlog;
