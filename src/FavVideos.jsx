import React from 'react';
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap'; // Import Row and Col from react-bootstrap
import { Link } from 'react-router-dom';
import './FavVideos.css';

const FavVideos = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Our Favorite Videos</h2>
          <p>Check out some of our favorite performances!</p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Carousel controls={true} indicators={false} interval={null}>
            <Carousel.Item>
              <iframe 
                title="Video 1"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/C1e1osS5z1Q" 
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <iframe 
                title="Video 2"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/DYp4RpcupJA" 
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <iframe 
                title="Video 3"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Huls3eYRszA" 
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Back to Home button */}
      <Row className="my-4">
        <Col className="text-center">
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default FavVideos;
