import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card,Button  } from 'react-bootstrap';


const Details = () => {

  const maps = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5453986876638!2d121.03433053868564!3d14.635313366014515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7ad47a5aff1%3A0xf318c7de982c502a!2sLuxent%20Hotel!5e0!3m2!1sen!2sph!4v1732779744450!5m2!1sen!2sph';

  return (
       <div className='details-section'>
        <Row className="justify-content-center margin-top-10">
            <Col md={12} className="text-center justify-content-center">
            <Card className="p-4 shadow-lg">
                    <Card.Body>
                        <h1 className="global-title-template h1-title"> You're Invited! </h1>
                        <p className='text-align-justify'>We are thrilled to announce that our CEO will be visiting the Philippines on <span>December 14th and 15th</span> for an exclusive Meet & Greet with our Pioneers. This is a rare and exciting opportunity to connect with the visionary leader behind our company and gain valuable insights into the future of our business.</p>
                        <p className='text-align-left font-size-p font-style-italics'><span>Event Highlights:</span></p>
                        <p className='text-align-left '>* Inspiring messages from our <span>CEO Mr. James Chen</span> and Global Marketing <span>Director Mr Steven Huat</span>.</p>
                        <p className='text-align-left  margin-top-neg'>* Exclusive updates and plans for the company’s growth in Asia.</p>
                        <p className='text-align-left font-size-p font-style-italics '><span>Event Details:</span></p>
                        <p className='text-align-left '>📅 Date: <span> December 14th & 15th</span></p>
                        <p className='text-align-left margin-top-neg'>📍 Location: <span>Venue Name TBC</span></p>
                        <p className='text-align-left  margin-top-neg'>⏰  Time: <span>TBC</span></p>
                        <p className='text-align-left font-style-italics'>RSVP Now to Reserve Your Spot!</p>

                        <p className='text-align-left font-style-italics'>This event is by invitation only, and seats are limited. Don’t miss this chance to be part of this milestone event.</p>

                        <p className='text-align-left'>We look forward to seeing you there</p>

                        <br/>

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

export default Details;
