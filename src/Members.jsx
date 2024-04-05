import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Members.css'; // Import custom CSS for styling

import EddieImage from './assets/Eddie.png';
import EllingtonImage from './assets/Ellington.png';
import AthenaImage from './assets/Athena.png';
import BhaskarImage from './assets/Bhaskar.png';
import TomImage from './assets/Tom.png';
import StephanusImage from './assets/Stephanus.png';

const Members = () => {
  return (
    <Container className="members-container">
      <h2 className="members-header">Members</h2>
      
      {/* Eddie Cekici */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={EddieImage} alt="Eddie Cekici" />
            </div>
            <div className="member-info">
              <h3>Eddie Cekici</h3>
              <p>Co-Business Manager</p>
              <p>Voice Part: Bass</p>
              <p>Semester in Noteworthy: 6th</p>
              <p>Semester in Berkeley: 8th</p>
              <p>Major: Chemical Biology, Minor: Statistics</p>
              <p>Interests: being Albanian, Gipsy Kings, olive oil, outer wilds, Jon Bois</p>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Ellington Chen */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={EllingtonImage} alt="Ellington Chen" />
            </div>
            <div className="member-info">
              <h3>Ellington Chen</h3>
              <p>Co-Music Manager</p>
              <p>Voice Part: Baritone</p>
              <p>Semester in Noteworthy: 4th</p>
              <p>Semester in Berkeley: 4th</p>
              <p>Major: 😭😭😭😭😭😭😭</p>
              <p>Interests: Singing, dancing, singing and dancing, singing but not dancing</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Athena Liu */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={AthenaImage} alt="Athena Liu" />
            </div>
            <div className="member-info">
              <h3>Athena Liu</h3>
              <p>Co-Music Manager</p>
              <p>Voice Part: Tenor 1</p>
              <p>Semester in Noteworthy: 2nd</p>
              <p>Semester in Berkeley: 2nd</p>
              <p>Major: Undeclared (intended CoC transfer)</p>
              <p>Interests: music, gay little TV shows, nature walks, alliums, head scritches</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Bhaskar Roberts */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={BhaskarImage} alt="Bhaskar Roberts" />
            </div>
            <div className="member-info">
              <h3>Bhaskar Roberts</h3>
              <p>Co-Business Manager</p>
              <p>Voice Part: Tenor 2</p>
              <p>Semester in Noteworthy: 3rd</p>
              <p>Semester in Berkeley: 8th</p>
              <p>Major: Computer Science</p>
              <p>Interests: Dropping out of school to try and make it on Broadway</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Tom Guan */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={TomImage} alt="Tom Guan" />
            </div>
            <div className="member-info">
              <h3>Tom Guan</h3>
              <p>Retired</p>
              <p>Voice Part: Baritone</p>
              <p>Semester in Noteworthy: 4th</p>
              <p>Semester in Berkeley: 8th</p>
              <p>Major: Psychology, Minor: Health and Wellness</p>
              <p>Interests: singing, being the oldest young person in noteworthy</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Stephanus Yang */}
      <Row className="member-row">
        <Col xs={12} md={6}>
          <div className="member-card">
            <div className="member-img">
              <img src={StephanusImage} alt="Stephanus Yang" />
            </div>
            <div className="member-info">
              <h3>Stephanus Yang</h3>
              <p>Voice Part: Tenor 2</p>
              <p>Semester in Noteworthy: 4th</p>
              <p>Semester in Berkeley: 4th</p>
              <p>Major: Chemistry</p>
              <p>Interests: chemistry, the college of chemistry, CoC, chemical compounds</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Back to Home button */}
      <Row className="my-4">
        <Col className="text-center">
          <Link to="/">
            <Button variant="secondary" className="back-to-home-btn">Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
