import React from 'react';
import CallOfDuty from '../../../assets/CallOfDuty.jpeg';
import CallOfWarZone from '../../../assets/WarZone.jpeg';
import Apex from '../../../assets/apex.jpeg';
const GameList = () => {

  return (
    <div className='game-list text-center '>
      <div className='game d-flex mb-3'>
        <img className='game-img ' src={CallOfDuty} alt='Call of Duty' />
         <a href='/'  className='a-text  ps-2 pt-3'>Call of Duty Mobile</a>
      </div>
      <div className='game d-flex mb-3'>
        <img className='game-img    ' src={CallOfWarZone} alt='Call of War Zone' />
        <a href='/' className='a-text ps-2 pt-3'>Call of WAR ZONE</a>
      </div>
      <div className='game d-flex mb-3 '>
         <img className='game-img    ' src={Apex} alt='Apex' />
          <a href='/' className='a-text ps-2 pt-3'>Apex</a>
      </div>

    </div>
  )
}

export default GameList
