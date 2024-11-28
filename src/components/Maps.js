import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';
// import QRCodeMap from './QRCodeMap';


const Maps = () => {

    const maps = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5453986876638!2d121.03433053868564!3d14.635313366014515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7ad47a5aff1%3A0xf318c7de982c502a!2sLuxent%20Hotel!5e0!3m2!1sen!2sph!4v1732779744450!5m2!1sen!2sph';

  return (
        <div className='maps-section'>
        <Row className="justify-content-center margin-top-10">
            <Col md={12} className="text-center">
            <h1 className="global-title-template h1-title"> Getting There </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={12} className="text-center justify-content-center">
                <Card className="shadow-lg p-4">
                    <Card.Body>
                        <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                            src={maps}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                            className="maps-section"
                            ></iframe>
                        </div>
                        <br/>
                        <a href = "https://maps.app.goo.gl/cRAD7BDUT4XHPFSD9" target="_blank" className = "text-align-justify" ><Button className='button-design'> Get Direction </Button></a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
        </div>
  );
};

export default Maps;
