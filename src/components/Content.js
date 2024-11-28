import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RSVPForm from './RSVPForm';
import Gallery from './Gallery';
import Maps from './Maps';
import Details from './Details';

const Content = () => {
  return (
    <section className="py-3 shadow-sm content-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={8} > 
            <Row className=''>
              <Col md={6} className="text-center text-md-start">
                <Details/>
              </Col>
              <Col md={6} className="text-center text-md-start">
                <Maps/>
              </Col>
            </Row>
          </Col>
        
          <Col md={4} className="text-center text-md-start">
             <RSVPForm/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
