import React from 'react'
import PortfolioList from '../PortfolioList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Portfolio(props) {

    return (
        <section>
            <Container>
            <Row>
                <Col className="col-12">
                <h1 className="header-purple section-header" id="portfolio">Some of my Work</h1>
            </Col>
                
            </Row>
            <div>
                <p>
                    NEED A STATE ITEM THAT PASSES CATEGORY IN A STATE TO THE PORTFOLIO LIST AS A PROP.
                </p>
            <PortfolioList />
            </div>
            <div>
                <p>
                Check out <a href="/Resume_Hayley_Vuylsteke.pdf">my resume</a>.
                </p>
            </div>
        </Container>
        </section>
    )

}

export default Portfolio