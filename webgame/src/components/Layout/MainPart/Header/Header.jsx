import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';
import SearchBox from './SearchBox';
import Time from './Time';
const Header = () => {
  return (
    <header className='header'>
      <Row className='justify-content-around'>
        <Col xs={2} className='icon d-lg-non d-md-none d-sm-block'>
          <HamburgerMenu />
        </Col>
        <Col xs={10} md={9} lg={10}>
          <SearchBox />
        </Col>
        <Col xs={0} md={3} lg={2} className=' d-xxl-block d-md-block d-none '>
          <Time />
        </Col>
      </Row>
    </header>
  )
}

export default Header
