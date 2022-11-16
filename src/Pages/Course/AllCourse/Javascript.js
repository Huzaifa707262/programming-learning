import React from 'react';
import { Card } from 'react-bootstrap';

const Javascript = () => {
    const javascript = {
        "id": 456,
        "name": "JAVASCRIPT",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7HZFCI0Euwzq8qotUFeCbHhhISYdqUt4rg&usqp=CAU",
        "details": "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc"
    }
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={javascript.photo} />
            <Card.Body>
                <Card.Title>{javascript.name}</Card.Title>
                <Card.Text>
                    {javascript.details}
                    approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Javascript;