import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Apex from '../../../../assets/Apex.png';
import Callof from '../../../../assets/Callof.png';
import popjy from '../../../../assets/popjy.jpeg';
import Battle from './Battle';
const lastBattle = [
  {
    id: 1,
    url:popjy,
    name: 'popg',

},
  {
    id: 2,
    url:Callof,
    name:'callofduty'
},
  {
    id: 3,
    url: Apex,
    name:'apex'
}
]


const Battles = () => {

  return (
    <section className='battle d-flex mt-4'>
      <Row>
         <Col className='m-1'  >
        <h6 className='title'>LastBattle</h6>
        <Battle lastBattle={lastBattle} />
      </Col>
      <Col className='m-1' xs={12} lg={4} md={6} >
        <h6 className='title'>LiveBattle</h6>
        <Battle lastBattle={lastBattle} />
      </Col>
      <Col className='m-1'   >
        <h6 className='title'>Future Battle</h6>
        <Battle lastBattle={lastBattle} />
      </Col>
     </Row>

    </section>
  )
}

export default Battles
