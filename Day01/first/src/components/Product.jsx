import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Product() {
    return (
        <Card className='col-sm-4' >
            <Card.Img variant="top" src="https://images.pexels.com/photos/12532644/pexels-photo-12532644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
