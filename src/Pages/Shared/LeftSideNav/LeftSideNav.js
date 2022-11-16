import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';



const LeftSideNav = () => {

    return (
        <div>
            <div className='mt-4'>
                <h2 className='text-warning'>Our Courses</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-2 bg-info'><Link to="/html">HTML Course</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 bg-warning'><Link to="/javascript">JAVASCRIPT Course</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 bg-info'><Link to="/java">JAVA Course</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 bg-warning'><Link to="/php">PHP Course</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 bg-info'><Link to="/python">PYTHON Course</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 bg-warning'><Link to="/cpluse">C++ Course</Link></ListGroup.Item>
                </ListGroup>
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