import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card  } from 'react-bootstrap';


const Details = () => {

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
                        <p className='text-align-left  margin-top-neg'>* Networking opportunities with fellow pioneers and leaders.</p>
                        <p className='text-align-left font-size-p font-style-italics '><span>Event Details:</span></p>
                        <p className='text-align-left '>📅 Date: <span> December 14th & 15th</span></p>
                        <p className='text-align-left margin-top-neg'>📍 Location: <span>Venue Name TBC</span></p>
                        <p className='text-align-left  margin-top-neg'>⏰  Time: <span>TBC</span></p>
                        <p className='text-align-left font-style-italics'>RSVP Now to Reserve Your Spot!</p>

                        <p className='text-align-left font-style-italics'>This event is by invitation only, and seats are limited. Don’t miss this chance to be part of this milestone event.</p>

                        <p className='text-align-left'>We look forward to seeing you there</p>
                    </Card.Body>
             </Card>
            </Col>
        </Row>
        </div>
  );
};

export default Details;
