import React from 'react'
import '../Navigation/NavigationBar.css'
import GameList from './GameList'
import HeaderNavSide from './HeaderNavSide'
import NavList from './NavList'
import SignoutButton from './SignoutButton'
const NavigationBar = () => {
  return (
    <div className='navside '>
      <HeaderNavSide />
      <NavList />
      <GameList />
      <SignoutButton/>
    </div>
  )
}

export default NavigationBar
