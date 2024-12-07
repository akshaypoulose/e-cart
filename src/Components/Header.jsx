import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
    const wishlistArray =useSelector((state)=>state.Wishlist)
    const cartArray=useSelector((state)=>state.cartList)

    const [show, setshow]=useState(false)
    return (
        <>
            <nav className='bg-violet-900 p-5  text-white justify-between w-full' >
                <div className='md:flex item-center md:px-10 px-5'>

                    <div className='flex w-full'>
                        <Link to={'/'}><h2 className='text-5xl text-white'><FontAwesomeIcon icon={faCartShopping} className='me-3' style={{ color: "#fafafa", }} /> E-Cart</h2></Link>

                        <button onClick={()=>setshow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>
                    </div>

                   { show &&
                    <ul className='flex mt-5 md:hidden '>
                        <li>
                            <Link to={'/Wishlist'}><button className='border border-white p-3 text-white rounded hover:bg-white hover:text-violet-900  '><FontAwesomeIcon className='me-2' icon={faHeart} style={{ color: "#ea1a2f", }} />Wishlist<span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span></button></Link>
                        </li>

                        <li></li>
                        <li>
                            <Link to={'/Cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-3' icon={faCartShopping}  style={{ color: "#1fd65c", }} />Cart<span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span></button></Link>
                        </li>
                    </ul>}





                    <ul className='ms-auto md:flex hidden'>
                        <li>
                            <Link to={'/Wishlist'}><button className='border border-white p-3 text-white rounded hover:bg-white hover:text-violet-900  '><FontAwesomeIcon className='me-2' icon={faHeart} size="sm" style={{ color: "#ea1a2f", }} />Wishlist<span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span></button></Link>
                        </li>

                        <li></li>
                        <li>
                            <Link to={'/Cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-3' icon={faCartShopping} size="sm" style={{ color: "#1fd65c", }} />Cart<span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span></button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header