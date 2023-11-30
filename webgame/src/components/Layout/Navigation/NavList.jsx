import React from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { FaHome, FaWallet } from 'react-icons/fa';
import { GiBattleTank, GiReceiveMoney } from 'react-icons/gi';
import Profile from '../../Pages/Profile';
const NavList = () => {
  // const { showNavbar,close } = useContext(UseContextProvider)
  return (
     <nav className='sidebar text-center mt-4 '>
      <ul>
          <li className='w-100 m-0  pb-2'><a><FaHome className='icon me-4' />Home</a></li>
         <li className='w-100 m-0  pb-2'> <Profile/></li>

          <li className='w-100 m-0  pb-2'><a><BiStore className='icon me-4' />Store</a></li>
          <li className='w-100 m-0  pb-2'> <a><GiBattleTank className='icon me-4' />Battle</a></li>

        <li className='dropdown dropHover w-100 m-0  pb-2'> <a><FaWallet className='icon me-4' />Wallet</a>
          <ul className='dropped'>
            <li><a><GiReceiveMoney className='deposit icon me-3' />Deposit</a></li>
          </ul></li>
        <li className='w-100 m-0  pb-2'> <a><AiOutlineTeam className='icon me-3' />Team</a></li>
      </ul>
    </nav>
  )
}

export default NavList
