import React from 'react';
import { Card } from 'react-bootstrap';

const Php = () => {
    const php = {
        "id": 1415,
        "name": "PHP",
        "photo": "https://cdn.tutsplus.com/net/uploads/2014/03/php-wide-retina-preview.png",
        "details": "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages.PHP scripts can only be interpreted on a server that has PHP installed.The client computers accessing the PHP scripts require a web browser only. A PHP file contains PHP tags and ends with the extension “.php”."
    }
    return (

        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={php.photo} />
            <Card.Body>
                <Card.Title>{php.name}</Card.Title>
                <Card.Text>
                    {php.details}
                    approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Php;