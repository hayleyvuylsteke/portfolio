import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//import images
import education from '../../assets/school-img.png'
import conEd from '../../assets/continuous-ed.png'
import cert from '../../assets/certification-icon.png'
import marTech from '../../assets/Martech-logos.png'
import tech from '../../assets/tech-logos.png'

function Qualifications() {

    return (
        <section>
        <Container>
            <Row>
                <Col className="col-12">
                <h1 className="header-purple section-header" id="qualifications">Qualifications and Areas of Expertise</h1>
                </Col>
            </Row>
            <Row className="section-spacing">
                <Col className="col-1"/>
                <Col className="col-lg-5 col-md-12">
                <p>
                I’ve gained a lot of experience in my 10 years as a digital marketer. From B2B to B2C, I've worked with organizations of all sizes to strategize, implement and optimize digital marketing programs.
                <br />
                <br />
                Marketing got more technical, so I did too. In 2021, I completed the University of Toronto Full-stack Web Development program to add to my digital capabilities.
                <br />
                <br />
                Click on my areas of expertise to learn more about what I can do for your organization.
                <br />
                <br />
                Still want to know more? Here's <a href="/Resume_Hayley_Vuylsteke.pdf" className="text-link">my resume</a>.
                </p>
                </Col>
                <Col className="col-lg-5 col-md-12">
                    <Accordion className="accordian">
                        <Card className="full-card">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="card-header">
                                    <h5>Marketing Strategy &#8595;</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="card-body">
                                    I have spent time in my career working with both B2B and B2C organizations. 
                                    <br />
                                    <br />
                                    In my time working with B2C organizations, I helped big brands&mdash;AT&amp;T, Sobeys, and Scotiabank&mdash;medium-sized brands&mdash;Bootlegger, Ricki’s and cleo, to small mom and pop shops, strategize, implement and optimize marketing programs. From new iPhone product launch campaigns, to customer acquisition and lifecycle marketing, I have experience in all things B2C.
                                    <br />
                                    <br />
                                    My experience in B2B SaaS tech marketing has given me strategic insights into both account-based strategy and lead-based lead generation strategies. I am proficient at developing strategies targeting specific accounts, and also verticalized lead-based demand generation programs that exceed corporate targets.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="full-card">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="card-header">
                                    <h5>Campaign Execution &#8595;</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="card-body">
                                    Writing? I’ve done it. Webpage building? ✔ Marketing automation platforms? I’m proficient in them. SEO and SEM strategy and execution? Hey, I’ve done that too!
                                    <br />
                                    <br />
                                    I excel at all things campaign execution. I began my career working with marketing automation platforms to execute my client’s digital marketing campaigns. And now, I still use a wide variety of marketing technologies to create best-in-class digital programs.
                                    <br />
                                    <br />
                                    Here are the marketing technologies I'm proficient in:
                                    <img className="accordian-image" src={marTech} alt="Martech Logos" />
                                    From writing and publishing blogs, designing and building marketing automated nurture programs, to implementing an SEO and SEM strategy, my campaign execution experience runs deep.
                                    <ul>
                                        <li>SEO</li>
                                        <li>SEM</li>
                                        <li>Automated Marketing Nurture Campaigns</li>
                                        <li>Marketing Newsletter Programs</li>
                                        <li>Webinars and Virtual Events</li>
                                        <li>Website Building and Maintenance</li>
                                        <li>Blog Writing and Posting</li>
                                        <li>Content Syndication Programs</li>
                                        <li>Website Personalization</li>
                                        <li>Chatbots</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="full-card">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="card-header">
                                    <h5>Measurement and Analytics &#8595;</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="card-body">
                                    If you can’t measure it, is it even worth doing? 
                                    <br/>
                                    <br/>
                                    I’m a firm believer in measuring what matters. One of the key elements of any successful marketing strategy is defining your measurement strategy. I like to take analytics and measurement right from strategizing to reviewing reports and pulling insights to optimizing programs with A/B testing and learnings from data. 
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="full-card">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" className="card-header">
                                    <h5>Full-stack Web Development &#8595;</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="card-body">
                                        Most recently I added full-stack web development to my resume. 
                                        <br />
                                        <br />
                                        I’m proficient in using HTML, CSS, and JavaScript to build both websites and email marketing templates. I work within the MERN stack to develop feature-rich <i>and</i> performant web applications.
                                        <br />
                                        <br />
                                        Here are the languages, libraries, and databases I’m familiar with:
                                        <img className="accordian-image" src={tech} alt="Martech Logos" />
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col className="col-1"/>
            </Row>
            <section className="color-block-purple">
            <Row className="color-block-content">
                <Col>
                    <h2 className="header-turquoise">Education</h2>
                </Col>
            </Row>
            <Row className="color-block-content section-spacing">
                <Col className="col-1"/>
                <Col className="col-lg-3 col-md-12">
                <img className="highlight-icon" src={education} alt="School Icon" />
                <br />
                <br />
                <h5>College</h5>
                    I graduated with an Advanced Diploma from the Business Administration - Marketing program at Conestoga College in 2011.
                </Col>
                <Col className="col-1"/>
                <Col className="col-lg-3 col-md-12">
                <img className="highlight-icon" src={conEd} alt="Continuing Education Icon" />
                <br />
                <br />
                <h5>Continiung Education</h5>
                    In May 2021, I will graduate from the University of Toronto's Full-stack Web Developer Bootcamp program.
                </Col>
                <Col className="col-1"/>
                <Col className="col-lg-3 col-md-12">
                <img className="highlight-icon" src={cert} alt="Certification Icon" />
                <br />
                <br />
                <h5>Certifications</h5>
                    I've earned and am continuing to earn new certifications all of the time. Here are some of my recent certifications:
                    <ul>
                        <li>Drift's Conversational Marketing Certificate</li>
                        <li>Google Analytics Certification</li>
                        <li>ADD UDEMY COURSE</li>
                        <li>ADD UDEMY COURSE</li>
                    </ul>
                </Col>
                <Col className="col-1"/>
            </Row>
        </section>
        </Container>
    </section>

    )
  }
  
  export default Qualifications