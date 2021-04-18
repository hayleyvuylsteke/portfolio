import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Importing Images
import gitHub from '../../assets/github-logo.png'
import linkedIn from '../../assets/li-logo.png'
import email from '../../assets/em-logo.png'
import logo from '../../assets/hayley-logo-static.png'

function Footer() {

    return (
        <section className="section-block-purple">
            <Row>
                <Col className="col-12 divider" />
            </Row>
        <section className="section-block-purple">
            <Container>
            <Row className="section-block-content">
                <Col className="col-6">
                    <img className="hayley-logo-footer" src={logo} alt="Hayley Vuylsteke" />
                </Col>
                <Col className="col-3" />
                <Col className="col-3">
                    <a href="https://github.com/hayleyvuylsteke">
                    <img className="footer-logo" src={gitHub} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hayley-vuylsteke-a1b4b922/">
                    <img className="footer-logo" src={linkedIn} alt="LinkedIn" />
                    </a>
                    <a href="mailto:hayleyvuylsteke@gmail.com">
                    <img className="footer-logo" src={email} alt="Email" />
                    </a>
                </Col>
            </Row>
            </Container>
        </section>
        </section>
    )

}

export default Footer