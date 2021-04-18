import React, { useState } from 'react';
import PortfolioItems from '../PortfolioItems'

const PortfolioList = ({ category }) => {

  const [portfolioItems] = useState([
    {
      name: 'Reward Bank',
      category: 'Full-stack Development',
      description: 'Ready to take your childs allowance cashless? Enter Reward Bank. Turning kids into super (well-behaved) kids since 2021',
      image: 'path',
      githubUrl: 'url',
      deployedURL: 'url'
    },
    {
    name: 'Date Conceirge',
    category: 'Full-stack Development',
    description: 'Dating sucks. Let Date Conceirge make it suck less. We ll take the planning off your hands.',
    image: 'path',
    githubUrl: 'url',
    deployedURL: 'url'
    },
    {
    name: 'She Talks Tech',
    category: 'Full-stack Development',
    description: 'The tech industry is domindated by men. She Talks Tech is a safe space for all the femme coders to connect, network and learn.',
    image: 'path',
    githubUrl: 'url',
    deployedURL: 'url'
  },
  {
    name: 'Budget Tracker',
    category: 'Full-stack Development',
    description: 'For the avid traveler, track your purchases and deposits while your away without the worry of internet connectivity.',
    image: 'path',
    githubUrl: 'url',
    deployedURL: 'url'
  },
  {
    name: 'Note Taker',
    category: 'Full-stack Development',
    description: 'Need a space to keep track of your thoughts, feelings and to-do list? Note Taker is here to help.',
    image: 'path',
    githubUrl: 'url',
    deployedURL: 'url'
  },
  {
    name: 'Weather Dashboard',
    category: 'Full-stack Development',
    description: 'A place to keep up to date with the weather forecast. Check out Weather Dashboard.',
    image: 'path',
    githubUrl: 'url',
    deployedURL: 'url'
  },
  {
    name: 'South Coast Osteopathy',
    category: 'Marketing',
    description: 'A freelance website built on Wix, satisfying all of the clients requests. Copy, imagery and web design done by yours truly.',
    image: 'path',
    deployedURL: 'url'
  },
  {
    name: 'Axonify Grocery Blog',
    category: 'Marketing',
    description: 'If the pandemic taught us one thing, its that our grocery associates are superheros. Check out my (ghost-written) blog to see what we can all learn from grocers.',
    image: 'path',
    deployedURL: 'https://axonify.com/blog/building-a-resilient-workforce-6-lessons-we-can-learn-from-grocers/'
  },
  {
    name: 'Axonify Retail Blog',
    category: 'Marketing',
    description: 'The right training and commnications platform can keep retail moving. In this (ghost-written) blog by me, I share how.',
    image: 'path',
    deployedURL: 'https://axonify.com/blog/how-the-right-training-and-communications-keeps-retail-moving/'
  },
  ]);

  const currentPortfolio = portfolioItems.filter((item) => item.category === category);

  return (
    <div>
        {currentPortfolio.map((item, i) =>( 
            <PortfolioItems name={item.name}  />
        ))}
    </div>
  );
};

export default PortfolioList;
