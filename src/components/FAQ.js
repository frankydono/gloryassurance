import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';




const FAQ = () => {
 
  const faqData = [
    {
        question: '1. What is the purpose of this event?',
        answer: "This event is a special opportunity to meet our CEO and Global Marketing Director, gain exclusive insights into the company's vision, and celebrate the achievements of our pioneering leaders in the Philippines.",
    },
    {
        question: '2. When and where is the event?',
        answer: "",
    },
    {
        question: '3. Who can attend the event?',
        answer: 'The event is by invitation only and is open to pioneers, leaders, and special guests who have received an RSVP invitation.',
    },
    {
        question: '4. How can I RSVP for the event?',
        answer: 'You can RSVP through our dedicated event page. Be sure to secure your spot as seats are limited.',
    },
    {
        question: '5. Is there a fee to attend?',
        answer: "No, the event is free of charge. However, attendees will need to cover their own transportation and accommodation costs if traveling from outside the city.",
    },
    {
        question: '6. What should I bring to the event?',
        answer: 'Bring a valid ID for registration, your GA ID number and username, your confirmation email or RSVP ticket, and a notepad for taking notes during the sessions.',
    },
    {
        question: '7.  Can I bring a guest?',
        answer: 'This event is invitation-only. If you’d like to request a guest invitation, please contact us directly, and we’ll confirm availability.',
    },
    {
        question: '8. Will meals be provided?',
        answer: "Light refreshments will be served.",
    },
    {
        question: '9. What if I can’t attend in person?',
        answer: 'If you’re unable to attend, stay tuned for updates from the event, which will be shared via our official communication channels (FB messenger, WhatsApp & Telegram)',
    },
    {
        question: '10. Is there a dress code for the event?',
        answer: 'Yes, the dress code is business casual.',
    },
    
    
  ];

  return (
    <div className='faq-section'>
        <Row className="justify-content-center margin-top-10">
            <Col md={12} className="text-center">
            <h1 className="global-title-template h1-title"> Frequently Asked Question </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
           
            <Col md={12} className="text-center">
                <Accordion defaultActiveKey="0" className="faq-accordion">
                    {faqData.map((faq, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>
                        {/* Conditional list rendering for index 2 */}
                        {index === 1 ? (
                            <div>
                                {/* <div className="text-align-left font-agradir font-size-15">
                                    {faq.answer}
                                </div> */}
                                <p className ="margin-top-20 "></p>
                                <p className ="font-opens-sans">Date: December 14th & 15th, 2024</p>
                                <p className ="font-opens-sans">Location: [Venue Name/To Be Announced]</p>
                                <p className ="font-opens-sans">Time: [Exact Time/To Be Announced]</p>
                            </div>
                            ) : (
                            <div className="text-align-left font-opens-sans font-size-15">
                                {faq.answer}
                            </div>
                        )}

                        

                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
            </Col>
            </Row>
            <Row className="justify-content-center margin-top-3rem">
                <Col md={12} className="text-center">
                    <p> If you have further questions, feel free to contact us at [Conntact Info]. We look forward to seeing you there!</p>
                </Col>
            </Row>
           
    </div>
  );
};

export default FAQ;
