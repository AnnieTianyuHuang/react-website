// AboutUsPage.jsx
import React from 'react';
import { Container, Row, Col, Carousel, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Make sure this file exists and contains your CSS styles
import flyer1Image from './assets/flyer1.jpg'; // Update these paths if necessary
import flyer2Image from './assets/flyer2.jpg';
import SFCityHallImage from './assets/SFCityHall.jpg'; // Make sure this image is in your assets folder
import instagramImage from './assets/instagram.jpeg'; // Make sure this image is in your assets folder
import youtubeImage from './assets/youtube.jpeg'; // Make sure this image is in your assets folder
import facebookImage from './assets/facebook.png'; // Make sure this image is in your assets folder
import tiktokImage from './assets/tiktok.png'; // Make sure this image is in your assets folder

const AboutUsPage = () => {
  return (
    <Container>
      {/* Introductory text */}
      <Row className="my-4">
        <Col xs={12}>
          <h2>About Us: Noteworthy</h2>
          <p>We're an all-inclusive lower-voices a cappella group known for our fun performances and original music!</p>
          <p>Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed for Cal Athletics and at UC Berkeley's 2022 commencement!</p>
        </Col>
      </Row>

      {/* Events carousel */}
      <Row className="my-4">
        <Col md={12}>
          <h3>Events</h3>
          <Carousel controls={true} indicators={false} interval={null}>
            <Carousel.Item>
              <img src={flyer1Image} alt="First flyer" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={flyer2Image} alt="Second flyer" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Hire Us section */}
      <Row className="my-4">
        <Col md={6}>
          <h3>Hire Us</h3>
          <p>If you're interested in hiring us for a performance, please contact our business manager at <a href="mailto:noteworthy@ucchoral.berkeley.edu">noteworthy@ucchoral.berkeley.edu</a>.</p>
          {/* SF City Hall image */}
          <img src={SFCityHallImage} alt="Noteworthy at SF City Hall" className="img-fluid" />
        </Col>

        {/* Follow Us section */}
        <Col md={6}>
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/cal_noteworthy/" target="_blank" rel="noopener noreferrer">
              <Image src={instagramImage} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank" rel="noopener noreferrer">
              <Image src={youtubeImage} alt="YouTube" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/Noteworthy" target="_blank" rel="noopener noreferrer">
              <Image src={facebookImage} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@uc_noteworthy" target="_blank" rel="noopener noreferrer">
              <Image src={tiktokImage} alt="TikTok" className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>

      {/* Back to Home button */}
      <Row className="my-4">
        <Col xs={12} className="text-center">
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
