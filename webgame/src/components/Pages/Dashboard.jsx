import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Aside from '../Layout/AsidePart/Aside';
import MainPart from '../Layout/MainPart/MainPart';
import NavigationBar from '../Layout/Navigation/NavigationBar';
import Card from '../UI/Card';
const Dashboard = () => {
  return (
    <div>

        <Card>
        <Row className='web-page h-100 text-center'>
          <Col className='navigation d-xxl-block d-md-block d-none  bd-sidebar' xs={0} md={2} lg={2}>
             <NavigationBar />
          </Col>
          <Col className='main-part ' xs={12} md={8} lg={8}>
            <MainPart />
          </Col>
          <Col className= 'aside d-xxl-block d-md-block  '  xs={0} md={2} lg={2}>
             <Aside />
          </Col>
        </Row>
      </Card>

    </div>
  )
}

export default Dashboard
