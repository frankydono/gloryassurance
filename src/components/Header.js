import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eguls from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className=" py-4 shadow-m header">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <img
              src={eguls} // Replace with your logo path
              alt="Logo"
              style={{ maxWidth: '180px', height: 'auto' }} // Responsive logo styling
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
