import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RSVPForm from './RSVPForm';
import Gallery from './Gallery';
import Maps from './Maps';
import Details from './Details';
import FAQ from './FAQ';

const Content = () => {
  return (
    <section className="py-3 shadow-sm content-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={12} > 
            <Row className=''>
              <Col md={4} className="text-center text-md-start">
                <Details/>
              </Col>
              <Col md={4} className="text-center text-md-start">
                <FAQ/>
              </Col>
              <Col md={4} className="text-center text-md-start">
              <RSVPForm/>
            </Col>
            </Row>
          </Col>
        
         
        </Row>
      </Container>
    </section>
  );
};

export default Content;
