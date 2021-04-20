import React, { useState } from 'react';
import PortfolioItems from '../PortfolioItems'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


function Portfolio(props) {
    const [categories] = useState([{name: 'Full-stack Development'}, {name:'Marketing'}])

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <section>
            <Container>
            <Row>
                <Col className="col-12 portfolio-card">
                <h1 className="header-purple section-header" id="portfolio">Some of my Work</h1>
            </Col>
                
            </Row>
            <div>
                <p>
                    I've been working on a lot of cool projects lately. Check out the full-stack development projects that I've created during my time at the University of Toronto. Or, if you're more interested in seeing some of my freelance and corporate work, check out my marketing projects.
                    <br />
                    <br />
                </p>
               {categories.map((category) => (
                    <Button className="portfolio-button" key={category.name} ><span onClick={() => {setCurrentCategory(category);}}>{category.name}</span></Button>
                )
               )}
            <PortfolioItems category = {currentCategory.name} />
            </div>
        </Container>
        </section>
    )

}

export default Portfolio