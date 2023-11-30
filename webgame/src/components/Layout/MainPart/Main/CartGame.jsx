import React from 'react'

const CartGame = ({sliders}) => {
  return (
    <section className='d-flex m-3 row'>


        {sliders && sliders.map(slide => {
        return <div className='gameCart col mb-2' key={slide.id} style={{
          backgroundImage: `url(${slide.url})`, backgroundPosition: 'center',
          backgroundSize:'cover',backgroundRepeat:'no-repeat'
        }}>
          <div>
            {slide.name}
          </div>
        </div>
      })}


    </section>


  )
}

export default CartGame
