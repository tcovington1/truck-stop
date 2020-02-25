import React from 'react'
import '../../../styles/main.scss'
import Logo from '../../../assets/img/logo-white.png'
import Fade from 'react-reveal'

const header = () => {
  return (
    <div className='header'>
      <div className="header__logo-box">
        <img src={Logo} alt="logo" className='header__logo'/>
      </div>
      <div className="header__text-box">
        <h1 className='primary-heading'>
          <Fade left>
            <span className='primary-heading--main'>Adventours</span>
          </Fade>
          <Fade right>
            <span className='primary-heading--sub'>start your adventure</span>
          </Fade>
        </h1>
        <Fade bottom>
          <a href="#" className='btn btn--white'>Discover Our Tours</a>
        </Fade>
      </div>
    </div>
  )
}

export default header