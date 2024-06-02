import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="bg-black flex flex-row justify-center text-white items-center">
     <FontAwesomeIcon icon={faInstagram} className='py-3 px-10' />
     <FontAwesomeIcon icon={faLinkedin} className='py-3 px-10'/>
     <FontAwesomeIcon icon={faGithub} className='py-3 px-10'/>
    </div>
  )
}

export default Footer
