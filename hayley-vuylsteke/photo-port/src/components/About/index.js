import React from 'react'

import AboutCarousel from '../AboutCarousel'

//import bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import images
import headShot from '../../assets/hayley-headshot-animated.gif'
import digitalMarketingIcon from '../../assets/digital-marketing-icon.png'
import funnelIcon from '../../assets/funnel-icon.png'
import gearIcon from '../../assets/gear-icon.png'
import webDevIcon from '../../assets/web-dev-icon.png'
import managingIcon from '../../assets/managing-icon.png'
import valuesPassions from '../../assets/values-passions.gif'

function About() {

    return (
      <section>
        <Container>
            <Row>
                <Col className="col-12">
                <h1 className="header-purple section-header" id="about">She Strategizes. She Codes. She Creates.</h1>
                </Col>
                
            </Row>
            <Row className="section-spacing">
            <Col className="col-1"/>
                <Col className="col-lg-4 col-md-12 white-background-copy">            
                <p>
                I have spent my career diving deeper and deeper into the world of digital. 
                <br />
                <br />
                I started out at a digital marketing agency where I helped B2B and B2C clients alike strategize, create and execute digital marketing campaigns that drove results. 
                <br />
                <br />
                After 7 years, I decided to take my skills to a new organization: a tech startup in the heart of Waterloo. Here I dove deeper into SaaS tech marketing -- focusing my successes on account-based marketing strategy and execution as well as overall digital marketing strategy and execution. 
                <br />
                <br />
                The world is getting more technical, and marketing is no exception. So, in the middle of the pandemic, I decided it was time for me to get more technical too.
                <br />
                <br />
                Enter the University of Toronto Coding Bootcamp.
                <br />
                <br />
                To further my skills and abilities as a digital marketer, I began a journey to become a full-stack web developer (on top of a 40-hour workweek and becoming an interm kindergarten teacher). 
                </p>
                </Col>
                <Col className="col-1"/>
                <Col className="col-lg-5 col-md-12">
                    <img className="head-shot" src={headShot} alt="Hayley Vuylsteke" />
                </Col>
                <Col className="col-1"/>
            </Row>
            <section className="color-block-purple">
            <Row className="color-block-content">
                <Col>
                    <h2 className="header-turquoise">The Highlight Reel</h2>
                </Col>
            </Row>
            <Row className="color-block-content section-spacing">
                <Col className="col-1" />
                <Col className="col-lg-2 col-md-12">
                <img className="highlight-icon" src={digitalMarketingIcon} alt="Digital Marketing Icon" />
                <br />
                <br />
                10 years of experience in digital marketing
                </Col>
                <Col className="col-lg-2 col-md-12">
                <img className="highlight-icon" src={webDevIcon} alt="Web Icon" />
                <br />
                <br />
                Full-stack web developer proficient in HTML, CSS, and JavaScript
                </Col>
                <Col className="col-lg-2 col-md-12">
                <img className="highlight-icon" src={funnelIcon} alt="Funnel Icon" />
                <br />
                <br />
                Passionate about creating and implementing high-performing lead generation programs using an account-based strategy.
                </Col>
                <Col className="col-lg-2 col-md-12">
                <img className="highlight-icon" src={gearIcon} alt="Gear Icon" />
                <br />
                <br />
                An analytical thinker who excels at reviewing data and tweaking marketing programs to boost success
                </Col>
                <Col className="col-lg-2 col-md-12">
                <img className="highlight-icon" src={managingIcon} alt="Digital Marketing Icon" />
                <br />
                <br />
                Experience managing internal stakeholders, external vendors, and multiple marketing campaigns at once.
                </Col>
                <Col className="col-1" />
            </Row>
            </section>
            <Row>
                <Col>
                    <h2 className="header-purple">Values and Passions</h2>
                </Col>
            </Row>
            <Row className="section-spacing">
                <Col className="col-1" />
                <Col className="col-lg-5 col-md-12">
                <img className="head-shot" src={valuesPassions} alt="Values and Passions icon" />
                </Col>
                <Col className="col-lg-5 col-md-12">
                <h5 className="header-almostBlack">Being Bold</h5>
                <p>
                I like to try new things and take on new challenges, without fear of failure. Because failure is sometimes what teaches us the best lessons #amiright?! Being challenged is what motivates me to succeed. 
                </p>
                <h5 className="header-almostBlack">Continuous Learning</h5>
                <p>
                I love to learn new things. Whether it’s a new technology I’m learning at work, a new coding language or even learning how to complete new projects around the house, if I’m not engaging my mind in a new way I won’t be fully satisfied. 
                </p>
                <h5 className="header-almostBlack">Collaborating</h5>
                <p>
                One of my favourite things to do is work with people. Getting a bunch of bright minds together around a whiteboard (or present-day on a Zoom call) can lead to the best ideas and most successful strategies.   
                </p>
                <h5 className="header-almostBlack">Getting it Done</h5>
                <p>
                I excel in a fast-paced environment where there are more tasks to complete than hours in the day. 
                </p>
                <h5 className="header-almostBlack">Analyzing and Iterating</h5>
                <p>
                If you can’t measure it, you won’t know it’s working. I love looking at data, finding trends and opportunities for improvements and A/B tests on programs that are in-market. One of the reasons I’ve been drawn to a career in digital marketing is the amount of analytics data you have to work with and use to better your efforts.
                </p>
                </Col>
                <Col className="col-1" />
            </Row>
            <section className="color-block-purple">
            <Row className="color-block-content">
                <Col>
                    <h2 className="header-turquoise">On a More Personal Level</h2>
                </Col>
            </Row>
            <Row className="color-block-content section-spacing">
                <Col className="col-1"/>
                <Col className="col-lg-6 col-md-12">
                <p>
                When I’m not behind my computer, you can find me with my sweet family, chasing around my (soon-to-be) 3 busy-bodied tiny humans, catching a yoga class, on my spin bike or outside putting some miles on my Asics.
                <br />
                <br />
                I’m a lover of travel and exploring new places (except this pandemic has really put a damper on that). 
                <br />
                <br />
                My partner and I are avid DIY’ers who love taking on new projects--whether it’s building a new piece of furniture or renovating an entire house. 
                </p>
                </Col>
                <Col className="col-lg-4 col-md-12">
                   <AboutCarousel />
                </Col>
                <Col className="col-1"/>
            </Row>
            </section>
        </Container>
    </section>

    )
  }
  
  export default About