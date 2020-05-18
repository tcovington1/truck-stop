import React, {useState} from 'react'
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
    height: '99vh',
    width: '60%',
    zIndex: '2',

  }
};


const NavBarMob = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: `Clicked 'Get A Quote' button in mobile navbar`
    });

    setIsModalOpen(true)

  }

  return (
    <div className='navmobile'>

      <input type="checkbox" className='navmobile__checkbox' id='nav-toggle' />
      
      <label htmlFor="nav-toggle" className='navmobile__button'>
        <span className="navmobile__icon">&nbsp;</span>
      </label>

      <div className="navmobile__background">&nbsp;</div>

      <nav className="navmobile__nav">
        <ul className="navmobile__list">
          <li className="navmobile__item"><Link to='/' className='navmobile__link'>Our Process</Link></li>
          <li className="navmobile__item"><Link to='/' className='navmobile__link'>Pricing</Link></li>
          <li className="navmobile__item"><Link to='/blog' className='navmobile__link'>Learn</Link></li>
          <li><button onClick={handleClick} className='btn btn--orange'>Request a Quote</button></li>

        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            >

              <Quote 
                modal={isModalOpen} 
                setModal={setIsModalOpen}/>
            </Modal>
    </div>
  )
}

export default NavBarMob
