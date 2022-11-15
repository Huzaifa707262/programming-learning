import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = ({ course }) => {
    const { name, photo, details } = course;

    return (
        <Card >
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="primary">All news in this category</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;