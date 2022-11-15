import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');

    const { login, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('your email is not verified. please verify your email')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <h2 className='text-warning ms-5'>Please Login Now !!</h2>
            <Form onSubmit={handleSubmit} className=' ms-5 w-50 ' style={{ backgroundColor: 'bisque', borderRadius: '8px' }}>
                <Form.Group className="mb-2 ms-4 me-4 mt-3" controlId="formBasicEmail">
                    <Form.Label className='mt-3'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-2 ms-4 me-4 mt-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

                <Button variant="primary" className='mb-2 ms-4 me-4 mt-3' type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;