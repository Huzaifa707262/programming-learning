import React from 'react';
import { Card } from 'react-bootstrap';

const Html = () => {
    const html = {
        "id": 123,
        "name": "HTML",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJwl1nUWemd2j51oOAOQx4bfZUe24umRePWlo7uSU3Q&s",
        "details": "HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage."
    }
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={html.photo} />
            <Card.Body>
                <Card.Title>{html.name}</Card.Title>
                <Card.Text>
                    {html.details}
                    approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Html;