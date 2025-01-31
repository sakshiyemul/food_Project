import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';  // Custom CSS for styling

const About = () => {
  return (
    <div>
      {/* Image Container Section */}
      <div className="image-container">
        <div className="parallax">
          <img
            src="src/assets/about.jpg"
            className="img-fluid full-page-image"
            alt="About Us"
          />
        </div>
        <div className="text-overlay text-center">
          <h1 className="display-4" id='h1-s'>About Swigatto</h1>
         
         
          
          {/* Restaurant description */}
          <p className="restaurant-about" id='h1-s'>
            At Swigatto, we believe in creating memorable dining experiences. Our kitchen blends tradition with creativity to craft mouthwatering dishes using the freshest local ingredients. Whether you're here for a casual meal or a special occasion, we aim to delight you with every bite.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 section-heading">Meet Our Team</h2>
        <Row className="justify-content-center text-center">
          {/* Group Member 1 */}
          <Col md={4} className="mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img
                src="src/assets/sakshi.jpg" // Replace with actual image path
                className="card-img-top rounded-circle mx-auto d-block mt-3"
                alt="Sakshi"
                style={{ width: '200px', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Sakshi Yemul</h5>
                <p className="card-text">
                  As a Frontend Developer, I design responsive, engaging user interfaces that deliver seamless experiences across all devices.
                </p>
              </div>
            </div>
          </Col>

          {/* Group Member 2 */}
          <Col md={4} className="mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img
                src="src/assets/prerana.jpg" // Replace with actual image path
                className="card-img-top rounded-circle mx-auto d-block mt-3"
                alt="Prerana"
                style={{ width: '200px', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Prerana Chavan</h5>
                <p className="card-text">
                  As a Backend Developer, I create robust server-side solutions, ensuring that our platform runs smoothly and efficiently.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Location Section */}
        <Row className="my-5">
          <Col md={6}>
            <h2 className="text-center mb-4 section-heading">Our Location</h2>
            <p className="text-center">
              <strong>Address:</strong> 123 Swigatto Restaurant AhilyaNagar, Maharashtra ,India
            </p>
            <p className="text-center">
              <strong>Phone:</strong> +91 883 678 4526
            </p>
            <p className="text-center">
              <strong>Working Hours:</strong> 9:00 AM - 11:00 PM (Mon-Sun)
            </p>
          </Col>
          <Col md={6}>
            {/* Google Maps Embed */}
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=..." // Replace with your actual Google Maps Embed link
              width="100%"
              height="300"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
