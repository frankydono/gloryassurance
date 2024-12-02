import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eguls from '../assets/images/logoo.jpg';

const Header = () => {
  return (
    <header className=" py-4 shadow-m header">
      <Container>
        <Row className="align-items-center">
          <Col md={2}></Col>
          <Col md={8} className="text-center">
            <img
              src={eguls} // Replace with your logo path
              alt="Logo"
              style={{ maxWidth: '15rem', height: 'auto' }} // Responsive logo styling
            />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
