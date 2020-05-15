import React, { Component } from 'react'


class Analysis extends Component {
  state = { name: "", email: "", website: ""};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, website } = this.state
    return (
      <>
        <div className="section-analysis" id='quote'>
          <div className="row">
            <div className="quote">
              <div className="quote__form">
              <form className='form' action="https://formspree.io/xpzywnlz" method="POST">
                  <div className="u-center-text u-margin-bottom-big">
                    <h1 className="heading-secondary">
                      Free Website Analysis
                    </h1>
                  </div>
                  <div className="form__group">
                    <input type="text" className="form__input" 
                      placeholder='Full Name' 
                      id='name' 
                      name="name"
                      value={name}
                      onChange={this.handleChange} 
                      required/>
                    <label htmlFor="name" className="form__label">Full Name</label>
                  </div>
                  <div className="form__group">
                    <input type="email" className="form__input" 
                      placeholder='Email' 
                      id='email' 
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required/>
                    <label htmlFor="email" className="form__label">Email</label>
                  </div>
                  <div className="form__group">
                    <input type="text" className="form__input" 
                      placeholder='Website URL' 
                      id='website' 
                      name="website"
                      value={website}
                      onChange={this.handleChange}
                      required/>
                    <label htmlFor="website" className="form__label">Website URL <small>Optional</small></label>
                    
                  </div>
                  <div className="form__group">
                    <label className="form__label form__label-interest">Which Package Interests You?</label>
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
                    <div className="form__radio-group">
                      <input type="radio" className="form__radio-input" id='monthly' name='choice'/>
                      <label htmlFor="monthly" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Monthly
                      </label>
                    </div>
                    <div className="u-center-text">
                      <button className='btn btn--orange my3'>Get My Free Analysis</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      </>
    )
  }
}

export default Analysis;
