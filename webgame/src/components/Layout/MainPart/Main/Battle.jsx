import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
const Battle = ({lastBattle}) => {
  return (
    <div>
      {lastBattle && lastBattle.map(battle => {
          return <div key={battle.id} className='battle-box d-flex my-2'>
            <BsPersonCircle className='battle-icon m-3'/>
            <p className='battle-p m-3'>{battle.name}</p>
            <img className='battleImg ' src={battle.url} />
          </div>
        })}
      </div>
  )
}

export default Battle
