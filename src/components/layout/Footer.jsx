import React from 'react'
// import Logo from '../../assets/img/logo-white.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div className="footer__logo-box">
        <img src={Logo} alt="logo" className='footer__logo'/>
      </div> */}
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="" className="footer__link">About</Link>
              </li>
              <li className="footer__item">
                <Link to='' className="footer__link">Contact Us</Link>
              </li>
              <li className="footer__item">
                <Link to='/blog' className="footer__link">Growth Tips</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by <a href="https://www.taylorjcovington.com" className='footer__link'>Design To Market Studio</a>. Copryright &copy; TheTruckStop.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
