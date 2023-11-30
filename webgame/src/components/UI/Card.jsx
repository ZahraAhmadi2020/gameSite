import React from 'react'
import '../UI/Card.css'

const Card = (props) => {
  return (
    <div className='my-card container'>{props.children}</div>
  )
}

export default Card
