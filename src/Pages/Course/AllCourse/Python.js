import React from 'react';
import { Card } from 'react-bootstrap';

const Python = () => {
    const python = {
        "id": 789,
        "name": "PYTHON",
        "photo": "https://simg.nicepng.com/png/small/70-701932_python-logo-clipart-python-head-python-logo.png",
        "details": "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. "
    }
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={python.photo} />
            <Card.Body>
                <Card.Title>{python.name}</Card.Title>
                <Card.Text>
                    {python.details}
                    approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Python;