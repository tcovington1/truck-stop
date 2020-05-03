import React from 'react'

const Quote = () => {
  return (
    <>
      <div className="section-quote" id='quote'>
        <div className="row">
          <div className="quote">
            <div className="quote__form">
              <form className="form">
                <div className="u-center-text u-margin-bottom-big">
                  <h1 className="heading-secondary">
                    Request a Quote
                  </h1>
                </div>
                <div className="form__group">
                  <input type="text" className="form__input" placeholder='Full Name' id='name' required/>
                  <label htmlFor="name" className="form__label">Full Name</label>
                </div>
                <div className="form__group">
                  <input type="email" className="form__input" placeholder='Email' id='email' required/>
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id='basic' name='choice'/>
                    <label htmlFor="basic" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Basic
                    </label>
                  </div>
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id='premium' name='choice'/>
                    <label htmlFor="premium" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Premium
                    </label>
                  </div>
                  <a href="#" className='btn btn--orange my3'>Get A Quote</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Quote;
