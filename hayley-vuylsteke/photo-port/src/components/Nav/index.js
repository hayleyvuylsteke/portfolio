import React from "react";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from "../../assets/Hayley_Vuylsteke_Logo.gif";

function Navigation() {

    return (
      <header className="nav">
        <Container>
          <Row>
            <Col className="col-lg-3 col-md-12">
              <h2>
                <a data-testid="link" href="/">
                  <img src={logoImage} className="logo-image" alt="Hayley Vuylsteke" />
                </a>
              </h2>
            </Col>
            <Col className="col-lg-9 col-md-12">
              <Nav variant="pills" className="align-self-end">
                <Nav.Item>
                  <Nav.Link eventKey="about" className="nav-link" href="#about">MEET HAYLEY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="qualifications" className="nav-link" href="#qualifications">SEE HER QUALIFICATIONS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="portfolio" className="nav-link" href="#portfolio">CHECK OUT HER WORK</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contact" href="#contact">GET IN TOUCH</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
  
  export default Navigation;