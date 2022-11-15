import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';


const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [success, setSuccess] = useState(false)

    const { createUser, providerLogin, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                setSuccess(true)
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h2 className='text-warning ms-5'>Please Register Now !!</h2>
            <Form onSubmit={handleSubmit} className='mt-3 ms-5 w-50 ' style={{ backgroundColor: 'bisque', borderRadius: '8px' }}>
                <Form.Group className="mb-2 ms-4 me-4 mt-3 " controlId="formBasicEmail">
                    <Form.Label className='mt-2'>Your Name</Form.Label>
                    <Form.Control type='text' name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-2 ms-4 me-4" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-2 ms-4 me-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-2 ms-4 me-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                < Form.Group className="mb-2 ms-4 me-4" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept Terms and conditions</>} />
                </Form.Group>

                <Form.Text className="text-danger ">
                    <p className='ms-4'> {error}</p>
                </Form.Text>
                <Form.Text className="text-success ">
                    <p className='ms-4'> {success}</p>
                </Form.Text>

                <Button variant="primary" className='mt-3 ms-4 me-4' type="submit" disabled={!accepted}>
                    Register
                </Button>
                <p className='ms-4 me-4'><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>

                <ButtonGroup vertical className='ms-5'>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                </ButtonGroup>
            </Form >
        </div>
    );
};

export default Register;