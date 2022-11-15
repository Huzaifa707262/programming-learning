import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';



const LeftSideNav = () => {

    return (
        <div>
            <div className='mt-4'>
                <h5>Contact Us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    );

};

export default LeftSideNav;