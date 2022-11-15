
import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light" className='mb-4'>
            <Container>
                <Image className='bg-info' src='https://miro.medium.com/max/1400/1*YMFKP8e6kR9cbM3IKXBtLw.png' style={{ height: '50px' }}></Image>
                <Navbar.Brand className='ms-3' style={{ color: 'purple' }}>Programming</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><Link className='text-decoration-none' to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#pricing" ><Link className='text-decoration-none' to='/course'>Course</Link></Nav.Link>
                        <Nav.Link href="#pricing" ><Link className='text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='text-primary'>{user?.disPlayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3  text-decoration-none' to='/login'>Login</Link>
                                        <Link to='/register' className='me-3 text-decoration-none'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to="/profile">

                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;