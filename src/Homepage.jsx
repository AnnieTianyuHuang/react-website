import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
import homeBackground from './assets/homeBackground.jpg'; // Updated import
import logo from './assets/logo.png'; // Import logo image

const Homepage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homeBackground})`, // Using imported image
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <Container fluid style={backgroundStyle} className="text-center">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Title */}
      <div className="title">Noteworthy: A Capella</div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Row className="justify-content-end">
          <Col>
            <Link to="/about"><Button variant="primary">About Us</Button></Link>
          </Col>
          <Col>
            <Link to="/videos"><Button variant="primary">Our Favorite Videos</Button></Link>
          </Col>
          <Col>
            <Link to="/members"><Button variant="primary">Members</Button></Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Homepage;
