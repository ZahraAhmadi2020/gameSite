import React from 'react';
import '../Main/Main.css';
import SlideImg from './SlideImg';

import CallOfDuty from '../../../../assets/CallOfDuty.jpeg';
import CallOfWarZone from '../../../../assets/WarZone.jpeg';
import Apex from '../../../../assets/apex.jpeg';
import Battles from './Battles';
import CartGame from './CartGame';
 const imageGallery = [
  {
    id: 1,
    url:CallOfDuty,
    name: 'callofduty',

},
  {
    id: 2,
    url:CallOfWarZone,
    name:'callofduty'
},
  {
    id: 3,
    url: Apex,
    name:'apex'
}
]
const Main = () => {
  return (
    <div>
      <SlideImg sliders={imageGallery} />
      <CartGame sliders={imageGallery} />
      <Battles/>


    </div>
  )
}

export default Main
