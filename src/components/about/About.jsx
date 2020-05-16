import React, { useState } from 'react'
import '../../styles/main.scss'
import Fade from 'react-reveal/Fade'
import AboutCard from './AboutCard'
// import Modal from 'react-modal'
import ServicesCard from './ServicesCard'
import { Modal } from 'react-responsive-modal';

import servicesData from './servicesData'


//Icons
import { Icon } from '@iconify/react';
import baselineSearch from '@iconify/icons-ic/baseline-search';
import roundBuild from '@iconify/icons-ic/round-build';
import twotoneMobileFriendly from '@iconify/icons-ic/twotone-mobile-friendly';
import baselineRateReview from '@iconify/icons-ic/baseline-rate-review';


// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     width: '50%'
//   }
// };

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section-about">
        <Fade left>
          <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">
              Providing Online Services for Mobile Businesses
            </h1>
          </div>
        </Fade>
        <Fade up>
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <Icon icon={roundBuild} width='55' className='feature-box__icon' color='#277' />
                <h3 className="heading-tertiary heading-tertiary-lgfont u-margin-bottom-small">Website Design</h3>
                <p className="feature-box__text u-margin-bottom-small">
                  We design and build your website to <i>improve your sales</i>.
                </p>
                
                <button onClick={() => setIsModalOpen(true)} className="btn-text">Learn more &rarr;</button>
                {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
                  style={customStyles}
                  > */}
                <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}
                  center 
                  >
                    <h1>Website Design</h1>
                    <p>Hello</p>

                    {/* {servicesData.map(service => {
                      if (service.id === 1) {
                          return <ServicesCard 
                          modal={isModalOpen} 
                          setModal={setIsModalOpen}
                            id={service.id}
                            title={service.title}
                            body={service.body}
                          />
                        }
                      }) 
                    } */}
                </Modal>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <Icon icon={baselineSearch} width='55' className='feature-box__icon' color='#277'/>
                <h3 className="heading-tertiary heading-tertiary-lgfont u-margin-bottom-small">SEO</h3>
                <p className="feature-box__text u-margin-bottom-small ">
                  We get your website <i>found</i> by ranking on <strong>Google</strong>.
                </p>
                
                <button onClick={() => setIsModalOpen(true)} className="btn-text">Learn more &rarr;</button>
                {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
                  style={customStyles}
                  > */}
                 <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}
                  center 
                  >
                    {servicesData.map(service => {
                      if (service.id === 2) {
                          return <ServicesCard 
                            modal={isModalOpen} 
                            setModal={setIsModalOpen}
                            title={service.title}
                          />
                        }
                      }) 
                    }
                </Modal>              
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <Icon icon={baselineRateReview} width="55" className='feature-box__icon' color='#277' />
                <h3 className="heading-tertiary heading-tertiary-lgfont u-margin-bottom-small">AdWords</h3>
                <p className="feature-box__text u-margin-bottom-small">
                  We manage your <strong>Google Ads</strong> to ensure customers <i>see your site</i>.
                </p>
                
                <button onClick={() => setIsModalOpen(true)} className="btn-text">Learn more &rarr;</button>
                {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
                  style={customStyles}
                  > */}
                   <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}
                  center 
                  >
                    {servicesData.map(service => {
                      if (service.id === 3) {
                          return <ServicesCard 
                            modal={isModalOpen} 
                            setModal={setIsModalOpen}
                            title={service.title}
                          />
                        }
                      }) 
                    }
                </Modal>              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <Icon icon={twotoneMobileFriendly} width="55" className='feature-box__icon' color='#277' />
                <h3 className="heading-tertiary heading-tertiary-lgfont u-margin-bottom-small">Social Media</h3>
                <p className="feature-box__text  u-margin-bottom-small">
                  We help get the word out through social media.
                </p>
                
                <button onClick={() => setIsModalOpen(true)} className="btn-text">Learn more &rarr;</button>
                {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
                  style={customStyles}
                  > */}
                   <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}
                  center 
                  >
                    {servicesData.map(service => {
                      if (service.id === 4) {
                          return <ServicesCard 
                            modal={isModalOpen} 
                            setModal={setIsModalOpen}
                            title={service.title}
                            body={service.body}
                          />
                        }
                      }) 
                    }
                </Modal>              </div>
            </div>

            {/* <div className="col-1-of-2">
              <div className="composition">
                <img src={nat1} alt="Photo 1" className="composition_photo composition_photo--p1"/>
                <img src={nat2} alt="Photo 2" className="composition_photo composition_photo--p2"/>
                <img src={nat3} alt="Photo 3" className="composition_photo composition_photo--p3"/>
              </div>
            </div> */}
          </div>
        </Fade>
      </section>
    </>
  )
}

export default About
