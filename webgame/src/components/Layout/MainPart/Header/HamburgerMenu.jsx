import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { GiBattleTank, GiHamburgerMenu } from 'react-icons/gi';
import { UseContext } from '../../../../store/UseContext';
const HamburgerMenu = () => {
  const { showNavbar,close } = useContext(UseContext)


  return (
    <div>
      <GiHamburgerMenu className='h-menu' onClick={showNavbar} />
      <nav id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={close} >
           <AiOutlineCloseCircle  className="closebtn" onClick={close} />
        </div>
        <div className='d-flex mb-2 ms-3'>
          <FaHome className='h-icon'/>
            <a >Home</a>
        </div>
        <div className='d-flex mb-2 ms-3'>
          <CgProfile className='h-icon' />
           <a >Profile</a>
        </div>
        <div className='d-flex mb-2 ms-3'>
          <BiStore className='h-icon'/>
           <a >Store</a>
        </div>
        <div className='d-flex mb-2 ms-3'>
          <GiBattleTank className='h-icon'/>
           <a >Battle</a>
        </div>
      </nav>
    </div>
  )
}

export default HamburgerMenu
