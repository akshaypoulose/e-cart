import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function Footer() {
  return (
    <div className='py-10 md:px-20 px-10 bg-violet-900 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'> 
    <div>
        <h2 className='text-4xl'><FontAwesomeIcon icon={faCartShopping} className='me-3'/>E-cart</h2>
        <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis impedit officiis molestias fugit architecto, magni modi at dolores amet? Aperiam deserunt aut, earum commodi culpa exercitationem omnis aspernatur dicta pariatur?</p>
    </div>
    <div className='md:flex justify-center mt-10 md:mt-0'>
        <div>
            <h3 className='text-4xl'>Links</h3>
            <p className='mt-6'>Home</p>
            <p className='mt-3'>Wishlist</p>
            <p className='mt-3'>Cart</p>
        </div>
    </div>
    <div className='md:flex justify-center mt-10 md:mt-0'>
    <div>
            <h3 className='text-4xl'>Guides</h3>
            <p className='mt-6'>React</p>
            <p className='mt-3'>React-bootstrap</p>
            <p className='mt-3'>Bootswatch</p>
        </div>
    </div>
    <div className='md:px-10 mt-10 md:mt-0'>
        <h3 className='text-3xl'>Contact Us</h3>
        <div className='flex mt-6'>
            <input type="text"placeholder='Email-Id'className='p-3 rounded w-full' />
            <button className='p-3 bg-orange-600 ms-3 rounded'>Subscribe</button>
        </div>
        <div className='flex justify-between mt-6'>
        <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
        <FontAwesomeIcon icon={faLinkedin}  className='text-3xl' />
        <FontAwesomeIcon icon={faFacebook}  className='text-3xl'/>
        <FontAwesomeIcon icon={faInstagram}  className='text-3xl'/>
        </div>
    </div>
    </div>
  )
}

export default Footer
