import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const CourseDetails = ({ course }) => {
    const { name, photo, details } = course;

    return (
        <Row xs={1} md={2} className="g-4 mb-3">
            {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {details.length > 50 ?
                                    <>{details.slice(0, 50) + '...'} <Link to={`/details`}>Read More..</Link></>
                                    :
                                    details
                                }
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col >
            ))}
        </Row >
    );
};

export default CourseDetails;