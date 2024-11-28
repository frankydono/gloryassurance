import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const RSVPForm = () => {

  return (
        <div className='rsvp-section'>
        <Row className="justify-content-center margin-top-10">
            <Col md={12} className="text-center">
            <h1 className="global-title-template h1-title"> RSVP </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={12} className="text-center justify-content-center">
                <div className="form-container">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Google Form"
                        className="form-section"
                    >
                    </iframe>
                </div>
            </Col>
            
        </Row>
        </div>
  );
};

export default RSVPForm;
