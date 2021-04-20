import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';


function PortfolioItem({ category }) {

    const [portfolioItems] = useState([
        {
          name: 'Reward Bank',
          category: 'Full-stack Development',
          description: 'Ready to take your childs allowance cashless? Enter Reward Bank. Turning kids into super (well-behaved) kids since 2021',
          image: '/reward-bank.png',
          githubUrl: 'https://google.com',
          deployedURL: 'https://google.com'
        },
        {
        name: 'Date Conceirge',
        category: 'Full-stack Development',
        description: 'Dating sucks. Let Date Conceirge make it suck less. We ll take the planning off your hands.',
        image: '/date-conceirge.png',
        githubUrl: 'https://google.com',
        deployedURL: 'https://google.com'
        },
        {
        name: 'She Talks Tech',
        category: 'Full-stack Development',
        description: 'The tech industry is domindated by men. She Talks Tech is a safe space for all the femme coders to connect, network and learn.',
        image: '/she-talks-tech-lg.png',
        githubUrl: 'https://google.com',
        deployedURL: 'https://google.com'
      },
      {
        name: 'Budget Tracker',
        category: 'Full-stack Development',
        description: 'For the avid traveler, track your purchases and deposits while your away without the worry of internet connectivity.',
        image: '/budget-tracker.png',
        githubUrl: 'https://google.com',
        deployedURL: 'https://google.com'
      },
      {
        name: 'Note Taker',
        category: 'Full-stack Development',
        description: 'Need a space to keep track of your thoughts, feelings and to-do list? Note Taker is here to help.',
        image: '/note-taker.png',
        githubUrl: 'https://google.com',
        deployedURL: 'https://google.com'
      },
      {
        name: 'Weather Dashboard',
        category: 'Full-stack Development',
        description: 'A place to keep up to date with the weather forecast. Check out Weather Dashboard.',
        image: '/weather-dashboard.png',
        githubUrl: 'https://google.com',
        deployedURL: 'https://google.com'
      },
      {
        name: 'South Coast Osteopathy',
        category: 'Marketing',
        description: 'A freelance website built on Wix, satisfying all of the clients requests. Copy, imagery and web design done by yours truly.',
        image: '/s-c-o.png',
        deployedURL: 'https://google.com'
      },
      {
        name: 'Axonify Grocery Blog',
        category: 'Marketing',
        description: 'If the pandemic taught us one thing, its that our grocery associates are superheros. Check out my (ghost-written) blog to see what we can all learn from grocers.',
        image: '/Grocery-blog.png',
        deployedURL: 'https://axonify.com/blog/building-a-resilient-workforce-6-lessons-we-can-learn-from-grocers/'
      },
      {
        name: 'Axonify Retail Blog',
        category: 'Marketing',
        description: 'The right training and commnications platform can keep retail moving. In this (ghost-written) blog by me, I share how.',
        image: '/retail-blog.png',
        deployedURL: 'https://axonify.com/blog/how-the-right-training-and-communications-keeps-retail-moving/'
      },
      ]);

      const currentPortfolio = portfolioItems.filter((item) => item.category === category);

    return (
        <Row className="section-spacing">
            {currentPortfolio.map((item) => (
            <Col key={item.name} className="portfolio-col col-lg-4 col-md-12">
            <Card className="portfolio-card">
                <Img className="portfolio-img" variant="top" src={item.image} alt="{item.name}" key="{item.name}"/>
                {console.log(item.image)}
                <Card.Body>
                    <Card.Title className="portfolio-title">{item.name}</Card.Title>
                        <Card.Text className="portfolio-text">
                            {item.description}
                        </Card.Text>
                    <Button variant="primary" className="portfolio-button" a href={item.deployedURL}>CHECK IT OUT</Button>
                    {item && item.githubUrl ?  <Button variant="primary" className="portfolio-button" a href={item.githubUrl}>SEE GITHUB REPO</Button>: null}
                   
                </Card.Body>
            </Card>
            </Col>
            ))}
        </Row>
    )
}

export default PortfolioItem