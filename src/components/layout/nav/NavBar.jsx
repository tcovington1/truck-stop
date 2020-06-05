import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from 'react-modal'
import Quote from '../../quote/Quote';
import ReactGA from 'react-ga';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '88vh',
    width: '60%',
    marginTop: '2rem'

  }
};

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: `Clicked 'Get A Quote' button in navbar`
    });

    setIsModalOpen(true)

  }

  return (
    <div className='navbar'>
      <div className="navbar_logo heading-secondary"><Link to='/' className='blog-link'>TRUCK STOP</Link></div>
      <div className='navbar_link-container'>
        <ul className='navbar_navlinks'>
          <li><Link to='/our-process' className='blog-link'>Our Process</Link></li>
          <li><Link to='/' className='blog-link'>Pricing</Link></li>
          <li><Link to='/blog' className='blog-link'>Learn</Link></li>
          <li><button onClick={handleClick} className='btn btn--orange_secondary-nav'>Request a Quote</button></li>
        </ul>
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            >

              <Quote 
                modal={isModalOpen} 
                setModal={setIsModalOpen}/>
            </Modal>
      </div>
    </div>
  )
}
