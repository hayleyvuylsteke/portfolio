import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {

    return (
        <section className="section-block-purple">
            <Container>
            <Row className="section-block-content">
                <Col>
                    <h1 className="header-turquoise" id="contact">Let's get in touch!</h1>
                </Col>
            </Row>
            <Row className="section-block-content">
                <Col className="col-1" />
                <Col className="col-5">
                I’m always open to a chat about an opportunity to work together or just life in general. Let’s grab a coffee or a glass of wine.
                </Col>
                <Col className="col-5">
                FORM
                </Col>
                <Col className="col-1" />
            </Row>
        </Container>
    </section>
    )
}

export default Contact