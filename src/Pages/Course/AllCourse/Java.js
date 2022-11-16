import React from 'react';
import { Card } from 'react-bootstrap';

const Java = () => {
    const java = {
        "id": 1011,
        "name": "JAVA",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyseDf9dSMi2IgKP7wyKgoeke6_Ws4aT6MQ&usqp=CAU",
        "details": "Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc."
    }
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={java.photo} />
            <Card.Body>
                <Card.Title>{java.name}</Card.Title>
                <Card.Text>
                    {java.details}
                    approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Java;