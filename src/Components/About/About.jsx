import React from 'react';
import './About.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const aboutData = [
    {
      id: 1,
      title: 'Our Mission',
      description:
        'To provide world-class travel experiences that create lasting memories. We strive to make every journey special and meaningful.',
    },
    {
      id: 2,
      title: 'Our Vision',
      description:
        'To be a global leader in the travel industry, offering innovative and sustainable travel solutions.',
    },
    {
      id: 3,
      title: 'Our Values',
      description:
        'Integrity, customer satisfaction, and a passion for travel drive everything we do. We believe in creating value for our customers and partners.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <Container className="my-5">
        <h2 className="text-center mb-4">About Us</h2>
        <Row className="g-4">
          {aboutData.map((section) => (
            <Col key={section.id} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center mb-3">
                    {section.title}
                  </Card.Title>
                  <Card.Text>{section.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
