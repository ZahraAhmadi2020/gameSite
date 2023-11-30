import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
const CartProfile = () => {
  return (
    <div className='cart-profile'>
      <div className='cart-icon'>
        <MdOutlinePersonOutline/>
      </div>
      <div >
        <span className='d-block'>Your Name</span>
        <span className='d-block'>Your Email</span>
      </div>
      <div className='mt-3'>
        <Link className='cart-btn' to='/profile/userProfile'>View Profile</Link>
      </div>
      <div className='cart-link'>
        <div>
          <AiOutlineSetting />
          <span className='ms-2'>Setting</span>
        </div>
        <div className='d-flex'>
          <VscSignOut className='mt-3'/>
          <a href='#' className='p-0 ms-2 mt-3'>Sign out</a>
        </div>
      </div>

    </div>
  )
}

export default CartProfile
