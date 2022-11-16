import React from 'react';
import { Card } from 'react-bootstrap';


const CPluse = () => {
    const cPluse = {
        "id": 1213,
        "name": "C++",
        "photo": "https://sololearnuploads.azureedge.net/uploads/courses/1051.png",
        "details": "C++ (pronounced C plus plus) is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms."
    }
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={cPluse.photo} />
            <Card.Body>
                <Card.Title>{cPluse.name}</Card.Title>
                <Card.Text>
                    {cPluse.details}
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CPluse;