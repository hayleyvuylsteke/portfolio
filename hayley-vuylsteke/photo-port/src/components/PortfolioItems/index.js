import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PortfolioItem(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="{props.image}" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                         {props.description}
                    </Card.Text>
                <Button variant="primary" a href="{props.deployedURL">CHECK IT OUT</Button>
                <Button variant="primary" a href="{props.githubUrl">SEE GITHUB REPO</Button>
            </Card.Body>
        </Card>
    )
}

export default PortfolioItem