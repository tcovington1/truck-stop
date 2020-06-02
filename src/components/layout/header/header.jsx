import React from 'react'
import '../../../styles/main.scss'
// import Logo from '../../../assets/img/logo-white.png'
import Fade from 'react-reveal'
import ReactGA from 'react-ga';


const header = () => {

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: `Clicked 'Send My Free Analysis' button in Header`
    })
  }

  return (
    <div className='header'>
      {/* <div className="header__logo-box">
        <img src={Logo} alt="logo" className='header__logo'/>
      </div> */}
      <div className="header__text-box">
        <h1 className='primary-heading'>
          <Fade left>
            <span className='primary-heading--main'>Design To Market Studio</span>
          </Fade>
          <Fade right>
            <span className='primary-heading--sub'>we take your small business online</span>
          </Fade>
          <Fade right>
            <span className='primary-heading--ter'>and get you more customers</span>
          </Fade>
        </h1>
        <Fade bottom>
          <button  onClick={handleClick} className='btn btn--orange'><a href='#analysis' style={{textDecoration: 'none', color: 'white'}}>Send my Free Analysis</a></button>
        </Fade>
      </div>
    </div>
  )
}

export default header
