import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const Why = () => {
  return (
    <>
     <section className='section-testimonials' >
      <div className="u-center-text u-margin-bottom-small" >
        <Fade up>
          <h1 className="heading-secondary--white">
            What Makes Truck Stop Studio Different? 
          </h1>
        </Fade>
      </div>
      <div className='row' style={{backgroundColor: 'white', padding: '4rem', borderRadius: '10px'}}>
        <div className="col-1-of-2">
          <p>Our primary focus is to build effective websites through simple, creative designs and digital marketing. We take this one step further by really caring about your business is it's success.</p>
          <br/>
          <p>A well-executed website marketing strategy can be one of the best investments your business can make. A great website is the first place a potential customer sees when they find your business, in fact they see your website before they meet you.</p>
        </div>
        <div className="col-1-of-2" style={{paddingLeft: '2rem'}}>
          <div >
            <div >
              <h2 style={{paddingBottom: '2rem'}}>Investing in a website will allow you to:</h2>
              <ul>
                <li>Get online quickly</li>
                <li>Attract more quality customers</li>
                <li>Increase sales</li>
                <li>Build a following</li>
                <li>Focus on running the business while automatically generating customers</li>
                <li>Build a brand identity</li>
                
              </ul>
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

export default Why;
