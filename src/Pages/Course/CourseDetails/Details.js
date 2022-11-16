import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const Details = ({ c }) => {
    const { name, photo, details } = c;

    return (
        <Row xs={1} md={2} className="g-4 mb-3">
            {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {
                                    details
                                }
                            </Card.Text>
                            <Button><Link to='/course' className='text-white'>Go All Courses</Link></Button>
                        </Card.Body>
                    </Card>
                </Col >
            ))}
        </Row >
    );
};

export default Details;